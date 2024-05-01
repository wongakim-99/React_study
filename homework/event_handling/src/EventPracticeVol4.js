/**
 * 만약 input이 여러 개일 때 어떻게 작업하는가?
 *
 * 메서드를 여러 개 만드는것도 방법이지만 event 객체를 활용하는것
 * e.target.name 값을 사용하면 된다.
 * onChange이벤트 핸들러에서 e.target.name은 해당 인풋의 name을 가리킨다.
 * 앞서 EventPracticeVol3에서 e.target.name이 가리키는 인풋의 name은 message이다.
 * 이 값을 사용하여 state를 설정하면 더 쉽게 해결할 수 있다.
 *
 * 아래의 코드는 render 함수에서 name 값이 username인 input을 렌더링해 주었고,
 * state 쪽에도username 이라는 값을 추가해 주었다. 그리고 handleChange도 조금 변경해 주었다.
 */

import { Component } from "react";

class EventPracticeVol4 extends Component {
  state = {
    username: "",
    message: "",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자 이름"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력ㄱㄱ"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPracticeVol4;
