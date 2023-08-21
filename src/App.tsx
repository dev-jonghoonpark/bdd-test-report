import styled from "styled-components";
import tests from "./tests.json";
import Test from "@/type/Test";
import TestList from "./component/TestList/TestList";

const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  let root = Test.plainToClass(tests);
  return (
    <AppContainer>
      <TestList root={root} />
    </AppContainer>
  );
}

export default App;
