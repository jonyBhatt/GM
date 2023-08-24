import { Header, HomeComponent } from '@/components/shared'
import React from 'react'
import {  currentUser } from "@clerk/nextjs";
const Home = async () => {
  	const user = await currentUser();
  return (
		<div>
			<Header />
			<HomeComponent />
		</div>
	);
}

export default Home