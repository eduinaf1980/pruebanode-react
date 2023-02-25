import React from 'react';
import { Container } from "reactstrap";
import NavBar from '../VerticalLayout/Index';

const BaseView = (props) => {
  return (
    <NavBar >
      <div className="page-content">
        <Container fluid>
          {props.children}
        </Container>
      </div>
    </NavBar>
  )
}

export default BaseView;