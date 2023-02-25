import React, {useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  CardTitle
} from "reactstrap";

import CompanyTableDash from '../parameterization/company/CompanyTableDash';

const General = (props) => {

  return (
    <React.Fragment>
      <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="mb-4">Información General de Empresas</CardTitle>
              <Row>
                <Col sm="12">
                  <CompanyTableDash />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
    </React.Fragment>
  );
};

export default General;
