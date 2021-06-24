import Game from "./components/Game";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Game />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: red;
`;
