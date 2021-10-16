import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Menu from "./pages/components/menu";
import { Main } from "./pages/components/main";
import { SearchBox } from "./pages/components/search-box";
import { Footer } from "./pages/components/footer";

function App() {
  return (
    <>
      <Menu />
      <SearchBox />
      <Main />
      <Footer />
    </>
  );
}

export default App;
