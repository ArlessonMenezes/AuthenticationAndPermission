import { Request, Response } from "express";
import { UserAuthService } from '../service/user-auth.service';

export class UserAuthController {

  async login(req: Request, res:Response) {
    const { email, password } = req.body

    const userAuthService = new UserAuthService()

    const token = await userAuthService.execute({
      email, 
      password,
    })

    return res.json(token); 
  }
}