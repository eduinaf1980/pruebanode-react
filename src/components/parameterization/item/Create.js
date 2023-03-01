import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Form
} from 'reactstrap';
import TableTitle from '../../utils/TableTitle';
import { InputTable, SelectTable } from '../../utils/ComponentTable';
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
  const [messageError, setMessageError] = useState('')

  const submit = async () => {
    setMessageDescription('')
    setMessageCode('')
    const response = await API.Item.create({
      'description': description,
      'code': code,
      'companies_id': company
    })
    if (response.ok) {
      navigate('/item')
    } else {
      const errors = JSON.parse(response.message)
      if (errors) {
        setError()
        if (errors.descripcion) {
          setMessageDescription(errors.descripcion)
        }
        if (errors.codigo) {
          setMessageCode(errors.codigo)
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
                  }}
                  value={code}
                />
                <SelectTable
                messageInvalid={""}
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
          <TableActions toBack='/item' submit={submit}  />
        </CardBody>
      </Card>
    </>
  )
}

export default CreateItemComponent;