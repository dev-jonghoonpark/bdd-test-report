import styled from "styled-components";

const TestNameContainer = styled.div`
  padding: 0.5rem 0;
  flex-grow: 1;
`;

function TestName({ children }: { children: React.ReactNode }) {
  return <TestNameContainer>{children}</TestNameContainer>;
}

export default TestName;
