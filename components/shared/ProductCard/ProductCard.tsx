import { FC } from 'react';
import { DollarSign, Plus, RussianRuble } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { Title } from '../Title/Title';

interface ProductCardProps {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ id, name, price, imageUrl, className }) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 border-accent border-2 rounded-[20px] h-[260px]">
					<img src={imageUrl} alt={name} className="w-[215px] h-[215px]" />
				</div>

				<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

				<p className="text-sm text-gray-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa saepe voluptates
					veritatis odit consequatur dolore id itaque neque modi.
				</p>

				<div className="flex justify-between items-center mt-4">
					<div className="flex items-center text-[20px]">
						from {price} <DollarSign size={15} />
					</div>

					<Button variant="default">
						<Plus size={15} className="mr-1" />
						Add
					</Button>
				</div>
			</Link>
		</div>
	);
};
