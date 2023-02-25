import React, { useState, useEffect } from 'react';
import {
  Card,
  Table,
} from 'reactstrap';
import API from '../../../api';
import ModalAlert from '../../ModalAlert';
import ActionsComponent from '../../utils/ActionsComponent';
import { useNavigate } from 'react-router-dom';
import PaginationComponent from '../../utils/Pagination';
import { ComponentActions } from '../../ComponentActions';


const UserTable = () => {
  let navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [confirmBoth, setConfirmBoth] = useState(false)
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  const handleSearch = async (query, page) => {
    if (query) {
      const response = await API.User.filterSearch(query, page)
      if (response.result) {
        setUsers(response.result)
      }
    }
  }

  const filterByPage = async (page) => {
    const response = await API.User.filterByPage(page)
    if (response.result) {
      setUsers(response.result)
    } else {
      setUsers([])
    }
  }

  const handleNext = () => {
    if (users.length === 10) {
      const pageTemp = page + 1
      setPage(pageTemp)
      filterByPage(pageTemp)
    }
  }

  const handleBack = () => {
    if (page > 0) {
      const pageTemp = page - 1
      setPage(pageTemp)
      filterByPage(pageTemp)
    }
  }

  const changeAvailable = async (status, id) => {
    if (status) {
      await API.User.enable(id)
    } else {
      await API.User.delete(id)
    }
    filterByPage(page)
  }

  useEffect(() => {
    filterByPage(page)
  }, [])

  return (
    <>
      <ComponentActions
        title='Usuarios'
        to='/users/create'
        value={query}
        onClick={() => handleSearch(query, page)}
        onChange={(event) => setQuery(event.target.value)}
        clear={() => {
          filterByPage(page)
          setQuery('')
        }}
        submitKey={() => handleSearch(query, page)}
      />
      <ModalAlert confirmBoth={confirmBoth} setConfirmBoth={setConfirmBoth} />
      <Card>
        <div className="table-responsive">
          <Table className='table table-hovered text-uppercase' responsive>
            <thead>
              <tr className='table-warning'>
                <th scope='col'> ID </th>
                <th scope='col'> Cédula </th>
                <th scope='col'> Nombre </th>
                <th scope='col'> Apellido </th>
                <th scope='col'> Email </th>
                <th scope='col' className='text-right'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((value, index) => (
                <tr key={index} className='handleRedirect'>
                  <td onClick={() => navigate(`/users/update/${value.id}`)}> {value.id} </td>
                  <td onClick={() => navigate(`/users/update/${value.id}`)}> {value.num_document} </td>
                  <td onClick={() => navigate(`/users/update/${value.id}`)}> {value.first_name} </td>
                  <td onClick={() => navigate(`/users/update/${value.id}`)}> {value.last_name} </td>
                  <td onClick={() => navigate(`/users/update/${value.id}`)}> {value.email} </td>
                  <ActionsComponent
                    setConfirmBoth={setConfirmBoth}
                    id={value.id}
                    showActivate={true}
                    isActive={!value.available}
                    onClick={(status) => changeAvailable(status, value.id)}
                    toUpdated={`/users/update/${value.id}`}
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

export default UserTable;