'use client';
import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/categories';
import { ProductCard } from '../ProductCard/ProductCard';
import { Title } from '../Title/Title';

interface ProductsGroupListProps {
	categoryId: number;
	title: string;
	products: any[];
	listClassName?: string;
	className?: string;
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({
	categoryId,
	title,
	products,
	listClassName,
	className,
}) => {
	const setActiveCategory = useCategoryStore((store) => store.setActiveId);
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.8,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategory(categoryId);
		}
	}, [intersection?.isIntersecting, categoryId, setActiveCategory]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={Math.min(...product.items.map((item: { price: number }) => item.price))}
					/>
				))}
			</div>
		</div>
	);
};
