import { Header } from '@/components/shared';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header/>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1>Home</h1>
			</main>
		</>
	);
}
