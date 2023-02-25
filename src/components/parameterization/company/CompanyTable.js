import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table } from 'reactstrap';
import ModalAlert from '../../ModalAlert';
import ActionsComponent from '../../utils/ActionsComponent';
import API from '../../../api'
import { CheckTable } from '../../utils/ComponentTable';
import PaginationComponent from '../../utils/Pagination';
import { ComponentActions } from '../../ComponentActions';


const CompanyTable = () => {
  let navigate = useNavigate()
  const [confirmBoth, setConfirmBoth] = useState(false)
  const [companies, setCompanies] = useState([])
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  const filterAll = async () => {
    const response = await API.Company.all()
    if (response.result) {
      setCompanies(response.result)
    } else {
      setCompanies([])
    }
  }

  const handleNext = () => {
    if (companies.length === 10) {
      const pageTemp = page + 1
      setPage(pageTemp)
      filterAll()
    }
  }

  const handleBack = () => {
    if (page > 0) {
      const pageTemp = page - 1
      setPage(pageTemp)
      filterAll()
    }
  }

  const deleteCompany = async (nit) => {
    const response = await API.Company.delete(nit)
    if(response){
      filterAll()
    }
  }


  const setMessageSuccess = () => {
    //setTimeout(() => { dispatch(actionSetMessageSuccess(''))  }, 2000)       
  }

  useEffect(() => {
    filterAll()
    setMessageSuccess()
  }, [])

  return (
    <>
      <ComponentActions
        title='Compañías'
        to='/companies/create'
        value={query}
        //onClick={() => handleSearch(query, page)}
        onChange={(event) => setQuery(event.target.value)}
        clear={() => {
          filterAll()
          setQuery('')
        }}
        //submitKey={() => handleSearch(query, page)}
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
            page={page}
            next={() => handleNext()}
            back={() => handleBack()}
          />
        </div>
      </Card>
    </>
  )
}

export default CompanyTable;