'use client';

import { ChangeEvent, FC, useState } from 'react';
import { Input } from '@/components/ui';
import { cn } from '@/lib/utils';
import { FilterCheckbox, FilterCheckboxProps } from '../FilterCheckbox/FilterCheckbox';

interface FilterCheckboxGroupProps {
	title: string;
	checkboxes: FilterCheckboxProps[];
	defaultCheckboxes: FilterCheckboxProps[];
	limit?: number;
	searchInputPlaceholder?: string;
	onChangeValue?: (value: string[]) => void;
	defaultValue?: string[];
	className?: string;
}

export const FilterCheckboxGroup: FC<FilterCheckboxGroupProps> = ({
	title,
	checkboxes,
	defaultCheckboxes,
	limit = 5,
	searchInputPlaceholder,
	onChangeValue,
	defaultValue,
	className,
}) => {
	const [showAll, setShowAll] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const checkboxesList = showAll
		? checkboxes.filter((checkbox) => checkbox.text.toLowerCase().includes(inputValue))
		: defaultCheckboxes.slice(0, limit);

	const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(e.target.value.toLocaleLowerCase());
	};

	return (
		<div className={cn('', className)}>
			<p className="font-bold mb-3 tracking-widest">{title}</p>

			{showAll && (
				<Input
					placeholder={searchInputPlaceholder}
					className="mb-5 bg-gray-50 border-none"
					onChange={onChangeInputValue}
				/>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{checkboxesList.map(({ text, value, onCheckedChange, endAdornment }, index) => (
					<FilterCheckbox
						key={index}
						text={text}
						value={value}
						checked={false}
						endAdornment={endAdornment}
						onCheckedChange={(value) => console.info(value)}
					/>
				))}
			</div>

			{checkboxes.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button onClick={() => setShowAll((prev) => !prev)} className="text-primary mt-3">
						{showAll ? 'Collapse' : 'Show All'}
					</button>
				</div>
			)}
		</div>
	);
};
