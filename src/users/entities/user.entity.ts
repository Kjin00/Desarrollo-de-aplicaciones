import { Collection, Column, Entity } from "typeorm";

@Entity()
export class User {
    @Column({ unique: true ,nullable:false })
    CI:  number;
    
    @Column({ unique: true , primary: true, nullable:false })
    Usuario: string;
    
    @Column({nullable:false})
    Nombre: string;
    
    @Column({nullable:false})
    Apellido:  string;
    
    @Column({unique: true, nullable:false})
    Correo: string;
    
    @Column({nullable:false})
    Contrasena:   string;
    
    @Column({nullable:false})
    FechaNacimiento: Date;
    
    @Column({unique: true, nullable: false})
    Telefono:number;
    
    @Column({nullable:false})
    Direccion: string;
    
    @Column({nullable:false})
    C_postal: number;
    
  static usuario: any;
}
