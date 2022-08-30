import { Request, Response } from "express";
import { AvatarUserService } from "../service/avatar-user.service";
import { CreateUserService } from "../service/create-user.service";
import { ListUserService } from "../service/list-users.service";

export class UserController {
    
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
    })

    return res.status(200).json(user);
  }

  async list(req: Request, res: Response) {

    const listUserService = new ListUserService();

    const users = await listUserService.execute();

    return res.json(users);
  }

  async avatar(req: Request, res: Response) {
    const avatarUserService = new AvatarUserService();

    const avatar = await avatarUserService.execute({
      id: req.user.id,
      avatar: String(req.file?.filename),
    });

    return res.json(avatar);
  }

}