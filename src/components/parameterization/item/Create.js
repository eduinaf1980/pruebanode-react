import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Form
} from 'reactstrap';
import TableTitle from '../../utils/TableTitle';
import { DateTable, InputTable, SelectTable } from '../../utils/ComponentTable';
import TableActions from '../../utils/TableActions';
import API from '../../../api/index';
import { useNavigate } from 'react-router-dom';


const CreateItemComponent = () => {
  let navigate = useNavigate()
  const [description, setDescription] = useState('')
  const [messageDescription, setMessageDescription] = useState('')
  const [code, setCode] = useState('')
  const [messageCode, setMessageCode] = useState('')
  const [company, setCompany] = useState('')
  const [companies, setCompanies] = useState([])
  const [messageCompany, setMessageCompany] = useState('')
  const [disableSubmit, setDisableSubmit] = useState(false)
  const [messageError, setMessageError] = useState('')

  /*const verifyNit = async (nit) => {
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
  }*/

  const setMessageSuccess = (messageSuccess) => {
    //dispatch(actionSetMessageSuccess(messageSuccess))
  }

  const submit = async () => {
    setMessageDescription('')
    setMessageCode('')
    setMessageSuccess('')
    const response = await API.Item.create({
      'description': description,
      'code': code,
      'companies_id': company
    })
    if (response.ok) {
      setMessageSuccess(response.message)
      navigate('/item')
    } else {
      if (response.errors) {
        setError()
        if (response.errors.nit) {
          setMessageDescription(response.errors.description[0])
        }
        if (response.errors.code) {
          setMessageDescription(response.errors.code[0])
        }
        if (response.errors.company) {
          setMessageCode(response.errors.company[0])
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

  const filterCompanies = async () => {
    const response = await API.Company.all()
    let companiesTemp = []
    if (response.ok) {
      for (let index = 0; index < response.result.length; index++) {
        const element = response.result[index];
        companiesTemp.push({ 'id': element.nit, 'name': element.name})
      }
    }
    setCompanies(companiesTemp)
    alert(companies[0].value)
  }

  useEffect(() => {
    filterCompanies()
  }, [])

  return (
    <>
      <Card>
        <CardBody>
          <TableTitle title='Crear Item' />
          <Row className='align-items-center'>
            <Col lg='7'>
              {messageError && (
                <div className="alert alert-danger" role="alert">{messageError}</div>
              )}
              <Form>
                <InputTable
                  messageInvalid={messageDescription}
                  title='Descripcion'
                  type='text'
                  placeholder='Ingrese la descriptcion'
                  onChange={(event) => {
                    setDescription(event.target.value)
                    setMessageDescription('')
                    //verifyNit(event.target.value)
                  }}
                  value={description}
                />
                <InputTable
                  messageInvalid={messageCode}
                  title='Codigo'
                  type='text'
                  placeholder='Ingrese el codigo'
                  onChange={(event) => {
                    setCode(event.target.value)
                    setMessageCode('')
                    //verifyCompany(event.target.value)
                  }}
                  value={code}
                />
                <SelectTable
                messageInvalid={messageCompany}
                title='Empresa'
                options={companies}
                value={company}
                onChange={(event) => {
                  setMessageError('')
                  setCompany(event.target.value)
                }}
              />
              </Form>
            </Col>
          </Row>
          <TableActions toBack='/item' submit={submit} disabled={disableSubmit} />
        </CardBody>
      </Card>
    </>
  )
}

export default CreateItemComponent;