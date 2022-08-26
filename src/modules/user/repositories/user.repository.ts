import { AppDataSource } from "../../../database/data-source";
import { User } from "../model/user.entity";
import { CreateUserDto } from '../dto/create-user.dto';

export const userRepository = AppDataSource.getRepository(User);