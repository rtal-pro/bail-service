import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Admins
    const admin = await prisma.admin.create({
        data: {
            email: 'admin@example.com',
            phone: '+123456789',
            firstName: 'John',
            lastName: 'Doe',
            password: 'securepassword', // You may want to hash the password in a real scenario
            role: 'ADMIN',
        },
    });

    // Seed Enterprises
    const enterprise = await prisma.enterprise.create({
        data: {
            name: 'Example Enterprise',
            email: 'enterprise@example.com',
            phone: '+987654321',
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    // Seed Building Clusters
    const cluster = await prisma.buildingCluster.create({
        data: {
            city: 'Sample City',
            country: 'Sample Country',
            latitude: 12.34,
            longitude: 56.78,
            enterprise: { connect: { id: enterprise.id } },
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    // Seed Buildings
    const building = await prisma.building.create({
        data: {
            city: 'Building City',
            country: 'Building Country',
            latitude: 23.45,
            longitude: 67.89,
            buildingCluster: { connect: { id: cluster.id } },
            enterprise: { connect: { id: enterprise.id } },
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    // Seed Spots
    const spot = await prisma.spot.create({
        data: {
            city: 'Spot City',
            country: 'Spot Country',
            latitude: 34.56,
            longitude: 78.90,
            building: { connect: { id: building.id } },
            enterprise: { connect: { id: enterprise.id } },
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    // Seed Providers
    const provider = await prisma.provider.create({
        data: {
            email: 'provider@example.com',
            phone: '+123123123',
            firstName: 'Jane',
            lastName: 'Smith',
            companyName: 'Service Co.',
            password: 'securepassword', // Consider hashing the password
            role: 'USER',
            providerType: 'HVAC',
            enterprise: { connect: { id: enterprise.id } },
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    // Seed Task Templates
    const taskTemplate = await prisma.taskTemplate.create({
        data: {
            title: 'Routine Maintenance',
            description: 'Routine maintenance task template',
            status: 'PENDING',
            taskType: 'RECURRING',
            duration: 60,
            provider: { connect: { id: provider.id } },
            providerType: 'HVAC',
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    // Seed Tasks
    await prisma.task.create({
        data: {
            title: 'Inspect HVAC System',
            description: 'Regular inspection of the HVAC system.',
            status: 'PENDING',
            taskType: 'RECURRING',
            duration: 120,
            startDate: new Date('2024-08-25T09:00:00.000Z'),
            endDate: new Date('2024-08-25T11:00:00.000Z'),
            provider: { connect: { id: provider.id } },
            spot: { connect: { id: spot.id } },
            createdBy: { connect: { id: admin.id } },
            updatedBy: { connect: { id: admin.id } },
        },
    });

    console.log('Database has been seeded successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
