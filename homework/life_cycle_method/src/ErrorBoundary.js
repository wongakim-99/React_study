import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  //에러가 발생하면 componentDidCatch 메서드가 호출되며, 이 메서드는 this.state.error 값을 true로 업데이트
  //해준다. 그리고 render함수는 this.state.error 값이 true라면 에러가 발생했음을 알려 주는 문구를 보여 준다.
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
