import React from "react";
import {
  Row,
  Col
} from "reactstrap";

import CardUser from "./card-user";
import General from "./general";
import CardWelcome from "./card-welcome";
import { getItem } from "../../utils/index";

const Dash = (props) => {
  return (
    <>
      <Row>
        <CardUser id={getItem("userId")} />
        <Col xl="8">
          <CardWelcome />
        </Col>
      </Row>
      <Row>
        <General />
      </Row>
    </>
  );
};

export default Dash;
