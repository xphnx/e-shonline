import { Container, Filters, ProductCard, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/PrdouctsGroupList/ProductsGroupList';

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
					<div className="flex flex-col gap-16">
						<ProductsGroupList
							categoryId={1}
							title="Category 1"
							products={[
								{
									id: 1,
									name: 'Product 18',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 199 }, { price: 255 }, { price: 84 }],
								},
								{
									id: 2,
									name: 'Product 28',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 211 }, { price: 1330 }, { price: 500 }],
								},
								{
									id: 311,
									name: 'Product 381',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 200 }, { price: 200 }, { price: 90 }],
								},
								{
									id: 11,
									name: 'Product 181',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 199 }, { price: 255 }, { price: 84 }],
								},
								{
									id: 21,
									name: 'Product 281',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 211 }, { price: 1330 }, { price: 500 }],
								},
								{
									id: 31,
									name: 'Product 381',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 200 }, { price: 200 }, { price: 90 }],
								},
							]}
						/>
						<ProductsGroupList
							categoryId={2}
							title="Category 2"
							products={[
								{
									id: 4,
									name: 'Product 12',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 199 }, { price: 255 }, { price: 84 }],
								},
								{
									id: 5,
									name: 'Product 23',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 211 }, { price: 1330 }, { price: 500 }],
								},
								{
									id: 6,
									name: 'Product 34',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 200 }, { price: 200 }, { price: 90 }],
								},
								{
									id: 499,
									name: 'Product 1299',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 199 }, { price: 255 }, { price: 84 }],
								},
								{
									id: 599,
									name: 'Product 2399',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 211 }, { price: 1330 }, { price: 500 }],
								},
								{
									id: 699,
									name: 'Product 3499',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 200 }, { price: 200 }, { price: 90 }],
								},
							]}
						/>
						<ProductsGroupList
							categoryId={3}
							title="Category 3"
							products={[
								{
									id: 7,
									name: 'Product 10',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 199 }, { price: 255 }, { price: 84 }],
								},
								{
									id: 8,
									name: 'Product 20',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 211 }, { price: 1330 }, { price: 500 }],
								},
								{
									id: 9,
									name: 'Product 30',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 200 }, { price: 200 }, { price: 90 }],
								},
							]}
						/>
						<ProductsGroupList
							categoryId={4}
							title="Category 4"
							products={[
								{
									id: 77,
									name: 'Product 107',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 199 }, { price: 255 }, { price: 84 }],
								},
								{
									id: 87,
									name: 'Product 207',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 211 }, { price: 1330 }, { price: 500 }],
								},
								{
									id: 97,
									name: 'Product 307',
									imageUrl: 'https://placehold.co/210x150?text=Product',
									items: [{ price: 200 }, { price: 200 }, { price: 90 }],
								},
							]}
						/>
					</div>
				</div>
			</Container>
		</>
	);
}
