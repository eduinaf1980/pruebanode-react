import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Form
} from 'reactstrap';
import TableTitle from '../../utils/TableTitle';
import { InputTable, SwitchUpdate } from '../../utils/ComponentTable';
import TableActions from '../../utils/TableActions';
import API from '../../../api/index';
import { useNavigate } from 'react-router-dom';


const CreateCompanyComponent = () => {
  let navigate = useNavigate()
  const [nit, setNit] = useState('')
  const [messageNit, setMessageNit] = useState('')
  const [name, setName] = useState('')
  const [messageName, setMessageName] = useState('')
  const [address, setAddress] = useState('')
  const [messageAddress, setMessageAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [messagePhone, setMessagePhone] = useState('')
  const [disableSubmit, setDisableSubmit] = useState(false)
  const [messageError, setMessageError] = useState('')


  const submit = async () => {
    setMessageName('')
    setMessageNit('')
    const response = await API.Company.create({
      'nit': nit,
      'name': name,
      'address': address,
      'phone': phone
    })
    if (response.ok) {
      navigate('/companies')
    } else {
      const errors = JSON.parse(response.message)
      if (errors) {
        setError()
        if (errors.nit) {
          setMessageNit(errors.nit)
        }
        if (errors.nombre) {
          setMessageName(errors.nombre)
        }
        if (errors.direccion) {
          setMessageAddress(errors.direccion)
        }
        if (errors.telefono) {
          setMessagePhone(errors.telefono)
        }
      }
      if (response.message) {
        setError()
      }
    }
  }

  const setError = () => {
    setMessageError('Ocurrio un error, verifica los campos')
    setTimeout(() => {
      setMessageError('')
    }, 5000);
  }

  return (
    <>
      <Card>
        <CardBody>
          <TableTitle title='Crear Compañía' />
          <Row className='align-items-center'>
            <Col lg='7'>
              {messageError && (
                <div className="alert alert-danger" role="alert">{messageError}</div>
              )}
              <Form>
                <InputTable
                  messageInvalid={messageNit}
                  title='Nit'
                  type='text'
                  placeholder='Ingrese el nit'
                  onChange={(event) => {
                    setNit(event.target.value)
                    setMessageNit('')
                  }}
                  value={nit}
                />
                <InputTable
                  messageInvalid={messageName}
                  title='Nombre'
                  type='text'
                  placeholder='Ingrese el nombre'
                  onChange={(event) => {
                    setName(event.target.value)
                    setMessageName('')
                  }}
                  value={name}
                />
                <InputTable
                  messageInvalid={messageAddress}
                  title='Direccion'
                  type='text'
                  placeholder='Ingrese la direccion'
                  onChange={(event) => {
                    setAddress(event.target.value)
                    setMessageAddress('')
                  }}
                  value={address}
                />
                <InputTable
                  messageInvalid={messagePhone}
                  title='Telefono'
                  type='text'
                  placeholder='Ingrese el telefono'
                  onChange={(event) => {
                    setPhone(event.target.value)
                    setMessagePhone('')
                  }}
                  value={phone}
                />
              </Form>
            </Col>
          </Row>
          <TableActions toBack='/companies' submit={submit} disabled={disableSubmit} />
        </CardBody>
      </Card>
    </>
  )
}

export default CreateCompanyComponent;