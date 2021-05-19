import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  max-width: 1200px;
  padding: 60px 30px;
  margin: 0 auto;
`;
class Layout extends PureComponent {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return <Div>{this.props.children}</Div>;
  }
}

export default Layout;
