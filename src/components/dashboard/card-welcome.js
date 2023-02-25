import React, { Component } from "react"
import { Row, Col, Card } from "reactstrap"

//Import Image
import features from "../../assets/images/crypto/img-2.png"

class CardWelcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <div>
            <Row>
              <Col lg="9" sm="8">
                <div className="p-4">
                  <h5 className="text-primary">Bienvenido !</h5>
                  <p>PRUEBA TÉCNICA LITE THINKING - 2022 | DESARROLLADOR FULL STACK REACT/NODEJS</p>

                  <div className="text-muted">
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      En el dashboard tendra una visiòn general de datos de empresas para todos los usuarios.
                    </p>
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      El ejercicio esta basado en modelo vista controlador.
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      Se encripta contraseña, manejo token de sesión y base de datso para este ejemplo postgres.
                    </p>
                    <p className="mb-0">
                     
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" sm="4" className="align-self-center">
                <div>
                  <img src={features} alt="" className="img-fluid d-block" />
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </React.Fragment>
    )
  }
}

export default CardWelcome
