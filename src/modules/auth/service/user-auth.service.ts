import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';
import { userRepository } from '../../user/repositories/user.repository';

interface IAuth {
  email: string;
  password: string;
}

export class UserAuthService {

  async execute({ email, password }: IAuth) {
    const user = await userRepository.findOneBy({ email });
    
    if (!user) {
      throw new AppError("E-mail or password invalid");
    };

    const passwordIsMatch = await compare(password, user.password);

    if (!passwordIsMatch) {
      throw new AppError("E-mail or password invalid");
    };

    const token = sign({id: user.id}, process.env.JWT_SECRET ?? '', {
      expiresIn: '1d'     
    })

    const { password:_, ...userLogin } = user;

    return {
      user: userLogin,
      token,
    }
  }

}