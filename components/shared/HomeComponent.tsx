"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AiOutlineBug, AiOutlineFileSearch } from "react-icons/ai";
import { FaChalkboardTeacher, FaUserGraduate, FaPython } from "react-icons/fa";
import { GiDiamondHard } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { developerData } from "@/constant";
import { useUser } from "@clerk/nextjs";

const HomeComponent = () => {
	const {isLoaded} = useUser()
	return (
		<div>
			{/* Feature Section */}
			<div className="container mx-auto">
				{/* Animated Screen and Title */}
				<div className="flex items-center justify-center min-h-screen">
					<div className="relative w-full max-w-4xl">
						<div className="absolute top-0 left-12 w-72 h-72 bg-purple-400 rounded-full animate-blob mix-blend-soft-light blur-2xl opacity-80 md:block  sm:hidden xs:hidden "></div>
						<div className="absolute top-0 xs:right-14  w-72 h-72 bg-yellow-400 rounded-full animate-blob mix-blend-soft-light blur-2xl opacity-80  md:block  sm:hidden xs:hidden  animation-delay-2second"></div>
						<div className="absolute  left-72 w-72 h-72 bg-pink-400 rounded-full animate-blob mix-blend-soft-light blur-2xl opacity-80  md:block  sm:hidden xs:hidden  animation-delay-4second"></div>
						<div className="flex flex-col relative w-full items-center">
							<h1 className="text-white text-center mb-4 md:text-5xl sm:text-3xl">
								Find a developer for <br /> live mentorship & freelance projects
							</h1>
							<Button className="mt-8 text-lg">Get Help Now</Button>
						</div>
					</div>
				</div>
				{/* Get help from vetted software developers */}
				<div className="mt-9">
					<h2 className="text-center text-3xl mb-6">
						Get help from vetted software developers
					</h2>
					{/* Mobile Screen */}
					<div className="mt-4 md:hidden flex flex-col gap-3.5">
						{/* Image Div */}
						<div className="flex justify-center items-center my-4">
							<Image
								src="/assets/one2one.svg"
								alt="on2on"
								width={300}
								height={300}
								className="object-cover"
							/>
						</div>
						{/* Text Div */}
						<div className="mt-4 flex items-start flex-col">
							<h4 className="text-lg mb-2">
								One-on-one live <br /> mentorship
							</h4>
							<div className="flex flex-col gap-3 my-4">
								<div className="flex gap-4 items-center">
									<AiOutlineBug size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Debug with the help of an expert
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<FaChalkboardTeacher size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Personalize your learning experience
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<GiDiamondHard size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Get answers to complex problems
									</span>
								</div>
							</div>
							<Button className="uppercase my-8" variant={"destructive"}>
								Find a mentor
							</Button>
						</div>
						<div className="flex justify-center items-center my-4">
							<Image
								src="/assets/freelance.svg"
								alt="on2on"
								width={300}
								height={300}
								className="object-cover"
							/>
						</div>
						<div className="mt-4 flex items-start flex-col">
							<h4 className="text-lg mb-2">
								Project-based freelance <br /> work
							</h4>
							<div className="flex flex-col gap-3 my-4">
								<div className="flex gap-4 items-center">
									<AiOutlineFileSearch size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Find experts for on-demand code review
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<FaUserGraduate size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Personalize your learning experience
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<GoRocket size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Turn your idea into an MVP
									</span>
								</div>
							</div>
							<Button className="uppercase my-8" variant={"destructive"}>
								Find a freelancer
							</Button>
						</div>
					</div>
					{/* Mobile Screen */}
					<div className="mt-4 md:flex items-center sm:hidden xs:hidden justify-between px-20">
						{/* Image Div */}
						<div className="flex justify-center items-center my-4">
							<Image
								src="/assets/one2one.svg"
								alt="on2on"
								width={300}
								height={300}
								className="object-cover"
							/>
						</div>
						{/* Text Div */}
						<div className="mt-4 flex items-start flex-col">
							<h4 className="text-lg mb-2">
								One-on-one live <br /> mentorship
							</h4>
							<div className="flex flex-col gap-3 my-4">
								<div className="flex gap-4 items-center">
									<AiOutlineBug size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Debug with the help of an expert
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<FaChalkboardTeacher size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Personalize your learning experience
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<GiDiamondHard size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Get answers to complex problems
									</span>
								</div>
							</div>
							<Button className="uppercase my-8" variant={"destructive"}>
								Find a mentor
							</Button>
						</div>
					</div>
					<div className="mt-4 md:flex sm:hidden xs:hidden items-center justify-center gap-60">
						<div className="mt-4 flex items-start flex-col">
							<h4 className="text-lg mb-2">
								Project-based freelance <br /> work
							</h4>
							<div className="flex flex-col gap-3 my-4">
								<div className="flex gap-4 items-center">
									<AiOutlineFileSearch size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Find experts for on-demand code review
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<FaUserGraduate size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Personalize your learning experience
									</span>
								</div>
								<div className="flex gap-4 items-center">
									<GoRocket size="30px" />
									<span className="text-gray-500 font-light text-sm">
										Turn your idea into an MVP
									</span>
								</div>
							</div>
							<Button className="uppercase my-8" variant={"destructive"}>
								Find a freelancer
							</Button>
						</div>
						<div className="flex justify-center items-center my-4">
							<Image
								src="/assets/freelance.svg"
								alt="on2on"
								width={300}
								height={300}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Events */}
			<div className="mt-4 bg-gray-800  py-7 container mx-auto">
				{/* Mobile Screen */}
				<div className="flex flex-col gap-3 items-start md:hidden">
					<div className="flex flex-col items-start">
						<h3 className="font-bold text-2xl ">getmentor</h3>
						<span className="letter-gap-5">Events</span>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-lg">
							Technical and career talks <br />{" "}
							<span className="text-gradient text-lg">for developers</span>{" "}
						</h4>
						<span className="font-light text-sm ">
							Attend and give developer talks with topics like new tools and{" "}
							<br />
							frameworks, technical concepts, live coding, career progression,
							and <br /> more.
						</span>
						<Link
							href="/events"
							className="flex gap-3.5 items-center text-gradient">
							See upcoming events
							<BsArrowRight size="25" color="#ea5753" />
						</Link>
					</div>
					<div className="flex items-center justify-center max-w-lg my-8">
						<Image
							src="/assets/event.svg"
							alt="event"
							width={400}
							height={400}
						/>
					</div>
				</div>
				{/* Mobile Screen */}
				<div className="flex gap-6 items-center justify-around xs:hidden">
					<div className="flex flex-col items-start">
						<div className="my-4">
							<h3 className="font-bold text-2xl ">getmentor</h3>
							<span className="letter-gap-5">Events</span>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-lg">
								Technical and career talks <br />{" "}
								<span className="text-gradient text-lg">for developers</span>{" "}
							</h4>
							<span className="font-light text-sm ">
								Attend and give developer talks with topics like new tools and{" "}
								<br />
								frameworks, technical concepts, live coding, career progression,
								and <br /> more.
							</span>
							<Link
								href="/events"
								className="flex gap-3.5 items-center text-gradient">
								See upcoming events
								<BsArrowRight size="25" color="#ea5753" />
							</Link>
						</div>
					</div>

					<div className="flex items-center justify-center max-w-lg my-8">
						<Image
							src="/assets/event.svg"
							alt="event"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>
			{/* Coachfy */}
			<div className="mt-8 container mx-auto">
				{/* Mobile Screen */}
				<div className="flex flex-col justify-center items-center gap-1.5 text-center md:hidden">
					<div className="mb-6">
						<h5 className="text-lg">coachfy()</h5>
						<h3 className="text-3xl">
							Hiring for a bigger <br /> project
						</h3>
					</div>
					<span className="text-lg font-normal mb-4 xs:text-sm">
						Coachfy helps you find senior developers for both <br /> permanent
						full-time roles and 40+ hour contract <br /> projects.
					</span>
					<Link
						href="/"
						className="flex gap-3.5 items-center text-gradient text-xl">
						Visit Coachify to learn more
						<BsArrowRight size="25" color="#ea5753" />
					</Link>
					<div className="flex items-center justify-center max-w-lg my-8">
						<Image src="/assets/dev.svg" alt="event" width={500} height={500} />
					</div>
				</div>
				{/* Mobile Screen */}
				<div className="md:flex items-center gap-4 justify-evenly text-center xs:hidden">
					<div className="flex flex-col gap-3">
						<div className="mb-6">
							<h5 className="text-lg">coachfy()</h5>
							<h3 className="text-3xl">
								Hiring for a bigger <br /> project
							</h3>
						</div>
						<span className="text-lg font-normal mb-4">
							Coachfy helps you find senior developers for both <br /> permanent
							full-time roles and 40+ hour contract <br /> projects.
						</span>
						<Link
							href="/"
							className="flex gap-3.5 items-center justify-center text-gradient text-xl">
							Visit Coachify to learn more
							<BsArrowRight size="25" color="#ea5753" />
						</Link>
					</div>
					<div className="flex items-center justify-center max-w-lg my-8">
						<Image src="/assets/dev.svg" alt="event" width={500} height={500} />
					</div>
				</div>
			</div>
			{/* Connect */}
			<div className="">
				{/* Mobile Screen */}
				<div className="mt-4 container mx-auto bg-gradient-to-r from-fuchsia-700 via-gray-900 to-black py-10 md:hidden">
					<h2 className="text-3xl font-bold text-center">
						Connect with <br /> 12000+ top{" "}
						<span className="text-gradient">developers</span> <br /> anytime
					</h2>
					<div className="mt-8 flex flex-col items-center gap-3.5 justify-center">
						{developerData.map((dev) => (
							<div
								className="p-4 bg-slate-800 rounded-md max-w-xs w-full flex mx-auto items-center justify-center gap-5 ring-2 ring-slate-400"
								key={dev.id}>
								<Image
									src={dev.image}
									alt="user"
									width={100}
									height={100}
									className="rounded-full object-cover"
								/>
								<div className="flex flex-col gap-1">
									<h4 className="text-lg font-bold">{dev.name}</h4>
									<span className="text-sm font-normal text-gray-300">
										{dev.work}
									</span>
									<div className="flex items-center gap-2">
										{dev.icon.map((i) => (
											<div key={i.id}>{i.icon}</div>
										))}
										{/* <FaPython size="20" color="#787276" />
									<BiLogoJavascript size="20" color="#787276" />
									<BiLogoPostgresql size="20" color="#787276" /> */}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Mobile Screen */}
				<div className="mt-4 container mx-auto bg-gradient-to-r from-fuchsia-700 via-gray-900 to-black xs:hidden py-10 ">
					<h2 className="text-3xl font-bold text-center">
						Connect with <br /> 12000+ top{" "}
						<span className="text-gradient">developers</span> anytime
					</h2>
					<div className="mt-8 flex items-center gap-4 justify-center">
						{developerData.map((dev) => (
							<div
								className="p-4 bg-slate-800 rounded-md max-w-sm flex-wrap w-full flex mx-auto items-center justify-center gap-5 ring-2 ring-slate-400"
								key={dev.id}>
								<Image
									src={dev.image}
									alt="user"
									width={100}
									height={100}
									className="rounded-full object-cover"
								/>
								<div className="flex flex-col gap-1">
									<h4 className="text-lg font-bold">{dev.name}</h4>
									<span className="text-sm font-normal text-gray-300">
										{dev.work}
									</span>
									<div className="flex items-center gap-2">
										{dev.icon.map((i) => (
											<div key={i.id}>{i.icon}</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Find Get Mentor */}
			<div className="container mx-auto my-8">
				<h1 className="font-bold md:text-4xl xs:text-3xl text-center">
					What you'll find on Getmentor
				</h1>
				<div className="flex justify-center gap-8 my-7 items-center flex-wrap">
					<div className="flex flex-col items-center max-w-sm lg:h-80 gap-4 p-4 rounded-sm shadow shadow-slate-400">
						<Image
							src="/assets/analytics.svg"
							alt="svg"
							width={200}
							height={200}
							className="object-cover my-4"
						/>
						<h3 className="md:text-2xl xs:text-lg text-center font-bold">
							A variety of technologies
						</h3>
						<span className="sm:text-sm text-center font-light xs:text-xs">
							From JavaScript and React to Swift and <br /> Go, our developers
							cover it all.
						</span>
					</div>

					<div className="flex flex-col items-center max-w-sm gap-4 p-4 lg:h-80  rounded-sm shadow shadow-slate-400">
						<Image
							src="/assets/review.svg"
							alt="svg"
							width={200}
							height={200}
							className="object-cover my-4"
						/>
						<h3 className="md:text-2xl xs:text-lg text-center font-bold">
							Code help from experts
						</h3>
						<span className="sm:text-sm text-center font-light xs:text-xs">
							Our developers go through a strict <br /> application and vetting
							process, leaving <br /> only the best.
						</span>
					</div>

					<div className="flex flex-col items-center max-w-sm gap-4  lg:h-80  p-4 rounded-sm shadow shadow-slate-400">
						<Image
							src="/assets/coder.svg"
							alt="svg"
							width={200}
							height={200}
							className="object-cover my-4"
						/>
						<h3 className="md:text-2xl xs:text-lg text-center font-bold">
							Effortless setup
						</h3>
						<span className="sm:text-sm text-center font-light xs:text-xs">
							Take advantage of our easy set up and <br /> billing process to
							connect with a <br /> developer right away.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
