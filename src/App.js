import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/code-portfolio/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
