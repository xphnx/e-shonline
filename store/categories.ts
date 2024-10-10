import { create } from 'zustand';

interface Category {
	activeId: number;
	setActiveId: (id: number) => void;
}

export const useCategoryStore = create<Category>((set) => ({
	activeId: 1,
	setActiveId: (activeId): void => set({ activeId }),
}));
