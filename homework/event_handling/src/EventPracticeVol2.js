/**앞서 EventPracticeVol1 에서는 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주었다.
 * 이 방법 대신 함수를 미리 준비하여 전달하는 방법이 있다. 기능상으로는 차이가 거의 없지만 가독성은 훨씬 좋다.
 * (하지만 상황에 따라 렌더링 메서드 내부에서 함수를 만드는 것이 더 편할 때도 있다.)
 * onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드를 만들어보았다.
 */

import { Component } from "react";

class EventPracticeVol2 extends Component {
  state = {
    message: "",
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
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

export default EventPracticeVol2;
