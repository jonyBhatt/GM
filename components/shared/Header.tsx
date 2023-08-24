"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
const Header = () => {
	const [toggle, setToggle] = useState(false);
	const loggedUser = false;
	return (
		<nav className="py-4 border-b border-red-400">
			<div className="container items-center justify-between flex mx-auto">
				{/* Logo and search */}
				<div className="flex items-center gap-4">
					<Image
						src={"/assets/logo.png"}
						alt="Logo"
						width={48}
						height={48}
						className="rounded-full object-contain"
					/>
					<Input type="text" placeholder="Search Mentor..." />
				</div>

				{/* Desktop Menu */}
				<div className="sm:hidden xs:hidden md:block">
					<div className="flex items-center gap-3">
						<div className="group">
							<Link className=" text-center" href="/find-mentors">
								Find Mentors
							</Link>
							<div className="hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-glassmorphism text-black duration-300">
								<div className="pb-5">
									<h2 className="text-3xl text-white">Find Mentors</h2>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
									<div className="flex flex-col gap-2 border-r border-slate-500">
										<h3 className="text-white mb-4">Web Development</h3>
										<Link href="/" className="text-sm text-white">
											Nextjs
										</Link>
									</div>
									<div className="flex flex-col gap-2 border-r border-slate-500">
										<h3 className="text-white mb-4">Mobile App Development</h3>
										<Link href="/" className="text-sm text-white">
											React Native
										</Link>
									</div>
									<div className="flex flex-col gap-2 border-r border-slate-500">
										<h3 className="text-white mb-4">Programming Languages</h3>
										<Link href="/" className="text-sm text-white">
											Javascript
										</Link>
									</div>
									<div className="flex flex-col gap-2 ">
										<h3 className="text-white mb-4">Data Science</h3>
										<Link href="/" className="text-sm text-white">
											Machine Learning
										</Link>
										<Link href="/" className="text-sm text-white">
											Artificial Intelligence
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="group">
							<Link className=" text-center" href="/find-freelancers">
								Find Freelancers
							</Link>
							<div className="hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-glassmorphism text-black duration-300">
								<div className="pb-5">
									<h2 className="text-3xl text-white">Find Freelancers</h2>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
									<div className="flex flex-col gap-2 border-r border-slate-500">
										<h3 className="text-white mb-4">Front End</h3>
										<Link href="/" className="text-sm text-white">
											Nextjs
										</Link>
										<Link href="/" className="text-sm text-white">
											React
										</Link>
									</div>
									<div className="flex flex-col gap-2 border-r border-slate-500">
										<h3 className="text-white mb-4">Back End</h3>
										<Link href="/" className="text-sm text-white">
											Nodejs
										</Link>
										<Link href="/" className="text-sm text-white">
											Django
										</Link>
									</div>
									<div className="flex flex-col gap-2 border-r border-slate-500">
										<h3 className="text-white mb-4">AI/ML</h3>
										<Link href="/" className="text-sm text-white">
											AI
										</Link>
										<Link href="/" className="text-sm text-white">
											MATLAB
										</Link>
									</div>
									<div className="flex flex-col gap-2 ">
										<h3 className="text-white mb-4">Data</h3>
										<Link href="/" className="text-sm text-white">
											Database
										</Link>
										<Link href="/" className="text-sm text-white">
											SQL
										</Link>
									</div>
								</div>
							</div>
						</div>

						<Link className=" text-center" href="/howitworks/mentorship">
							How It Works
						</Link>
						<Link className="text-center" href="/events">
							Events
						</Link>
						<Link className="text-center" href="/blog">
							Blog
						</Link>
						{loggedUser ? (
							<>
								<p>Logged User</p>
							</>
						) : (
							<>
								<Link className="text-center" href="/signup">
									<Button variant={"default"}>Sign Up</Button>
								</Link>
								<Link className="text-center" href="/signin">
									<Button variant={"destructive"}>Login</Button>
								</Link>
							</>
						)}
					</div>
				</div>
				{/* Desktop Menu Complete */}
				{/* Mobile Menu */}

				<div className=" relative md:hidden">
					<AiOutlineMenu
						size="25"
						className={`${toggle ? "hidden" : "block"} cursor-pointer z-0`}
						onClick={() => setToggle(!toggle)}
					/>
					{toggle && (
						<>
							<AiOutlineClose
								size="25"
								className="cursor-pointer z-0"
								onClick={() => setToggle(false)}
							/>

							<div className="absolute top-8 bg-slate-600 p-4 flex flex-col gap-4  right-0  w-40  rounded-md z-10">
								<Link className=" text-center" href="/find-mentors">
									Find Mentors
								</Link>
								<Link className=" text-center" href="/find-freelancers">
									Find Freelancers
								</Link>
								<Link className=" text-center" href="/howitworks/mentorship">
									How It Works
								</Link>
								<Link className="text-center" href="/events">
									Events
								</Link>
								<Link className="text-center" href="/blog">
									Blog
								</Link>
								{loggedUser ? (
									<>
										<p>Logged User</p>
									</>
								) : (
									<>
										<Link className="text-center" href="/signup">
											Sign Up
										</Link>
										<Link className="text-center" href="/signin">
											Login
										</Link>
									</>
								)}
							</div>
						</>
					)}
				</div>
				{/* Mobile Menu Complete */}
			</div>
		</nav>
	);
};

export default Header;
