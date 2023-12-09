import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SplashScreen from "./pages/SplashScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
