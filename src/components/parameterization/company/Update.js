import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Form
} from 'reactstrap';
import TableTitle from '../../utils/TableTitle';
import { InputTable } from '../../utils/ComponentTable';
import API from '../../../api/index';
import { useParams } from 'react-router-dom';
import ActionsUpdate from '../../utils/ActionsUpdate';
import { useNavigate } from 'react-router-dom';


const UpdateCompanyComponent = () => {
  let params = useParams();
  let navigate = useNavigate()
  const [nit, setNit] = useState('')
  const [messageNit, setMessageNit] = useState('')
  const [name, setName] = useState('')
  const [messageName, setMessageName] = useState('')
  const [address, setAddress] = useState('')
  const [messageAddress, setMessageAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [messagePhone, setMessagePhone] = useState('')
  const [messageError, setMessageError] = useState('')

  const getCompany = async () => {
    const response = await API.Company.get({
      'nit': params.nit,
    })
    if (response.ok) {
      setNit(response.result.nit)
      setName(response.result.name)
      setAddress(response.result.address)
      setPhone(response.result.phone)
    }
  }

  const submit = async () => {
    setMessageName('')
    setMessageNit('')
    const response = await API.Company.update({
      'nit': nit,
      'name': name,
      'address': address,
      'phone': phone,
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

  useEffect(() => {
    getCompany()
  }, [params.nit])

  return (
    <>
      <Card>
        <CardBody>
          <TableTitle title='Actualizar Compa????a' />
          <Row className='align-items-center'>
            <Col md='7'>
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
          <ActionsUpdate toBack='/companies' onClick={submit} />
        </CardBody>
      </Card>
    </>
  )
}

export default UpdateCompanyComponent;