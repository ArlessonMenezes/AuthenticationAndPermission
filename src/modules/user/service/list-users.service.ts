import { userRepository } from '../repositories/user.repository';

export class ListUserService {

  async execute() {
    const users = await userRepository.find()

    return users;
  }

}