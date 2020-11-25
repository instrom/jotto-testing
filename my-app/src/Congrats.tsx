import React from "react";

interface IProps {
  success: boolean;
}

function Congrats(props: IProps) {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congrats u got the correct word!
        </span>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Congrats;
