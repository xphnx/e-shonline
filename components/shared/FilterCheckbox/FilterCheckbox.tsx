import { FC, ReactNode } from 'react';
import { Checkbox } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface FilterCheckboxProps {
	text: string;
	value: string;
	endAdornment?: ReactNode;
	onCheckedChange?: (checked: boolean) => void;
	checked?: boolean;
	className?: string;
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	className,
}) => {
	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className="rounded-[8px] w-6 h-6"
				id={`checkbox-${String(value)}`}
			/>
			<label htmlFor={`checkbox-${String(value)}`} className="cursor-pointer leading-none flex-1">
				{text}
			</label>
			{endAdornment}
		</div>
	);
};
