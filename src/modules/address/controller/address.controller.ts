import { Request, Response } from "express";
import { CreateAddressService } from '../service/create-address.service';

export class addressController {

  async handle(req: Request, res: Response) {
    const { district, city, road, number, zipCode, } = req.body;
    const { idUser } = req.params;
    const id = Number(idUser);

    const createAddressService = new CreateAddressService();

    const address = await createAddressService.execute({
      district,
      city,
      road,
      number,
      zipCode,
    }, id,
    )

    return res.json(address);
  }

}