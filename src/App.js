import React from "react";
import propTypes from "prop-types";

// extends 를 통해 React.Componet가 가지고 있는 여러가지 method 를 가져온다.
// 그 중 지금 사용하려고 하는 것은 render Method 이다.
// react는 자동적으로 모든 class의 render method를 실행한다.

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
  }

  minus = () => {
    console.log("minus");
  }

  // this.add() 하면 즉시 실행, 하지만 내가 원하는 건 클릭 했을때만 실행을 원하기 때문에 ()를 빼고 작성
  render() {
    const state = this.state
    return <div>
      <h1>The number is : {state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
