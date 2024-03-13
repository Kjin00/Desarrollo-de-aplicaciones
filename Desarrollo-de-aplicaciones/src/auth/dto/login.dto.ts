import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  Correo: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  contrasena: string;
}