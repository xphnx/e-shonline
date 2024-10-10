import { FC } from 'react';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/components/shared';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import styles from './Header.module.css';

interface HeaderProps {
	className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('border-b', className)}>
			<Container className="flex items-center justify-between py-4">
				<div className="flex items-center gap-2">
					<Image src="/logo.svg" alt="Logo" width={45} height={45} />
					<div>
						<h1 className={cn('text-2xl font-black', styles['logo-title'])}>E-Shonline</h1>
						<p className="leading-3 text-gray-400">shop from home</p>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Button variant="outline" className="gap-1">
						<User size="16" />
						Sign In
					</Button>
					<Button className="group relative">
						<b>520 ₽</b>
						<span className="mx-3 h-full w-[1px] bg-white/30" />
						<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
							<ShoppingCart size="16" className="relative" strokeWidth={2} />
							<b>3</b>
						</div>
						<ArrowRight
							size="20"
							className="transition absolute right-5 -translate-x-2 opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100"
						/>
					</Button>
				</div>
			</Container>
		</header>
	);
};
