import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";
import "./App.css";

// HashRouter는 주소창에 #이 있음, BrowserRouter는 #이 없음
// router안에 모든것을 넣을 필요는 없음. 다만 Link는 router 안에서 사용되어야 함.
// component route 안에 있어야 props가 존재, navigation에는 props가 없음. 
function App() {
  return <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </BrowserRouter>
}

export default App;