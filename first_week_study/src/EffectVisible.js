import React, { useState } from "react";
import EffectInfo from "./EffectInfo";

const EffectVisible = () => {
  const [visible, setVisible] = useState(false);
  console.log("부모가 렌더링 되나요?");
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <EffectInfo />}
    </div>
  );
};

export default EffectVisible;
