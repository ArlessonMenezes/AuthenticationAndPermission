import { AppError } from '../../../errors/AppError';
import { userRepository } from '../../user/repositories/user.repository';
import { CreateAddressDto } from '../dto/create-address.dto';
import { addressRepository } from '../repositories/address.repository';


export class CreateAddressService {

  async execute(data: CreateAddressDto, id: number) {
    const userExists = await userRepository.findOneBy({ id });

    if (!userExists) {
      throw new AppError("User does not exists.");
    };

    if (userExists.address) {
      throw new AppError("user already contains this address");
    }

    const { password, ...user } = userExists;

    const address = addressRepository.create({
      user,
      city: data.city,
      district: data.district,
      number: data.number,
      zipCode: data.zipCode,
      road: data.road,
    })

    await addressRepository.save(address);

    return  { address }
  }

}