import styled from "styled-components";
import { STATUS } from "@/enum/STATUS";
import Test from "@/type/Test";
import TestItem from "./TestItem/TestItem";

const TestListContainer = styled.div``;

function TestList({ root }: { root: Test }) {
  return (
    <TestListContainer>
      {root.children?.map((test: any, index: number) => (
        <TestItem key={`0-${index}`} test={test} level={0}></TestItem>
      ))}
    </TestListContainer>
  );
}

export default TestList;
