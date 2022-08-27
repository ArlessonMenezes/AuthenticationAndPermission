import { AppDataSource } from "../../../database/data-source";
import { Address } from "../model/address.entity";

export const addressRepository = AppDataSource.getRepository(Address);