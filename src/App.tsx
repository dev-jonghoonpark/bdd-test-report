import styled from "styled-components";
import tests from "./tests.json";
import TestItem from "./component/TestItem";
import Test from "./type/Test";

const AppContainer = styled.div`
  padding: 1rem;
`;

function App() {
  return (
    <AppContainer>
      {tests.map((test: any, index: number) => (
        <TestItem
          key={`0-${index}`}
          test={Test.plainToClass(test)}
          level={0}
        ></TestItem>
      ))}
    </AppContainer>
  );
}

export default App;
