import { FC } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SortPopupProps {
	className?: string;
}

export const SortPopup: FC<SortPopupProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
				className,
			)}
		>
			<ArrowUpDown size={16} />
			<b>Sort by:</b>
			<b className="text-primary">popular</b>
		</div>
	);
};
