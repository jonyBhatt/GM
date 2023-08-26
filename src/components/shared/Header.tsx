"use client"
import Link from 'next/link'
import React from 'react'
import { useAuth, UserButton } from '@clerk/nextjs'
const Header = () => {
    const {userId} = useAuth()
  return (
		<nav className="py-6 border-b border-red-300">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="flex items center gap-4">
						<h1>Logo</h1>
						<span>Search</span>
					</div>
					<div className="flex items-center gap-4">
						<div className="group">
							<Link href="/find-mentor">Find Mentor</Link>
						</div>
						{!userId ? (
							<>
								<button>
									<Link href="/sign-in">Sign In</Link>
								</button>
							</>
						) : (
                              <>
                              <UserButton afterSignOutUrl='/sign-in' /></>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header