/**
 * 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이다. 하지만 이 작업을 불편하다고 느낄 수도 있다.
 * 새 메서드를 만들 때마다 constructor도 수정해야 하기 때문이다. 이 작업을 좀 더 간단하게 하는 방법이 있다.
 * 바로 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것이다.
 */

import { Component } from "react";

class EventPracticeVol3 extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  };
  handleClick = (e) => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPracticeVol3;
