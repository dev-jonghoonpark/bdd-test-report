import { STATUS } from "../enum/STATUS";
import { TYPE } from "../enum/TYPE";
import { statusToEnum, typeToEnum } from "../util/enum-converter";

export default class Test {
  public id?: string;

  public status!: STATUS;

  public type!: TYPE;

  public name!: string;

  public children?: Test[];

  public static plainToClass(json: any): Test {
    const instance = new Test();
    instance.id = json.id;
    instance.status = statusToEnum(json.status);
    instance.type = typeToEnum(json.type);
    instance.name = json.name;
    instance.children = json.children?.map((child: any) =>
      Test.plainToClass(child)
    );
    return instance;
  }
}
