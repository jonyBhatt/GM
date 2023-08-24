import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AiOutlineBug } from 'react-icons/ai'
import { FaChalkboardTeacher } from "react-icons/fa"
import {GiDiamondHard} from 'react-icons/gi'

const Hero = () => {
	return (
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
				</div>
			</div>
		</div>
	);
};

export default Hero;
