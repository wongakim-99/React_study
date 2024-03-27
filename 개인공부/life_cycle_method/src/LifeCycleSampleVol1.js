import React, { Component } from "react";

class LifeCycleSampleVol1 extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; //ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }
  //getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드이다.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드이다.
  componentDidMount() {
    console.log("componentDidMount");
  }
  //shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  //componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드이다.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  //getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  //componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSampleVol1;

/**
 * ### 7.2.1 render() 함수
 * 이 메서드는 컴포넌트 모양새를 정의한다. 그렇기에 컴포넌트에서 가장 중요한 메서드라고 할 수 있다.
 * 라이프사이클 메서드 중 유일한 필수 메서드이기도 하다.
 * 이 메서드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환한다.
 *
 *
 * ### 7.2.2 constructor 메서드
 * 이것은 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행된다.
 * 이 메서드에서는 초기 state를 정할 수 있다.
 *
 *
 * ### 7.2.3 getDerivedStateFromProps 메서드
 * props로 받아 온 값을 state에 동기화시키는 용도로 사용하며,
 * 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.
 *
 *
 * ### 7.2.4 componentDidMount 메서드
 * 이것은 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행함.
 * 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나
 * 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다.
 *
 *
 * ### 7.2.5 shouldComponentUpdate 메서드
 * 이것은 props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드이다.
 * 이 메서드에서는 반드시 true값 또는 false 값을 반환해야 한다.
 * 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 언제나 true 값을 반환한다
 *
 *
 * ### 7.2.6 getSnapshotBeforeUpdate 메서드
 * 이 메서드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.
 * 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있다.
 * 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다.
 *
 *
 * ### 7.2.7 componentDidUpdate 메서드
 * 이것은 리렌더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방하다.
 * 여기서는 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다.
 *
 *
 * ### 7.2.8 componentWillUnmount 메서드
 * 이것은 컴포넌트를 DOM에서 제거할 때 실행한다.
 * componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야한다.
 *
 *
 * ### 7.2.9 componentDidCatch 메서드
 * 컴포넌트 렌더링 도중에 에러가 발생하였을 때 어플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄 수 있게
 * 해 준다.
 */
