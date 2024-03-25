import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
	const languages = [
		{
			id: 1,
			name: "Croatian",
			image: "/hr.svg",
		},
		{
			id: 2,
			name: "Spanish",
			image: "/es.svg",
		},
		{
			id: 3,
			name: "French",
			image: "/fr.svg",
		},
		{
			id: 4,
			name: "Italian",
			image: "/it.svg",
		},
		{
			id: 5,
			name: "Japanese",
			image: "/jp.svg",
		},
	]

	return (
		<footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
			<div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
				{languages.map((item) => (
					<Button className="w-full" size="lg" variant="ghost" key={item.id}>
						<Image
							src={item.image}
							alt={item.name}
							height={32}
							width={40}
							className="mr-4 rounded-md"
						/>
					</Button>
				))}
			</div>
		</footer>
	)
}
