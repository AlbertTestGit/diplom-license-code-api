import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTokenDataDto } from './dto/create-token-data.dto';
import { UpdateTokenDataDto } from './dto/update-token-data.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('token data1')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('unpack')
  unpack(@Query('token') token: string) {
    return this.appService.unpack(token);
  }

  @Get('license')
  license(@Query('token') token: string, @Query('expires') expires: string) {
    return this.appService.license(token, expires);
  }

  @ApiTags('token data')
  @Post('td')
  create(@Body() createTokenDataDto: CreateTokenDataDto) {
    return this.appService.create(createTokenDataDto);
  }

  @ApiTags('token data')
  @Get('td')
  findAll() {
    return this.appService.findAll();
  }

  @ApiTags('token data')
  @Get('td/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findOne(id);
  }

  @ApiTags('token data')
  @Patch('td/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTokenDataDto: UpdateTokenDataDto,
  ) {
    return this.appService.update(id, updateTokenDataDto);
  }

  @ApiTags('token data')
  @Delete('td/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appService.remove(id);
  }
}
