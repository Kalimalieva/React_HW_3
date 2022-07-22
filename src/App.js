
import './App.css';
import PortfolioPage from "./pages/portfolioPage/PortfolioPage"
import NamePage from "./pages/namePage/NamePage";


function App() {
    const array = ["Aigul","Mahabat", "Saule"]

  return (
    <div className="App">
      <PortfolioPage nameUser={array}/>
        ---------------------------------------
      <NamePage arr={array}/>
    </div>
  );
}

export default App;
