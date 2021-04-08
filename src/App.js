import React from "react";
import propTypes from "prop-types";

// extends 를 통해 React.Componet가 가지고 있는 여러가지 method 를 가져온다.
// 그 중 지금 사용하려고 하는 것은 render Method 이다.
// react는 자동적으로 모든 class의 render method를 실행한다.

class App extends React.Component {
  state = {
    count: 0
  }

  // this.state.count 는 좋은 방법이 아니다. 의존성 문제와 성능문제를 야기하기 때문에
  // 다음과 같이 current를 사용하면 해결할 수 있고, 좋은 코딩 방법이다.

  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
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
