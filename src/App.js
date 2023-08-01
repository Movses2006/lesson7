import { BrowserRouter} from "react-router-dom";
import Route from "./Routes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
