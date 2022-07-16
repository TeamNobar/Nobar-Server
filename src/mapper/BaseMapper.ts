import mongoose from "mongoose";
import { BaseDTO } from "../dto/base/BaseDTO";
import { Base } from "../model/base/Base";

interface BaseForMapper extends Base {
  _id: mongoose.Schema.Types.ObjectId,
}

export class BaseMapper {
  public static toBaseDTO(bases: BaseForMapper[]): BaseDTO[] {
    
    const BaseData = bases.map((base: BaseForMapper) => {
      const data = {
        id: base._id as unknown as string,
        name: base.name,
        url: base.url
      };

      return data;
    });

    return BaseData;
  }
}