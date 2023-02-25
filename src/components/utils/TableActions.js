import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

const TableActions = (props) => {
  let isCreated = props.isCreated
  if (props.isCreated === undefined) {
    isCreated = true
  }
  return (
    <Row className='align-items-center'>
      <Col md='6'>
        <div className='button-items'>
          {isCreated && (
            <Button
              onClick={() => {
                props.submit()
              }}
              color="success"
              className="mr-1 waves-effect waves-light w-btn"
              disabled={props.disabled}
            >
              Crear
            </Button>
          )}
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

export default TableActions;