from flask import Flask, Request, redirect
from flask.helpers import send_from_directory
import csv
import glob
import os
from lib.colordescriptor import ColorDescriptor
from lib.searcher import Searcher
import numpy as np
import cv2
import os
import shutil
import time
import csv

# init flask with static folder for react
app = Flask(__name__, static_folder="templates/", static_url_path="/")

@app.route("/")
def index():
	if os.path.exists("static/result") == True :
		shutil.rmtree("static/result")
		shutil.rmtree("static/uploaded")
		return redirect("/home")
	else :
		return redirect("/home")

@app.route("/home")
def home():
    with open("config/calculation.csv", "r") as config:
        truePositive = 0
        trueNegative = 0
        falsePositive = 0
        falseNegative = 0

        readDict = csv.DictReader(config)
        for row in readDict:
            if row["truePositive"] == "1":
                truePositive += 1
            elif row["trueNegative"] == "1":
                trueNegative += 1
            elif row["falsePositive"] == "1":
                falsePositive += 1
            else:
                falseNegative += 1

        config.close()
        accuracy = round((((trueNegative+truePositive)/(trueNegative+truePositive+falseNegative+falsePositive))*100),2)
        precision = round(((truePositive/(falsePositive+truePositive))*100),2)
        recall = round(((truePositive/(falseNegative+truePositive))*100),2)
        f1 = round((2*(recall*precision)/(recall+precision)),2)

        datasets = [os.path.basename(x) for x in glob.glob("static/dataset/*.jpg")]
        print(datasets)
        if os.path.exists("static/result") == True :
            image_names = os.listdir("static/result")
            nearest = sorted(os.listdir("static/result"))[0]
            target = os.listdir("static/uploaded")
            return send_from_directory("index.html", f1=(f1), accuracy=(accuracy), precision=(precision), recall=(recall), image_names=sorted(image_names), target=(target), page_status=1, count=len(datasets), nearest=(nearest))
        else :
            return send_from_directory("index.html", page_status=2, count=len(datasets))

@app.route("/predict", methods=["POST"])
def search():
	gambar = Request.files["image"]
	file = gambar.read()
	nama = gambar.filename[0:3]
	cd = ColorDescriptor((8, 12, 3))
	npimg = np.frombuffer(file, np.uint8)
	query = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
	
	features = cd.describe(query)
	 
	searcher = Searcher("config/extracted_features.csv")
	results = searcher.search(features)

	positif=["mou","sea","des"]
	observ= str(results[0][1])[:3]
	tp = 1 if nama in positif and nama == observ else 0
	tn = 1 if nama not in positif and nama != observ else 0
	fp = 1 if nama not in positif and nama == observ else 0
	fn = 1 if nama in positif and nama != observ else 0
	conma = [tp,tn,fp,fn] 
	with open("config/calculation.csv","a") as conf:
		tulis = csv.writer(conf)
		tulis.writerow(conma)
	conf.close

	os.makedirs("static/result")
	os.makedirs("static/uploaded")
	
	i = 1
	for (score, resultID) in results:
		i += 1
		result = cv2.imread("static/datasets/" + resultID)
		saveimg = cv2.imwrite("static/result/" + str(score) + str(i) + ".jpeg", result)

	imgstr = time.strftime("%Y%m%d-%H%M%S")
	cv2.imwrite("static/uploaded/"+ imgstr +".jpeg", query)
	return redirect("/")

if __name__ == "__main__":
    app.run()