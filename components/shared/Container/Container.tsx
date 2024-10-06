import { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
	className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children }) => {
	return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};
