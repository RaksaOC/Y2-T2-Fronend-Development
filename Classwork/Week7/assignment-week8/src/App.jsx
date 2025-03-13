import pnLogo from "./assets/pn-logo.png";
import Container from './components/Container';
function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for PNC batch 2024</h1>
      </header>
      <div style={{ display: "flex"}}>
        <Container subject="java"/>
        <Container subject="english"/>
        <Container subject="html"/>
        <Container subject="python"/>
      </div>
    </>
  );
}

export default App;
