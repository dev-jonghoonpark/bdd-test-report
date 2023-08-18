import { STATUS } from "../enum/STATUS";
import { TYPE } from "../enum/TYPE";

function typeToEnum(type: string): TYPE {
  switch (type) {
    case "group":
      return TYPE.GROUP;
    case "describe":
    case "context":
      return TYPE.DESCRIBE;
    case "it":
    case "test":
      return TYPE.IT;
  }
  return TYPE.IT;
}

function statusToEnum(type: string): STATUS {
  switch (type) {
    case "pass":
      return STATUS.PASS;
    case "fail":
      return STATUS.FAIL;
    case "blocked":
      return STATUS.BLOCKED;
  }
  return STATUS.UNKNOWN;
}

export { typeToEnum, statusToEnum };
