import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react"

type Props = {
	activeCourse: any // Replace 'any' with the correct type
	hearts: number
	points: number
	hasActiveSubscription: boolean
}

export const UserProgress = ({
	activeCourse,
	hearts,
	points,
	hasActiveSubscription,
}: Props) => {
	return (
		<div className="flex items-center justify-between gap-x-2 w-full">
			<Link href="/courses">
				<Button variant="ghost">
					<Image
						className="rounded-md border"
						src={activeCourse.imageSrc}
						alt={activeCourse.title}
						width={32}
						height={32}
					/>
				</Button>
			</Link>
			<Link href="/shop">
				<Button variant="ghost" className="text-orange-500">
					<Image
						className="mr-2"
						src="/points.svg"
						height={28}
						width={28}
						alt="Points"
					/>
					{points}
				</Button>
			</Link>
			<Link href="/shop">
				<Button variant="ghost" className="text-rose-500">
					<Image
						className="mr-2"
						src="/heart.svg"
						height={22}
						width={22}
						alt="Hearts"
					/>
					{hasActiveSubscription ? (
						<InfinityIcon className="h-4 w-4 stroke-[3]" />
					) : (
						hearts
					)}
				</Button>
			</Link>
		</div>
	)
}
