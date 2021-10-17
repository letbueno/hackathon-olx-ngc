import React from "react";

import Menu from "./components/menu";
import { Main } from "./components/main";
import { SearchBox } from "./components/search-box";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Menu />
      <SearchBox />
      <Main />
      <Footer />
    </>
  );
}
