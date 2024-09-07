import React, { BrowserRouter, Route, Routes, } from "react-router-dom"; 
import { DataContextProvider } from "./context/DataContext.tsx";
import { Home } from "./Components/Home/Home.tsx";
import { Navbar } from "./Components/ComponentsDefault/Navbar/Navbar.tsx";
import { Error } from "./Components/ComponentsDefault/Error/Error.tsx";
import { Footer } from "./Components/ComponentsDefault/Footer/Footer.tsx";
import './App.css';

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error code={404} />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;


