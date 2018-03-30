import React, { Component } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Menu from "./menu";
import Game from "./game";

import { onGameResetWinner } from "../actions";

const mapStateToProps = ({ view, winner }) => ({
  view,
  winner
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onGameResetWinner
    },
    dispatch
  );

const App = ({ view, winner, onGameResetWinner }) => {
  if (winner) {
    Alert.alert(
      "We know a winner!",
      `Winner is ${winner}`,
      [{ text: "OK", onPress: onGameResetWinner }],
      {
        cancelable: false
      }
    );
  }

  return {
    menu: <Menu />,
    game: <Game />
  }[view];
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
