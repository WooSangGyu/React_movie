import React from "react";

// 첫번째 인자로 props를 받는다 -> { fav } == props.fav
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="Kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
