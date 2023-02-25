import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Media,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  CardFooter,
  Button,
} from "reactstrap";

import CardUser from "./card-user";
import General from "./general";
import CardWelcome from "./card-welcome";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import { getItem } from "../../utils/index";

const Dash = (props) => {
  return (
    <>
      <Row>
        <CardUser id={getItem("userId")} />
        <Col xl="8">
          {/* card welcome */}
          <CardWelcome />
        </Col>
      </Row>

      {/* Indicadores mantenimiento gerenciales */}
      <Row>
        <General />
      </Row>
    </>
  );
};

export default Dash;
