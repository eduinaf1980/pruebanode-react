import React from 'react';
import { Col, Row } from 'reactstrap';

const TableTitle = (props) => {
  return (
    <>
      <Row className='align-items-center'>
        <Col sm='12' md='12'>
          <h4> {props.title} </h4>
        </Col>
      </Row>
      <hr className={`mb-5 lw ${props.color || 'text-success'}`} />
    </>
  )
}

export default TableTitle;