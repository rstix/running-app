import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  background: #ffa5f0;
  margin-bottom: 20px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <h1>Track your performance</h1>
      </HeaderStyled>
    );
  }
}

export default Header;
