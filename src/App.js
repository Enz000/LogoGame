import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyles";
import Card from "./components/Card";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Card />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`;
