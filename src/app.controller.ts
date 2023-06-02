import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('unpack')
  unpack(@Query('token') token: string) {
    return this.appService.unpack();
  }

  @Get('license')
  license(@Query('token') token: string, @Query('expires') expires: string) {
    return this.appService.license();
  }
}
