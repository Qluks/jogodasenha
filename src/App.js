import React, { Component } from 'react';
import styled from 'styled-components';
import Rules from './Components/Rules';
import Game from './Components/Game';
import './App.css';

const AppWrapper = styled.div`
  padding: 1rem;
  color: white;
  text-align: center;
  background-color: gray;
  height: 100vh;
  box-sizing: border-box;
  overflow: scroll;
`
const AppHeader = styled.h1`
  display: inline-block;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.5);
  padding: 15px;
`
const AppLink = styled.a`
  color: white;
  background-color: rgba(0,0,0,0.5);
  padding: 15px;
  bottom: 0;
  box-sizing: border-box;
  display: inline-block;
  margin: 2%;
`
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>Jogo da senha</AppHeader>
        <Game />
        <Rules />
      </AppWrapper>
    );
  }
}

export default App;
