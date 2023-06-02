import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  unpack() {
    return {
      success: true,
      data: {
        swid: 'appkey1 yaya',
        hwid: 'b4b95cea10bbe85138e620694c1d54e6',
        user: '',
        pass: '',
        token:
          'WVhCd2EyVjVNU0I1WVhsaC5iNGI5NWNlYTEwYmJlODUxMzhlNjIwNjk0YzFkNTRlNi4u',
      },
    };
  }

  license() {
    return {
      success: true,
      data: 'SWhBaUZNVENCbWpSSFl1Tk0wQm9VUFJxRU5nVUUrWXNiTmd6TEJrZ2lHcFpXRUozWVRKV05VMVRRalZaV0d4b0xtSTBZamsxWTJWaE1UQmlZbVU0TlRFek9HVTJNakEyT1RSak1XUTFOR1UyTGsxcVFYbE5lVEIzVFZNd2VFMUJQVDB1LkZ5UVhKUFh5UGxycEs3MjFWU01LWU1kVEllOXhjWU1lRHVGVkhpRkQ2dzQ9',
    };
  }
}
