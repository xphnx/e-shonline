import { FC } from 'react';
import { cn } from '@/lib/utils';

interface CategoriesProps {
	className?: string;
}

const categories = [
	'Product 1',
	'Product 2',
	'Product 3',
	'Product 4',
	'Product 5',
	'Product 6',
	'Product 7',
	'Product 8',
];

const activeCategory = 0;

export const Categories: FC<CategoriesProps> = ({ className }) => {
	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map((category, index) => (
				<a
					key={category}
					className={cn(
						'flex item-center font-bold h-11 rounded-2xl px-5',
						index === activeCategory && 'bg-primary shadow-md shadow-gray-400 text-background',
					)}
				>
					<button>{category}</button>
				</a>
			))}
		</div>
	);
};
