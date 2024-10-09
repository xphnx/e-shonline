import { FC } from 'react';
import { FilterCheckbox, FilterCheckboxGroup, RangeSlider, Title } from '@/components/shared';
import { Input } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FiltersProps {
	className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
	return (
		<div className={cn('select-none', className)}>
			<Title text="Filters:" size="md" className="mb-5 font-bold tracking-widest" />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Filter 1" value="f1" />
				<FilterCheckbox text="Filter 2" value="f2" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3 tracking-widest">Price from and to</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={500000} defaultValue={0} />
					<Input type="number" placeholder="500000" min={100} max={500000} />
				</div>

				<RangeSlider min={0} max={500000} step={10} value={[0, 500000]} />
			</div>

			<FilterCheckboxGroup
				title="Properties"
				className="mt-5"
				defaultCheckboxes={[
					{
						text: 'Property 1',
						value: 'p1',
					},
					{
						text: 'Property 2',
						value: 'p2',
					},
					{
						text: 'Property 3',
						value: 'p3',
					},
					{
						text: 'Property 4',
						value: 'p4',
					},
					{
						text: 'Property 5',
						value: 'p5',
					},
				]}
				checkboxes={[
					{
						text: 'Property 1',
						value: '1',
					},
					{
						text: 'Property 2',
						value: '2',
					},
					{
						text: 'Property 3',
						value: '3',
					},
					{
						text: 'Property 4',
						value: '4',
					},
					{
						text: 'Property 5',
						value: '5',
					},
					{
						text: 'Property 1',
						value: '1',
					},
					{
						text: 'Property 2',
						value: '2',
					},
					{
						text: 'Property 3',
						value: '3',
					},
					{
						text: 'Property 4',
						value: '4',
					},
					{
						text: 'Property 5',
						value: '5',
					},
					{
						text: 'Property 1',
						value: '1',
					},
					{
						text: 'Property 2',
						value: '2',
					},
					{
						text: 'Property 3',
						value: '3',
					},
					{
						text: 'Property 4',
						value: '4',
					},
					{
						text: 'Property 5',
						value: '5',
					},
				]}
			/>
		</div>
	);
};
