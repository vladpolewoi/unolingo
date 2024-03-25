import { MobileHeader } from "@/components/MobileHeader"
import { Sidebar } from "@/components/Sidebar"

type Props = {
	children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<MobileHeader />
			<Sidebar className="hidden lg:flex" />
			<main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
				<div className="h-full bg-green-200">{children}</div>
			</main>
		</>
	)
}

export default MainLayout
