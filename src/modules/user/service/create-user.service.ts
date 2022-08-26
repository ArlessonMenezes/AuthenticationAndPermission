import { AppError } from '../../../errors/AppError';
import { CreateUserDto } from '../dto/create-user.dto';
import { userRepository } from '../repositories/user.repository';

export class CreateUserService {

  async execute(data: CreateUserDto) {
    const user = await userRepository.findOneBy({email: data.email});

    if (user) {
      throw new AppError("User already exists.");
    };

    const newUser = userRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
    })

    await userRepository.save(newUser);

    const { password, ...userCreated } = newUser;
    
    return userCreated;
  }  

}