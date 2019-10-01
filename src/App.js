import React from "react";
import { connect } from "react-redux";
import { increment } from "./actions/increment";
import { decrement } from "./actions/decrement";
import { start } from "./actions/start";
import { reset } from "./actions/reset";

const mapStateToProps = state => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
  onReset: () => dispatch(reset()),
  onStart: () => setInterval(() => dispatch(start()), 1000)
});

class App extends React.Component {
  render() {
    const styles = {
      container: {
        display: "grid",
        alignItems: "center",
        textAlign: "center"
        //border: "1px solid red"
      }
    };
    return (
      <div style={styles.container}>
        <div>
          <h1>Simple timer</h1>
        </div>
        <div>
          <h2>time: {this.props.count} secs</h2>
        </div>
        <div>
          <button onClick={this.props.onIncrement}>increment</button>
          <button onClick={this.props.onDecrement}>decrement</button>
          <button onClick={this.props.onReset}>reset</button>
        </div>
        <br />
        <div>
          <button onClick={this.props.onStart}>start</button>
          <button>stop</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
