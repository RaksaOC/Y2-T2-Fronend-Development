import { Data } from "./data";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div id="container">
      {Data.map((data, index) => (
        <Card
          key={index}
          props={{
            src: data.src,
            gender: data.gender,
            classroom: data.classroom,
            name: data.name,
          }}
        />
      ))}
    </div>
  );
}

export default App;
