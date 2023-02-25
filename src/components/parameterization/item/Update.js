import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Form
} from 'reactstrap';
import TableTitle from '../../utils/TableTitle';
import { InputTable, SwitchUpdate, SelectTable } from '../../utils/ComponentTable';
import API from '../../../api/index';
import { useParams } from 'react-router-dom';
import ActionsUpdate from '../../utils/ActionsUpdate';
import { useNavigate } from 'react-router-dom';
import { AlternateEmail } from '@material-ui/icons';


const UpdateItemComponent = () => {
  let params = useParams();
  let navigate = useNavigate()
  const [id, setId] = useState('')
  const [messageId, setMessageId] = useState('')
  const [description, setDescription] = useState('')
  const [messageDescription, setMessageDescription] = useState('')
  const [code, setCode] = useState('')
  const [messageCode, setMessageCode] = useState('')
  const [company, setCompany] = useState('')
  const [companies, setCompanies] = useState([])
  const [messageCompany, setMessageCompany] = useState('')
  const [messageError, setMessageError] = useState('')

  const getItem = async () => {
    const response = await API.Item.get(params.id)
    if (response.ok) {
      setDescription(response.result.description)
      setCode(response.result.code)
      setCompany(response.result.companies_id)
      setId(response.result.id)
    }
  }

  const setMessageSuccess = (messageSuccess) => {
    //dispatch(actionSetMessageSuccess(messageSuccess))
  }

  const submit = async () => {
    setMessageDescription('')
    setMessageCode('')
    setMessageSuccess('')
    const response = await API.Item.update({
      'id': id,
      'description': description,
      'code': code,
      'companies_id': company,
    })
    if (response.ok) {
      setMessageSuccess(response.message)
      navigate('/item')
    } else {
      if (response.errors) {
        setError()
        if (response.errors.name) {
          setMessageDescription(response.errors.description[0])
        }
        if (response.errors.nit) {
          setMessageCode(response.errors.code[0])
        }
      }
      if (response.message) {
        setError()
      }
    }
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

  const setError = () => {
    setMessageError('Ocurrio un error, verifica los campos')
    setTimeout(() => {
      setMessageError('')
    }, 5000);
  }


  useEffect(() => {
    getItem()
  }, [params.nit])

  return (
    <>
      <Card>
        <CardBody>
          <TableTitle title='Actualizar Item' />
          <Row className='align-items-center'>
            <Col md='7'>
              {messageError && (
                <div className="alert alert-danger" role="alert">{messageError}</div>
              )}
              <Form>
                <InputTable
                  messageInvalid={messageId}
                  title='Id'
                  type='text'
                  placeholder='Ingrese el id'
                  onChange={(event) => {
                    setId(event.target.value)
                    setMessageId('')
                  }}
                  value={id}
                />
                <InputTable
                  messageInvalid={messageDescription}
                  title='Descripcion'
                  type='text'
                  placeholder='Ingrese la descripcion'
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
          <ActionsUpdate toBack='/item' onClick={submit} />
        </CardBody>
      </Card>
    </>
  )
}

export default UpdateItemComponent;