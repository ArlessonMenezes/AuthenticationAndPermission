import path from 'path';
import fs from 'fs';

import uploadConfig from '../../../config/upload';
import { AppError } from '../../../errors/AppError';
import { userRepository } from '../repositories/user.repository';

interface IAvatar {
  id: number;
  avatar: string;
}

export class AvatarUserService {
  async execute({id, avatar}: IAvatar) {
    const user = await userRepository.findOneBy({ id });

    if (!user) {
      throw new AppError("User does not exists")
    };

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExist) {
        await fs.promises.unlink(userAvatarFilePath)
      };

      await userRepository.update(user.id, {
        avatar,
      });

      await user;
    };


  }
}