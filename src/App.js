import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";

import CardsDetails from "./component/CardsDetails";
import Cards from "./component/Card";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
