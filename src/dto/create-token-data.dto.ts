import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTokenDataDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  swid: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  hwid: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  user?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pass?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;
}
