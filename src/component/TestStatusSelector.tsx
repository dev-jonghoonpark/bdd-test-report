import React from "react";
import { STATUS } from "../enum/STATUS";
import { TYPE } from "../enum/TYPE";
import { statusToEnum } from "../util/enum-converter";

function TestStatusSelector({
  type,
  status,
  setStatus,
}: {
  type: TYPE;
  status: STATUS;
  setStatus: React.Dispatch<React.SetStateAction<STATUS>>;
}) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(statusToEnum(event.target.value));
  }

  return (
    <>
      {type === TYPE.IT && (
        <select onChange={(e) => handleChange(e)}>
          <option></option>
          <option value="pass">pass</option>
          <option value="fail">fail</option>
          <option value="blocked">blocked</option>
        </select>
      )}
    </>
  );
}

export default TestStatusSelector;
