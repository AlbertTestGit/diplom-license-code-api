import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenData } from './entities/token-data.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: [TokenData],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TokenData]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
