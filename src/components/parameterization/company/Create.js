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

  const verifyNit = async (nit) => {
    setDisableSubmit(false)

    if (nit) {
      const response = await API.Company.verifyNit(nit)

      if (!response.ok) {
        setMessageNit(response.message)
        setDisableSubmit(true)
      }
    }
  }

  const verifyCompany = async (name) => {
    setDisableSubmit(false)

    if (name) {
      const response = await API.Company.verifyCompany(name)

      if (!response.ok) {
        setMessageName(response.message)
        setDisableSubmit(true)
      }
    }
  }

  const setMessageSuccess = (messageSuccess) => {
    //dispatch(actionSetMessageSuccess(messageSuccess))
  }

  const submit = async () => {
    setMessageName('')
    setMessageNit('')
    setMessageSuccess('')
    const response = await API.Company.create({
      'nit': nit,
      'name': name,
      'address': address,
      'phone': phone
    })
    if (response.ok) {
      setMessageSuccess(response.message)
      navigate('/companies')
    } else {
      if (response.errors) {
        setError()
        if (response.errors.nit) {
          setMessageNit(response.errors.nit[0])
        }
        if (response.errors.name) {
          setMessageName(response.errors.name[0])
        }
        if (response.errors.address) {
          setMessageName(response.errors.address[0])
        }
        if (response.errors.phone) {
          setMessageName(response.errors.phone[0])
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
                    //verifyNit(event.target.value)
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
                    //verifyCompany(event.target.value)
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