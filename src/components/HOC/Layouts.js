import React, { Component } from 'react';
import styled from 'styled-components';

class Layout extends Component {
  render() {

    const Div = styled.div`
    height: 100vh;
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
    padding-top: 30px;
    `
    


    return (
      <Div className=''>
        {this.props.children}
      </Div>
    );
  }
}

export default Layout;