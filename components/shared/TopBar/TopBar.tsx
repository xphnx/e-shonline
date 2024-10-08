import { FC } from 'react';
import { Categories, Container, SortPopup } from '@/components/shared';
import { cn } from '@/lib/utils';

interface TopBarProps {
	className?: string;
}

export const TopBar: FC<TopBarProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-[rgba(255,255,255,0.7)] backdrop-blur-[5px] py-5 shadow-lg shadow-black/5 z-10',
				className,
			)}
		>
			<Container className="flex items-center justify-between">
				<Categories />
				<SortPopup />
			</Container>
		</div>
	);
};
