import React, { Component } from "react";

class EventPracticeVol1 extends Component {
  state = {
    message: "", //state에 input 값을 담아준다.
  };
  /*생성자 메서드인 constructor에서 state 초깃값을 설정하고, 이벤트 핸들링 함수 내부에서
    this.setState 메서드를 호출하여 state를 업데이트*/
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력ㄱㄱ"
          value={this.state.message}
          onChange={(e) => {
            console.log(e.target.value); //값이 바뀔 때마다 바뀌는 값을 콘솔에 기록함
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            //입력한 값이 state에 잘 들어갔는지, 그리고 인풋에서 그 값을 제대로 반영한지 검증하기 위해 사용
            alert(this.state.message); //alert를 사용하여 현재 message 값을 화면에 표시
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPracticeVol1;
