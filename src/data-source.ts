import { DataSource } from "typeorm";
import {User} from "./entities/user.entity"

require("dotenv").config();


export const AppDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,


    username:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PWD,
    database:process.env.POSTGRES_DB,


    synchronize:false,
    logging:true,
    entities:["src/entities/*.ts"],
    migrations:["src/migrations/*.ts"]

})

AppDataSource.initialize().then(()=>{
    console.log("DataSource inicializada")
}).catch((err)=>{
    console.error("ESTOU ERRO!!!!")
})