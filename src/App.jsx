import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Sewa from "./pages/Sewa" //import page lain

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<div>Sewa</div>} />
        <Route path="/sewa" element={<Sewa />} />  {/*route pada halaman sewa */}
      </Routes>
    </>
  );
}

export default App;
