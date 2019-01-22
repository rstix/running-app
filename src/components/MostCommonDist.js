import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 2rem;
  border: 1px solid #59004a;
  border-radius: 4px;
  padding: 2px 20px;
  max-width: 120px;
  margin: 5px;
  cursor: pointer;
  background: #ffe0f9;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

class MostCommonDist extends Component {
  render() {
    return (
      <ButtonGroup>
        {this.props.commonDistances.map(dist => {
          return (
            <Button key={dist} onClick={() => this.props.captureDistance(dist)}>
              {dist}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  }
}

export default MostCommonDist;
