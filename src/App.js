import React from "react";
// import propTypes from "prop-types";

// extends 를 통해 React.Componet가 가지고 있는 여러가지 method 를 가져온다.
// 그 중 지금 사용하려고 하는 것은 render Method 이다.
// react는 자동적으로 모든 class의 render method를 실행한다.

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   console.log("constructor");
  // }

  state = {
    count: 0
  }

  // setState를 사용하면 react는 자동적으로 render method 를 호출하게 된다. -> 상태변화에 사용
  // this.state.count 는 좋은 방법이 아니다. 의존성 문제와 성능문제를 야기하기 때문에
  // 다음과 같이 current를 사용하면 해결할 수 있고, 좋은 코딩 방법이다.

  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }

  // life Cycle number
  // Constructor(javascript) -> render -> componentDidMount -> render -> componentDidUpdate  

  // render가 준비되면 실행됌
  componentDidMount() {
    console.log("component rendering(DidMount)");
  }

  // setState를 이용해 변경(업데이트)되었을 때 실행 됌
  componentDidUpdate() {
    console.log("component Update!(DidUpdate)");
  }

  // 페이지를 떠날때 실행 됌
  componentWillUnmount() {
    console.log("Goodbye, my reactPage(Unmount)");
  }

  // this.add() 하면 즉시 실행, 하지만 내가 원하는 건 클릭 했을때만 실행을 원하기 때문에 ()를 빼고 작성
  // 첫번째로 render가 실행 됌
  render() {
    console.log("i'm render(render)");
    const state = this.state
    return <div>
      <h1>The number is : {state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
