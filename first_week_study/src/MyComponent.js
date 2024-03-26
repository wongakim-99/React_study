import React from "react";

const MyComponent = ({ name, children }) => {
  //const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "정연재",
};

export default MyComponent;
