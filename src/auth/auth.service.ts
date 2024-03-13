
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login ({ Correo, contrasena}: LoginDto)  {
    const user = await this.usersService.findByEmailWithPassword(Correo);
    if (user.Contrasena !== contrasena) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.Correo, username: user.Usuario };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
