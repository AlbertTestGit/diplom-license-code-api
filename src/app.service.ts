import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenData } from './entities/token-data.entity';
import { CreateTokenDataDto } from './dto/create-token-data.dto';
import { UpdateTokenDataDto } from './dto/update-token-data.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TokenData)
    private tokenDataRepository: Repository<TokenData>,
  ) {}

  async unpack(token: string) {
    return {
      success: true,
      data: await this.tokenDataRepository.findOne({ where: { token } }),
    };
    // return {
    //   success: true,
    //   data: {
    //     swid: 'appkey1 yaya',
    //     hwid: 'b4b95cea10bbe85138e620694c1d54e6',
    //     user: '',
    //     pass: '',
    //     token:
    //       'WVhCd2EyVjVNU0I1WVhsaC5iNGI5NWNlYTEwYmJlODUxMzhlNjIwNjk0YzFkNTRlNi4u',
    //   },
    // };
  }

  license(token: string, expires: string) {
    console.log(token, expires);
    return {
      success: true,
      data: 'SWhBaUZNVENCbWpSSFl1Tk0wQm9VUFJxRU5nVUUrWXNiTmd6TEJrZ2lHcFpXRUozWVRKV05VMVRRalZaV0d4b0xtSTBZamsxWTJWaE1UQmlZbVU0TlRFek9HVTJNakEyT1RSak1XUTFOR1UyTGsxcVFYbE5lVEIzVFZNd2VFMUJQVDB1LkZ5UVhKUFh5UGxycEs3MjFWU01LWU1kVEllOXhjWU1lRHVGVkhpRkQ2dzQ9',
    };
  }

  async create(createTokenDataDto: CreateTokenDataDto) {
    const tokenData = await this.tokenDataRepository.findOne({
      where: { token: createTokenDataDto.token },
    });

    if (tokenData) throw new BadRequestException();

    const newTokenData = new TokenData();
    Object.assign(newTokenData, createTokenDataDto);

    return this.tokenDataRepository.save(newTokenData);
  }

  findAll() {
    return this.tokenDataRepository.find();
  }

  async findOne(id: number) {
    const tokenData = await this.tokenDataRepository.findOne({
      where: { id },
    });

    if (!tokenData) throw new NotFoundException();

    return tokenData;
  }

  async update(id: number, updateTokenDataDto: UpdateTokenDataDto) {
    const tokenData = await this.findOne(id);

    Object.assign(tokenData, updateTokenDataDto);

    return this.tokenDataRepository.save(tokenData);
  }

  async remove(id: number) {
    this.tokenDataRepository.remove(await this.findOne(id));
  }
}
