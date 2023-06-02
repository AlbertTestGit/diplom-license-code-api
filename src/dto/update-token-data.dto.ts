import { PartialType } from '@nestjs/swagger';
import { CreateTokenDataDto } from './create-token-data.dto';

export class UpdateTokenDataDto extends PartialType(CreateTokenDataDto) {}
