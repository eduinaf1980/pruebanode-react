import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table } from 'reactstrap';
import ModalAlert from '../../utils/ModalAlert';
import ActionsComponent from '../../utils/ActionsComponent';
import API from '../../../api'
import PaginationComponent from '../../utils/Pagination';
import { ComponentActions } from '../../utils/ComponentActions';


const CompanyTable = () => {
  let navigate = useNavigate()
  const [confirmBoth, setConfirmBoth] = useState(false)
  const [companies, setCompanies] = useState([])
  const [query, setQuery] = useState('')

  const filterAll = async () => {
    const response = await API.Company.all()
    if (response.result) {
      setCompanies(response.result)
    } else {
      setCompanies([])
    }
  }

  const deleteCompany = async (nit) => {
    const response = await API.Company.delete(nit)
    if (response) {
      filterAll()
    }
  }

  useEffect(() => {
    filterAll()
  }, [])

  return (
    <>
      <ComponentActions
        title='Compañías'
        to='/companies/create'
        pdf='false'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        clear={() => {
          filterAll()
          setQuery('')
        }}
      />
      <ModalAlert confirmBoth={confirmBoth} setConfirmBoth={setConfirmBoth} />
      <Card>
        <div className="table-responsive">
          <Table className='table table-hovered text-uppercase' responsive>
            <thead>
              <tr className='table-warning text-uppercase text-center'>
                <th scope='col'> Nit </th>
                <th scope='col'> Name </th>
                <th scope='col'> Address </th>
                <th scope='col'> Phone </th>
                <th scope='col' className='text-right'> Acciones </th>
              </tr>
            </thead>
            <tbody >
              {companies.map((value, index) => (
                <tr key={index} className='handleRedirect text-center' >
                  <th onClick={() => navigate(`/companies/update/${value.nit}`)} scope='row'> {value.nit} </th>
                  <td onClick={() => navigate(`/companies/update/${value.nit}`)}> {value.name} </td>
                  <td onClick={() => navigate(`/companies/update/${value.nit}`)}> {value.address} </td>
                  <td onClick={() => navigate(`/companies/update/${value.nit}`)}> {value.phone} </td>
                  <ActionsComponent
                    setConfirmBoth={setConfirmBoth}
                    id={value.nit}
                    showActivate={true}
                    toUpdated={`/companies/update/${value.nit}`}
                    onClick={() => deleteCompany(value.nit)}
                  />
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='pagination justify-content-end mt-4 pagination-md'>
          <PaginationComponent
          />
        </div>
      </Card>
    </>
  )
}

export default CompanyTable;