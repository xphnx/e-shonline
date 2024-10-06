import { Container, Title, TopBar } from '@/components/shared';

export default function Home(): JSX.Element {
	return (
		<>
			<Container className="mt-5">
				<Title text="All products" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />
		</>
	);
}
