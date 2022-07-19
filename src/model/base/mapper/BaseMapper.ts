import { BaseDTO } from "../../../dto/base/BaseDTO";
import BaseEntity  from "../entity/BaseEntity";

export default class BaseMapper {
  static toBaseDTO(baseEntity: BaseEntity): BaseDTO {
    return <BaseDTO> {
      id: baseEntity._id.valueOf().toString(),
      name: baseEntity.name,
      url: baseEntity.url
    }
  }
}