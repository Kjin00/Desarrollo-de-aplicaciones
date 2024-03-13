import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(Correo: string) {
    return this.userRepository.findOneBy({Correo});
  }

  findByEmailWithPassword(Correo: string) {
    return this.userRepository.findOne({
      where: { Correo },
      select: ['CI', 'Nombre', 'Apellido', 'FechaNacimiento', 'Telefono', 'Direccion', 'C_postal'],
    });
  }
  findAll() {
    return this.userRepository.find();
  }

  findOne(Usuario: string) {
    return `This action returns a #${Usuario} user`;
  }

  update(Usuario: String, updateUserDto: UpdateUserDto) {
    return `This action updates a #${Usuario} user`;
  }

}


