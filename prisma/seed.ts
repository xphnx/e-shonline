import { genSaltSync, hashSync } from 'bcrypt';
import { prisma } from './prisma-client';

import { faker } from '@faker-js/faker';

const generateUniqueCategories = (count: number): Array<{ name: string }> => {
	const uniqueCategories = new Set<string>();

	while (uniqueCategories.size < count) {
		uniqueCategories.add(faker.commerce.department());
	}

	return Array.from(uniqueCategories).map((name) => ({ name }));
};

async function up(): Promise<void> {
	await prisma.user.createMany({
		data: Array.from({ length: 10 }, () => ({
			login: faker.internet.userName(),
			fullName: faker.person.fullName(),
			email: faker.internet.email(),
			password: hashSync(faker.internet.password(), genSaltSync(10)),
			verified: new Date(),
			role: 'USER',
		})),
	});

	await prisma.category.createMany({
		data: generateUniqueCategories(8),
	});

	await prisma.product.createMany({
		data: Array.from({ length: 100 }, () => ({
			name: faker.commerce.productName(),
			imageUrl: faker.image.urlLoremFlickr({
				width: 210,
				height: 150,
				category: 'product',
			}),
			categoryId: faker.number.int({ min: 1, max: 8 }),
		})),
	});

	await prisma.productVariant.createMany({
		data: Array.from({ length: 20 }, () => ({
			productId: faker.number.int({ min: 1, max: 100 }),
			price: faker.number.int({ min: 10, max: 10000 }),
			...(faker.datatype.boolean()
				? {
						color: faker.color.human(),
					}
				: {
						size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
					}),
		})),
	});
}

async function down(): Promise<void> {
	await prisma.$executeRaw`TRUNCATE TABLE "User", "Category", "Product", "ProductVariant" RESTART IDENTITY CASCADE`;
}

async function main(): Promise<void> {
	try {
		await down();
		await up();
	} catch (error) {
		console.error(error);
	}
}

main()
	.then(async () => await prisma.$disconnect())
	.catch(async (error) => {
		console.info(error);
		await prisma.$disconnect();
		process.exit(1);
	});
