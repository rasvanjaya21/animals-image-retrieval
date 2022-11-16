import './App.css';
import { useState, useEffect } from 'react';
// import { div } from "react-router-dom";
import {
	Bars3Icon,
	ShoppingCartIcon,
	BookmarkIcon,
	CalculatorIcon,
	RocketLaunchIcon,
	XMarkIcon,
	PhotoIcon,
} from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

function App() {

	const navigation = [
		{
			name: "Home",
			href: "/",
			class: "text-primary-500 hover:text-primary-700",
			onClick: (event) => {},
		},
		{
			name: "Products",
			href: "/products",
			class: "text-primary-500 hover:text-primary-700",
			onClick: (event) => {},
		},
		{
			name: "Changelogs",
			href: "/changelogs",
			class: "text-primary-500 hover:text-primary-700",
			onClick: (event) => {},
		},
		{
			name: "About",
			href: "/about",
			class: "text-primary-500 hover:text-primary-700",
			onClick: (event) => {},
		},
	];

	const [scrollPosition, setScrollPosition] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);

	const [isNavOpen, setIsNavOpen] = useState(false);

	const [processState, setProcessState] = useState("gallery");

	function handleScroll() {
		const position = window.pageYOffset;
		setScrollPosition(position);
	}

	useEffect(() => {

		// if isNavOpen is true then add overflow-hidden class to body
		if (isNavOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		window.addEventListener("scroll", handleScroll, { passive: true });

		if (scrollPosition > 5) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}

	}, [scrollPosition, isScrolled, isNavOpen]);

  return (
		<>
			<div className="w-screen">
				{isNavOpen ? (
					<div
						className={
							isScrolled
								? `md:hidden fixed p-5 pr-3 sm:pr-12 pt-5 lg:p-7 lg:pt-12 sm:px-14 md:px-24 lg:px-24 z-30 h-full w-full bg-white/40 backdrop-blur-[10px]`
								: `md:hidden fixed p-5 pr-3 sm:pr-12 pt-10 lg:p-7 lg:pt-12 sm:px-14 md:px-24 lg:px-24 z-30 h-full w-full bg-white/40 backdrop-blur-[10px]`
						}
					>
						<div className="flex w-full items-center justify-between">
							<div className="text-4xl text-primary" href="/">
								<div className="flex items-center">
									<img src="/logo.svg" className="h-10" alt="Logo" />
								</div>
								{/* <Logo /> */}
							</div>
							<div className="md:hidden text-primary text-2xl">
								Welcome to UMM Citra
							</div>
							<button
								className="inline-flex justify-center rounded-md p-2 text-primary-700 hover:bg-primary-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
								onClick={(event) => {
									event.preventDefault();
									setIsNavOpen(false);
									console.log("close nav");
								}}
							>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<nav className="pt-12">
							<div href="/">
								<div className="font-medium text-gray-500 hover:text-gray-900">
									Home
								</div>
							</div>
							<div href="/">
								<div className="font-medium text-gray-500 hover:text-gray-900">
									About
								</div>
							</div>
							<div href="/">
								<div className="font-medium text-gray-500 hover:text-gray-900">
									Contact
								</div>
							</div>
							<div href="/">
								<div className="font-medium text-gray-500 hover:text-gray-900">
									Blog
								</div>
							</div>
							<div href="/">
								<div className="font-medium text-gray-500 hover:text-gray-900">
									Login
								</div>
							</div>
							<div href="/">
								<div className="font-medium text-gray-500 hover:text-gray-900">
									Register
								</div>
							</div>
						</nav>
					</div>
				) : (
					<div></div>
				)}
				<div className="mx-auto">
					<div className="absolute min-w-fit w-full left-0 right-0 sm:right-0 p-4 pt-24 sm:px-14 md:p-24 lg:pr-24 md:mt-10">
						<div
							className={
								isScrolled
									? `fixed right-0 top-0 z-20 bg-white/40 backdrop-blur-[15px] p-5 pt-5 lg:p-7 w-full sm:px-14 md:px-24 lg:px-24 lg:pt-6 shadow-md transition-all duration-300`
									: `fixed right-0 top-0 z-20 bg-white p-5 pt-10 lg:p-7 lg:pt-12 w-full sm:px-14 md:px-24 lg:px-24 transition-all duration-300 pb-5`
							}
						>
							<nav
								className="relative flex items-center justify-between sm:h-10"
								aria-label="Global"
							>
								<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
									<div className="flex w-full items-center justify-between">
										<div className="text-4xl text-primary" href="/">
											<div className="flex items-center">
												<img src="/logo.svg" className="h-10" alt="Logo" />
											</div>
											{/* <Logo /> */}
										</div>
										<div className="md:hidden text-primary text-2xl">
											Welcome to UMM Citra
										</div>
										<div className="-mr-2 flex items-center md:hidden">
											<button
												className="inline-flex items-center justify-center rounded-md p-2 text-primary-700 hover:bg-primary-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
												onClick={(event) => {
													console.log("nav open");
													setIsNavOpen(true);
												}}
											>
												<Bars3Icon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
								<div className="hidden md:ml-10 md:flex md:space-x-8">
									{navigation.map((items) => (
										<div
											key={items.name}
											href={items.href}
											className={`font-medium ${items.class}`}
											onClick={items.onClick}
										>
											{items.name}
										</div>
									))}
								</div>
							</nav>
						</div>
						<main className="mx-auto mt-4">
							<div className="lg:flex-row w-12/12 w-full">
								<div className="flex-row w-12/12  pt-4 p-6 bg-primary-100 bg-opacity-90 rounded-xl">
									<div className="w-12/12">
										<div className="text-xl text-primary-600	">
											# Select Sample Query
										</div>
										<div className="text-xs mb-4 text-gray-500">
											Pilih citra yang akan dicari
										</div>
									</div>
									<div className="flex flex-col sm:flex-row w-12/12 space-x-0 sm:space-x-2 lg:space-x-3">
										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>
									</div>
									<div className="flex flex-col sm:flex-row w-12/12 pt-4 space-x-0 sm:space-x-2 lg:space-x-3">
										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>
									</div>

									<div className="flex flex-col sm:flex-row w-12/12 space-x-0 pt-4 sm:space-x-2 lg:space-x-3">
										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="hidden sm:flex flex-col lg:w-4/12">
											<div className=" rounded-lg">
												<img
													className="rounded-lg hover:shadow-primary hover:transition-all duration-300"
													src="/preview.png"
													width={400}
													height={0}
													alt="Preview Dataset"
												/>
											</div>
										</div>

										<div className="flex flex-col mt-[-35px] lg:w-4/12 sm:hidden rounded-xl shadow-primary">
											<Swiper
												className="rounded-xl"
												spaceBetween={30}
												autoplay={{
													delay: 2500,
													disableOnInteraction: false,
												}}
												modules={[Autoplay]}
											>
												<SwiperSlide className="rounded-xl"></SwiperSlide>
												<SwiperSlide className="rounded-xl"></SwiperSlide>
												<SwiperSlide className="rounded-xl"></SwiperSlide>
												<SwiperSlide className="rounded-xl"></SwiperSlide>
											</Swiper>
										</div>
									</div>
								</div>

								<div className="space-y-6 pt-6 pb-32 md:pb-12">
									<div className="lg:flex space-y-6 lg:space-y-0 lg:space-x-6 lg:w-12/12">
										<div className="flex-row w-12/12 lg:w-6/12 pt-4 p-6 bg-primary-100 bg-opacity-90 rounded-xl">
											<div className="w-12/12">
												<div className="lg:w-4/8 flex-auto ">
													<div className="text-xl text-primary-600	">
														{"# Upload Image"}
													</div>
													<div className="text-xs mb-4 text-gray-500">
														{
															"Unggah citra yang akan dicari"
														}
													</div>
												</div>
												<div className="border-t-2 my-6 border-dashed"></div>

												<div className="lg:w-4/8 flex-auto">
													<div className="space-y-4">
														<div className="w-full">
															<div className="relative">
																<div className="relative w-full cursor-default overflow-hidden rounded-xl bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
																	{/* <div className="text-xs absolute inset-y-0 pl-3 m-[3px] rounded-tl-lg rounded-bl-lg text-white bg-primary-400 flex items-center  w-[115px]">
																		{`Browse Image =====>`}
																	</div> */}
																	<input
																		type="file"
																		accept="image/*"
																		className="hover:cursor-pointer w-full border-none py-2 pl-2 pr-2 text-xs leading-5 focus:ring-0 outline-none text-primary"
																		onChange={(event) => {}}
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="flex-row w-12/12 lg:w-6/12 pt-4 p-6 bg-primary-100 bg-opacity-90 rounded-xl">
											<div className="w-12/12 ">
												<div className="text-xl text-primary-600	">
													# Retrieval Result
												</div>
												<div className="text-xs mb-4 text-gray-500">
													Hasil dari pencarian citra
												</div>
												<div className="border-t-2 my-6 border-dashed"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="z-10 fixed w-full bottom-0 right-0 left-0 p-4 pb-0 pt-0 sm:px-14 sm:pt-0 md:px-24 md:pt-0 lg:p-10 lg:px-24 lg:pt-0 lg:pb-0 shadow-[0_0_3px_0_rgba(0,0,0,0.20)] bg-white/40 backdrop-blur-[15px]">
								<footer className=" items-center justify-between">
									<div className="border-solid conet h-10 w-full">
										<div className="flex h-full items-center border-b">
											<div className="flex-row">
												<div className=" text-xs text-gray-500">
													{processState === "gallery" ? (
														<>
															# Petunjuk : Bacalah keterangan pada masing -
															masing judul
														</>
													) : processState === "products" ? (
														<></>
													) : processState === "address" ? (
														<></>
													) : processState === "postage" ? (
														<></>
													) : processState === "order" ? (
														<></>
													) : (
														<></>
													)}
												</div>
											</div>
										</div>
									</div>
									<div className="flex text-center w-12/12 m-3 mx-0 ">
										<div
											className={`${
												processState === "gallery"
													? `flex-row justify-center mr-2 py-3 bg-primary-400 rounded-xl w-3/12 cursor-pointer shadow-md`
													: `flex-row justify-center mr-2 py-3 bg-primary-700 bg-opacity-10 rounded-xl w-3/12 cursor-pointer`
											}`}
											onClick={(event) => {
												if (processState !== "gallery") {
													// setProcessState("order");
													setProcessState("gallery");
												}
											}}
										>
											<div className="flex place-content-center">
												<PhotoIcon
													className={`${
														processState === "gallery"
															? `h-5 w-5 text-white `
															: `h-5 w-5 text-primary`
													}`}
												/>
											</div>
											<div
												className={`${
													processState === "gallery"
														? `text-xs mt-1 text-center text-white `
														: `text-xs mt-1 text-center text-primary`
												}`}
											>
												Galeri
											</div>
										</div>
										<div
											className={`${
												processState === "products"
													? `flex-row justify-center mr-2 py-3 bg-primary-400 rounded-xl w-3/12 cursor-pointer shadow-md`
													: `flex-row justify-center mr-2 py-3 bg-primary-700 bg-opacity-10 rounded-xl w-3/12 cursor-pointer`
											}`}
											onClick={(event) => {
												if (processState !== "products") {
													// setProcessState("order");
													setProcessState("products");
												}
											}}
										>
											<div className="flex place-content-center">
												<ShoppingCartIcon
													className={`${
														processState === "products"
															? `h-5 w-5 text-white `
															: `h-5 w-5 text-primary`
													}`}
												/>
											</div>
											<div
												className={`${
													processState === "products"
														? `text-xs mt-1 text-center text-white `
														: `text-xs mt-1 text-center text-primary`
												}`}
											>
												Produk
											</div>
										</div>
										<div
											className={`${
												processState === "address"
													? `flex-row justify-center mr-2 py-3 bg-primary-400 rounded-xl w-3/12 cursor-pointer shadow-md`
													: `flex-row justify-center mr-2 py-3 bg-primary-700 bg-opacity-10 rounded-xl w-3/12 cursor-pointer`
											}`}
											onClick={(event) => {
												setProcessState("address");
											}}
										>
											<div className="flex place-content-center">
												<BookmarkIcon
													className={`${
														processState === "address"
															? `h-5 w-5 text-white `
															: `h-5 w-5 text-primary`
													}`}
												/>
											</div>
											<div
												className={`${
													processState === "address"
														? `text-xs mt-1 text-center text-white `
														: `text-xs mt-1 text-center text-primary`
												}`}
											>
												Alamat
											</div>
										</div>
										<div
											className={`${
												processState === "postage"
													? `flex-row justify-center mr-2 py-3 bg-primary-400 rounded-xl w-3/12 cursor-pointer shadow-md`
													: `flex-row justify-center mr-2 py-3 bg-primary-700 bg-opacity-10 rounded-xl w-3/12 cursor-pointer`
											}`}
											onClick={(event) => {
												setProcessState("postage");
											}}
										>
											<div className="flex place-content-center">
												<CalculatorIcon
													className={`${
														processState === "postage"
															? `h-5 w-5 text-white `
															: `h-5 w-5 text-primary`
													}`}
												/>
											</div>
											<div
												className={`${
													processState === "postage"
														? `text-xs mt-1 text-center text-white `
														: `text-xs mt-1 text-center text-primary`
												}`}
											>
												Ongkir
											</div>
										</div>
										<div
											className={`${
												processState === "order"
													? `flex-row justify-center py-3 bg-primary-400 rounded-xl w-3/12 cursor-pointer shadow-md`
													: `flex-row justify-center py-3 bg-primary-700 bg-opacity-10 rounded-xl w-3/12 cursor-pointer`
											}`}
											onClick={(event) => {
												setProcessState("order");
											}}
										>
											<div className="flex place-content-center">
												<RocketLaunchIcon
													className={`${
														processState === "order"
															? `h-5 w-5 text-white `
															: `h-5 w-5 text-primary`
													}`}
												/>
											</div>
											<div
												className={`${
													processState === "order"
														? `text-xs mt-1 text-center text-white `
														: `text-xs mt-1 text-center text-primary`
												}`}
											>
												Pesan
											</div>
										</div>
									</div>
								</footer>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
