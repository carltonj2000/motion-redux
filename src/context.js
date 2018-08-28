import React, { Component } from "react";

const Context = React.createContext();

export const TransState = Object.freeze({ invalid: 1, started: 2, ended: 3 });
export const ActionTypes = Object.freeze({ updateState: 1, updateTrans: 2 });

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.updateState:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.updateTrans:
      return {
        ...state,
        transitionState: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    transitionState: TransState.invalid,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
