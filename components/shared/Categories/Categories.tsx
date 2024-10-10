'use client';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/categories';

interface CategoriesProps {
	className?: string;
}

const categories = [
	{
		title: 'Category 1',
		id: 1,
	},
	{
		title: 'Category 2',
		id: 2,
	},
	{
		title: 'Category 3',
		id: 3,
	},
	{
		title: 'Category 4',
		id: 4,
	},
	{
		title: 'Category 5',
		id: 5,
	},
	{
		title: 'Category 6',
		id: 6,
	},
	{
		title: 'Category 7',
		id: 7,
	},
	{
		title: 'Category 8',
		id: 8,
	},
];

export const Categories: FC<CategoriesProps> = ({ className }) => {
	const activeCategory = useCategoryStore((store) => store.activeId);

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map((category) => (
				<a
					key={category.id}
					href={`#${category.title}`}
					className={cn(
						'flex item-center font-bold h-11 rounded-2xl px-5',
						category.id === activeCategory &&
							'bg-primary shadow-md shadow-gray-400 text-background',
					)}
				>
					<button>{category.title}</button>
				</a>
			))}
		</div>
	);
};
