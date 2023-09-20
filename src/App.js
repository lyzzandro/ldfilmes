import logo from "./logo.svg";
import "./App.css";
import Filme from "./components/filme";

const listFilm = new Array(10).fill({
  background:
    "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177685208/poster-os-vingadores-guerra-infinita-b-8210dc20.jpg",
  title: "Marvel",
});

function App() {
  return (
    <div className="App">
      {listFilm.map((item, index) => {
        return <Filme key={index} {...item} />;
      })}
    </div>
  );
}

export default App;
