import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ProviderModule } from './provider/provider.module';
import { TaskModule } from './task/task.module';
import { AdminModule } from './admin/admin.module';
import { TaskTemplateModule } from './task-template/task-template.module';
import { BuildingClusterModule } from './building-cluster/building-cluster.module';
import { BuildingModule } from './building/building.module';
import { SpotModule } from './spot/spot.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'mysql',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'nestjs_db',
      autoLoadEntities: true,
      entities: ['src/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 1000,
    }),
    PrometheusModule.register(),
    DatabaseModule,
    EnterpriseModule,
    ProviderModule,
    TaskModule,
    AdminModule,
    TaskTemplateModule,
    BuildingClusterModule,
    BuildingModule,
    SpotModule,
    ErrorHandlingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
