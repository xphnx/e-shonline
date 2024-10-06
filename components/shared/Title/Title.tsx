import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import styles from './Title.module.css';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface TitleProps {
	text: string;
	size?: TitleSize;
	className?: string;
}

export const Title: FC<TitleProps> = ({ text, size = 'sm', className }) => {
	const mapTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
		xl: 'h1',
		'2xl': 'h1',
	} as const;

	const mapClassNameBySize = {
		xs: 'text-[16px]',
		sm: 'text-[22px]',
		md: 'text-[26px]',
		lg: 'text-[32px]',
		xl: 'text-[40px]',
		'2xl': 'text-[48px]',
	} as const;

	return React.createElement(
		mapTagBySize[size],
		{
			className: cn(mapClassNameBySize[size], styles.title, className),
		},
		text,
	);
};
