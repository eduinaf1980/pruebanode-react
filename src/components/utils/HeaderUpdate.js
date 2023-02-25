import React from 'react'
import { Card, CardBody, Col, Form, Row } from 'reactstrap';
import { InputTable } from './ComponentTable';
import TableTitle from './TableTitle';

const HeaderUpdate = (props) => {
  return (
    <Card>
      <CardBody>
        <TableTitle title={props.title} color='color-maxim' />
        <Form>
          <Row className='align-items-center'>
            <Col lg='2'>
              <InputTable
                title='Código'
                type='text'
                placeholder='Ingrese código'
                value={props.code}
                disabled={true}
              />
            </Col>
            <Col lg='2'>
              <InputTable
              title='Código Anterior'
              type='text'
                placeholder='Ingrese código anterior'
                value={props.codeLast}
                disabled={true}
              />
            </Col>
            <Col lg='4'>
              <InputTable 
                type='text'
                title='Estado'
                placeholder='Ingrese estado'
                value={''}
                disabled={true}
              />
            </Col>
            <Col lg='4'>
              <InputTable 
                type='text'
                title='Categoria'
                placeholder='Ingrese categoria'
                value={props.category}
                disabled={true}
              />
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col lg='6'>
              <InputTable 
                type='text'
                title='Responsable'
                placeholder='Ingrese responsable'
                value={props.responsible}
                disabled={true}
              />
            </Col>
            <Col lg='6'>
              <InputTable
                type='text'
                title='Ultimo Lugar'
                placeholder='Ingrese ultimo Lugar'
                value={props.locationLast}
                disabled={true}
              />
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col lg={2}>
              <InputTable
                type='text'
                title='Fecha Fabricación'
                value={props.dateMake}
                disabled={true}
              />
            </Col>
            <Col lg={2}>
              <InputTable
                type='text'
                title='Marca o fabricante'
                placeholder='Ingrese marca o fabricante'
                value={props.brand}
                disabled={true}
              />
            </Col>
            <Col lg={2}>
              <InputTable
                type='text'
                title='Modelo'
                placeholder='Ingrese modelo'
                value={props.model}
                disabled={true}
              />
            </Col>
            <Col lg={3}>
              <InputTable
                type='text'
                title='Lote'
                placeholder='Ingrese lote'
                value={props.batch}
                disabled={true}
              />
            </Col>
            <Col lg={3}>
              <InputTable
                type='text'
                title='Ubicación'
                placeholder='Ingrese ubicación'
                value={props.location}
                disabled={true}
              />
            </Col>
          </Row>
        </Form>
        <hr className='lw text-success' />
      </CardBody>
    </Card>
  )
}

export default HeaderUpdate