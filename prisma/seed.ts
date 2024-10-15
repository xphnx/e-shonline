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
		data: [
			{
				login: 'LoginUser',
				fullName: 'Test Testovich',
				email: 'user01@ya.ru',
				password: hashSync('test0101', genSaltSync(10)),
				verified: new Date(),
				role: 'USER',
			},
			{
				login: 'LoginAdmin',
				fullName: 'Admin Adminovish',
				email: 'admin01@gmail.com',
				password: hashSync('test0202', genSaltSync(10)),
				verified: new Date(),
				role: 'ADMINISTRATOR',
			},
		],
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

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '666',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '999',
			},
		],
	});

	await prisma.cartItem.createMany({
		data: Array.from({ length: 10 }, () => ({
			cartId: faker.number.int({ min: 1, max: 2 }),
			productId: faker.number.int({ min: 1, max: 100 }),
			variantId: faker.number.int({ min: 1, max: 20 }),
			quantity: faker.number.int({ min: 1, max: 5 }),
		})),
	});
}

async function down(): Promise<void> {
	await prisma.$executeRaw`TRUNCATE TABLE "User", "Category", "Product", "ProductVariant", "Cart", "CartItem" RESTART IDENTITY CASCADE`;
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
