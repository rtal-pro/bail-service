-- CreateTable
CREATE TABLE `Enterprise` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Enterprise_name_key`(`name`),
    UNIQUE INDEX `Enterprise_email_key`(`email`),
    UNIQUE INDEX `Enterprise_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'USER') NOT NULL DEFAULT 'ADMIN',
    `enterpriseId` VARCHAR(191) NULL,
    `deletedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    UNIQUE INDEX `Admin_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `providerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provider` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `companyName` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `providerType` ENUM('CLEANER', 'ELECTRICIAN', 'PLUMBER', 'CARPENTER', 'PAINTER', 'GARDENER', 'PEST_CONTROL', 'APPLIANCE_REPAIR', 'COMPUTER_REPAIR', 'MOBILE_REPAIR', 'HVAC', 'SECURITY', 'IT_SUPPORT', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `enterpriseId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Provider_email_key`(`email`),
    UNIQUE INDEX `Provider_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskTemplate` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED', 'ARCHIVED') NOT NULL DEFAULT 'PENDING',
    `taskType` ENUM('RECURRING', 'ONE_TIME', 'EMERGENCY') NOT NULL,
    `duration` INTEGER NOT NULL,
    `providerId` VARCHAR(191) NOT NULL,
    `providerType` ENUM('CLEANER', 'ELECTRICIAN', 'PLUMBER', 'CARPENTER', 'PAINTER', 'GARDENER', 'PEST_CONTROL', 'APPLIANCE_REPAIR', 'COMPUTER_REPAIR', 'MOBILE_REPAIR', 'HVAC', 'SECURITY', 'IT_SUPPORT', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_PROGRAMMED', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'MISSED', 'FAILED', 'ON_HOLD') NOT NULL,
    `taskType` ENUM('RECURRING', 'ONE_TIME', 'EMERGENCY') NOT NULL,
    `duration` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `providerId` VARCHAR(191) NOT NULL,
    `spotId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskComment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(191) NOT NULL,
    `taskId` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taskId` VARCHAR(191) NOT NULL,
    `status` ENUM('NOT_PROGRAMMED', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'MISSED', 'FAILED', 'ON_HOLD') NOT NULL,
    `changeDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `changedById` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskAttachment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `taskId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BuildingCluster` (
    `id` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `enterpriseId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Building` (
    `id` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `buildingClusterId` VARCHAR(191) NULL,
    `enterpriseId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spot` (
    `id` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `buildingId` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `enterpriseId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QRCode` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `text` VARCHAR(191) NULL,
    `spotId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `QRCode_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NFCTag` (
    `id` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `text` VARCHAR(191) NULL,
    `spotId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `NFCTag_tag_key`(`tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RFIDTag` (
    `id` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `text` VARCHAR(191) NULL,
    `spotId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `RFIDTag_tag_key`(`tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Beacon` (
    `id` VARCHAR(191) NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `major` INTEGER NOT NULL,
    `minor` INTEGER NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `spotId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Beacon_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GeoFence` (
    `id` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `radius` INTEGER NOT NULL,
    `spotId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Report` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `generatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `enterpriseId` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NULL,
    `updatedById` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TaskStatistics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalTasks` INTEGER NOT NULL DEFAULT 0,
    `completedTasks` INTEGER NOT NULL DEFAULT 0,
    `pendingTasks` INTEGER NOT NULL DEFAULT 0,
    `inProgressTasks` INTEGER NOT NULL DEFAULT 0,
    `cancelledTasks` INTEGER NOT NULL DEFAULT 0,
    `failedTasks` INTEGER NOT NULL DEFAULT 0,
    `missedTasks` INTEGER NOT NULL DEFAULT 0,
    `onHoldTasks` INTEGER NOT NULL DEFAULT 0,
    `averageCompletionTime` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClusterStatistics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalBuildings` INTEGER NOT NULL DEFAULT 0,
    `totalSpots` INTEGER NOT NULL DEFAULT 0,
    `totalTasks` INTEGER NOT NULL DEFAULT 0,
    `activeTasks` INTEGER NOT NULL DEFAULT 0,
    `completedTasks` INTEGER NOT NULL DEFAULT 0,
    `buildingClusterId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ClusterStatistics_buildingClusterId_key`(`buildingClusterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProviderStatistics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalTasksCompleted` INTEGER NOT NULL DEFAULT 0,
    `totalTasksAssigned` INTEGER NOT NULL DEFAULT 0,
    `averageTaskDuration` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `averageResponseTime` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `totalHoursWorked` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `providerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ProviderStatistics_providerId_key`(`providerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BuildingStatistics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `buildingId` VARCHAR(191) NOT NULL,
    `totalSpots` INTEGER NOT NULL DEFAULT 0,
    `totalTasks` INTEGER NOT NULL DEFAULT 0,
    `totalProviders` INTEGER NOT NULL DEFAULT 0,
    `averageOccupancyRate` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `BuildingStatistics_buildingId_key`(`buildingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpotStatistics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `spotId` VARCHAR(191) NOT NULL,
    `totalTasks` INTEGER NOT NULL DEFAULT 0,
    `completedTasks` INTEGER NOT NULL DEFAULT 0,
    `missedTasks` INTEGER NOT NULL DEFAULT 0,
    `averageTaskDuration` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `utilizationRate` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SpotStatistics_spotId_key`(`spotId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Enterprise` ADD CONSTRAINT `Enterprise_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enterprise` ADD CONSTRAINT `Enterprise_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_enterpriseId_fkey` FOREIGN KEY (`enterpriseId`) REFERENCES `Enterprise`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provider` ADD CONSTRAINT `Provider_enterpriseId_fkey` FOREIGN KEY (`enterpriseId`) REFERENCES `Enterprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provider` ADD CONSTRAINT `Provider_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provider` ADD CONSTRAINT `Provider_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTemplate` ADD CONSTRAINT `TaskTemplate_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTemplate` ADD CONSTRAINT `TaskTemplate_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTemplate` ADD CONSTRAINT `TaskTemplate_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskComment` ADD CONSTRAINT `TaskComment_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskComment` ADD CONSTRAINT `TaskComment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskHistory` ADD CONSTRAINT `TaskHistory_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskHistory` ADD CONSTRAINT `TaskHistory_changedById_fkey` FOREIGN KEY (`changedById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskAttachment` ADD CONSTRAINT `TaskAttachment_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuildingCluster` ADD CONSTRAINT `BuildingCluster_enterpriseId_fkey` FOREIGN KEY (`enterpriseId`) REFERENCES `Enterprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuildingCluster` ADD CONSTRAINT `BuildingCluster_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuildingCluster` ADD CONSTRAINT `BuildingCluster_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Building` ADD CONSTRAINT `Building_buildingClusterId_fkey` FOREIGN KEY (`buildingClusterId`) REFERENCES `BuildingCluster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Building` ADD CONSTRAINT `Building_enterpriseId_fkey` FOREIGN KEY (`enterpriseId`) REFERENCES `Enterprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Building` ADD CONSTRAINT `Building_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Building` ADD CONSTRAINT `Building_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Spot` ADD CONSTRAINT `Spot_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `Building`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Spot` ADD CONSTRAINT `Spot_enterpriseId_fkey` FOREIGN KEY (`enterpriseId`) REFERENCES `Enterprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Spot` ADD CONSTRAINT `Spot_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Spot` ADD CONSTRAINT `Spot_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QRCode` ADD CONSTRAINT `QRCode_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QRCode` ADD CONSTRAINT `QRCode_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QRCode` ADD CONSTRAINT `QRCode_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NFCTag` ADD CONSTRAINT `NFCTag_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NFCTag` ADD CONSTRAINT `NFCTag_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NFCTag` ADD CONSTRAINT `NFCTag_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RFIDTag` ADD CONSTRAINT `RFIDTag_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RFIDTag` ADD CONSTRAINT `RFIDTag_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RFIDTag` ADD CONSTRAINT `RFIDTag_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Beacon` ADD CONSTRAINT `Beacon_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Beacon` ADD CONSTRAINT `Beacon_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Beacon` ADD CONSTRAINT `Beacon_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GeoFence` ADD CONSTRAINT `GeoFence_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GeoFence` ADD CONSTRAINT `GeoFence_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GeoFence` ADD CONSTRAINT `GeoFence_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_enterpriseId_fkey` FOREIGN KEY (`enterpriseId`) REFERENCES `Enterprise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClusterStatistics` ADD CONSTRAINT `ClusterStatistics_buildingClusterId_fkey` FOREIGN KEY (`buildingClusterId`) REFERENCES `BuildingCluster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProviderStatistics` ADD CONSTRAINT `ProviderStatistics_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Provider`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BuildingStatistics` ADD CONSTRAINT `BuildingStatistics_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `Building`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpotStatistics` ADD CONSTRAINT `SpotStatistics_spotId_fkey` FOREIGN KEY (`spotId`) REFERENCES `Spot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
