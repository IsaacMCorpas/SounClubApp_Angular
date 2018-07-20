import { Instrumento } from "./instrumento";
import { Genero_Musical } from "./genero_musical";

export class Usuario{
    id:number;
    nombre:string;
    apellidos:string;
    email:string;
    password:string;
    ciudad_recide:string;
    calle:string;
    fecha_nacimiento:Date;
    sexo:number;
    foto:string;
    pais_recide:number;
    listaInstrumentos:Instrumento[];
    listaGenero_musical:Genero_Musical[];
    listaAmigos:Usuario[];

    constructor(id:number,nombre:string,apellidos:string, email:string,password:string,ciudad_recide?:string,
        calle?:string,fecha_nacimiento?:Date,sexo?:number,foto?:string,pais_recide?:number,
        listaInstrumentos?:Instrumento[],listaGenero_musical?:Genero_Musical[],listaAmigos?:Usuario[]){
        this.id=id;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.email=email;
        this.password=password;
        this.ciudad_recide=ciudad_recide;
        this.calle=calle;
        this.fecha_nacimiento=fecha_nacimiento;
        this.sexo=sexo;
        this.foto=foto;
        this.pais_recide=pais_recide;
        this.listaInstrumentos=listaInstrumentos;
        this.listaGenero_musical=listaGenero_musical;
        this.listaAmigos=listaAmigos;
    }
    
    
    }