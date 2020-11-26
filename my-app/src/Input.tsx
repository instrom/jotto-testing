import React, { Component } from "react";
import { connect } from "react-redux";
import { setGuessWord } from "./redux/actions/index";
interface IProps {
  success: boolean;
}
class Input extends Component<IProps> {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input data-test="input-box" type="text"></input>
        <button data-test="submit-button" type="submit">
          submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    success: state.success.success,
  };
};

const mapDispatchToProps = () => {
  return {
    setGuessWord,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
