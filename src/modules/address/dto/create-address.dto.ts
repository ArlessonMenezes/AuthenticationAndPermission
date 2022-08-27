import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  district: string;
  
  @IsNumber()
  @IsNotEmpty()
  road: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(9)
  zipCode: string;

}