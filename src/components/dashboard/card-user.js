import React, {useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import { getItem } from '../../utils/index';

const CardUser = (props) => {
  
  const [userid, setUserid] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [type, setType] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUser()
  },[props]);

  const getUser = async () => {
      setUserid(getItem('userId'))
      setFirstname(getItem('fullName'))
      setEmail(getItem('email'))
      setType(getItem('type'))
  }


  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <div>
              <div className="mb-3 mr-3">
                <i className="mdi mdi-account-circle text-primary h1"></i>
              </div>
              <Row>
                <Col>
                  <div>
                    <h5>Nombre: {firstname}</h5>
                    <p className="text-muted mb-1">Email: {email}</p>
                    <p className="text-muted mb-0">Id no: {userid}</p>
                    <p className="text-muted mb-0"> Tipo de Usuario: {type}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardUser;
