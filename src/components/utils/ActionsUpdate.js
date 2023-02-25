import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

const ActionsUpdate = (props) => {
  return (
    <Row className='align-items-center'>
      <Col>
        <div className='button-items'>
          <Button
            onClick={props.onClick}
            color="success"
            className="mr-1 waves-effect waves-light w-btn"
            disabled={props.disabled}
          >
            Actualizar
          </Button>
          <Link
            className="btn btn-danger waves-effect waves-light w-btn"
            to={props.toBack}
            role="button"
          >
            Atrás
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default ActionsUpdate;