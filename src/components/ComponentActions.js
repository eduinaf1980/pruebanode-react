import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchComponent from './utils/Search';


export const ComponentActions = (props) => {

  return (
    <>
      <Row className='align-items-center'>
        <Col md={4}>
          <span className='h4 mr-4'>
            {props.title}
          </span>
          <Link
            className='btn btn-success waves-effect waves-light btn-rounded w-btn'
            to={props.to}
            role='button'
          >
            Añadir
          </Link>
        </Col>
      </Row>
      <hr className={`mb-5 lw ${props.color || 'text-primary'}`} />
    </>
  )
}
