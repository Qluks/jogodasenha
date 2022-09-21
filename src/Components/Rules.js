import React, { Component } from 'react';
import styled from 'styled-components';

const RulesWrapper = styled.div`
  padding: 1rem;
  max-width: 40%;
  margin: 0 auto;
  text-align: left;
  border-radius: 20px;
  border: 10px solid #f0f8fc;
  background-color: rgba(0,0,0,0.5);
  @media (max-width: 700px) {
    max-width: 90%;
  }
`
const RulesLink = styled.a`
  font-size: 14px;
  font-weight: normal;
  color: white;
  padding: 1em;
  display: block;
`
class Rules extends Component {
  constructor(){
    super();
    this.state = {
      scrollOpen: false,
    }
  }
  __handleRulesView(){
    this.setState(prevState => {
      return {
        scrollOpen: !prevState.scrollOpen,
      }
    })
  }
  render() {
    const { scrollOpen } = this.state;
    return (
      <div>
        <RulesLink href="javascript:void(0)" onClick={this.__handleRulesView.bind(this)}>{ !scrollOpen ? `REGRAS` : `JOGAR` }</RulesLink>
        {
          scrollOpen ?
          <RulesWrapper>
            <p>O objetivo deste jogo é adivinhar um número de 4 dígitos com o menor número de tentativas possível.</p>
            <p>Com cada palpite, você receberá um feedback indicando quantos touros e vacas você obteve com o palpite.</p>
            <p>Um touro significa: um dos dígitos está correto e também está no lugar certo.</p>
            <p>Uma vaca significa: um dos dígitos é um número certo, mas não está no lugar certo.</p>
            <p> Por exemplo, dado que a resposta é 0130, um palpite de 3610 receberá 1 Touro 2 Vacas. 1 Touro é 0, 2 Vacas são 1 e 3.</p>
          </RulesWrapper>: ''
        }
      </div>
    );
  }
}

export default Rules;
