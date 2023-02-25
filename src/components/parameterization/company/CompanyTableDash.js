import React, { useEffect, useState } from 'react';
import { Card, Table } from 'reactstrap';
import API from '../../../api';

const CompanyTableDash = () => {
  const [companies, setCompanies] = useState([])

  const filterAll = async () => {
    const response = await API.Company.all()
    if (response.result) {
      setCompanies(response.result)
    } else {
      setCompanies([])
    }
  }

  useEffect(() => {
    filterAll()
  }, [])

  return (
    <>
      <Card>
        <div className="table-responsive">
          <Table className='table table-hovered text-uppercase' responsive>
            <thead>
              <tr className='table-warning text-uppercase text-center'>
                <th scope='col'> Nit </th>
                <th scope='col'> Name </th>
                <th scope='col'> Address </th>
                <th scope='col'> Phone </th>
              </tr>
            </thead>
            <tbody >
              {companies.map((value, index) => (
                <tr key={index} className='handleRedirect text-center' >
                  <th scope='row'> {value.nit} </th>
                  <td> {value.name} </td>
                  <td> {value.address} </td>
                  <td> {value.phone} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  )
}

export default CompanyTableDash;