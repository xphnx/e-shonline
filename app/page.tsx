import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home(): JSX.Element {
	return (
		<>
			<Container className="mt-5">
				<Title text="All products" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="flex gap-[60px] pb-14 mt-10">
				<div className="w-[250px]">
					<Filters />
				</div>

				<div className="flex-1">
					<div className="flex flex-col gap-16">Products list</div>
				</div>
			</Container>
		</>
	);
}
