import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import Test from "../type/Test";
import TestStatusIcon from "./TestStatusIcon";
import TestName from "./TestName";
import TestStatusSelector from "./TestStatusSelector";
import { TYPE } from "../enum/TYPE";
import { STATUS } from "../enum/STATUS";

const ItemContainer = styled.div<{ $isRoot: boolean }>`
  ${(props) => !props.$isRoot && "padding-left: 2rem;"}
`;

const Row = styled.div<{ $type: TYPE }>`
  display: flex;
  align-items: center;
  border-left: 4px solid #a9a9a9;
  padding-left: 1rem;
  ${(props) => props.$type === TYPE.IT && "border-bottom: 1px solid #a9a9a9"}
`;

function TestItem({
  test,
  level,
  parent,
  parentSetStatus,
}: {
  test: Test;
  level: number;
  parent?: Test;
  parentSetStatus?: React.Dispatch<React.SetStateAction<STATUS>>;
}) {
  const [status, setStatus] = useState(test.status);

  const updateParentStatus = useCallback(() => {
    if (parent?.children) {
      let parentStatus = STATUS.UNKNOWN;
      let isAllPassed = true;

      for (const child of parent.children) {
        if (child.status === STATUS.FAIL) {
          parentStatus = STATUS.FAIL;
          break;
        }
        if (child.status === STATUS.BLOCKED) {
          isAllPassed = false;
          parentStatus = STATUS.BLOCKED;
        }
        if (child.status === STATUS.UNKNOWN) {
          isAllPassed = false;
        }
      }
      if (parentStatus === STATUS.UNKNOWN && isAllPassed) {
        parentStatus = STATUS.PASS;
      }

      if (parentSetStatus) {
        parentSetStatus(parentStatus);
      }
    }
  }, [parent, parentSetStatus]);

  const updateTestStatus = useCallback(() => {
    test.status = status;
  }, [test, status]);

  useEffect(() => {
    updateTestStatus();
    updateParentStatus();
  }, [status, updateTestStatus, updateParentStatus]);

  return (
    <ItemContainer $isRoot={level === 0}>
      <Row $type={test.type}>
        {status !== STATUS.UNKNOWN && <TestStatusIcon status={status} />}
        <TestName>{test.name}</TestName>
        <TestStatusSelector
          type={test.type}
          status={status}
          setStatus={setStatus}
        />
      </Row>
      {test.children &&
        test.children.map((child: Test, index: number) => (
          <TestItem
            key={`${level}-${index}`}
            test={child}
            level={level + 1}
            parent={test}
            parentSetStatus={setStatus}
          />
        ))}
    </ItemContainer>
  );
}

export default TestItem;
