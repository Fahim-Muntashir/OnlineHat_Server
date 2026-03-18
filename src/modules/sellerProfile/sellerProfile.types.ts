// src/modules/sellerProfile/sellerProfile.types.ts
import { ParamsDictionary } from "express-serve-static-core";

export interface SellerProfileParams extends ParamsDictionary {
  id: string;
}
