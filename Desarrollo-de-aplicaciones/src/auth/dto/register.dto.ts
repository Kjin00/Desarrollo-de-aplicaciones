import { Transform } from 'class-transformer';
import { IsDate, IsEmail, IsString, MinLength,} from 'class-validator';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  Nombre: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  Apellido:  string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(7)
  CI:  number;
  
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  Usuario: string;
  
  @IsEmail()
  correo: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  contrasena: string;
  
  @IsDate()
  FechaNacimiento: Date;
 
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(11)
  Telefono:number;
  
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(20)
  Direccion: string;
  
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  C_postal: number;


}