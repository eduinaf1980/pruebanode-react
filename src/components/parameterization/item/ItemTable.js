import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table } from 'reactstrap';
import ModalAlert from '../../ModalAlert';
import ActionsComponent from '../../utils/ActionsComponent';
import API from '../../../api'
import { CheckTable } from '../../utils/ComponentTable';
import PaginationComponent from '../../utils/Pagination';
import { ComponentActions } from '../../ComponentActions';


const ItemTable = () => {
  let navigate = useNavigate()
  const [confirmBoth, setConfirmBoth] = useState(false)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  /*const handleSearch = async (query, page) => {
    if (query) {
      const response = await API.Company.filterSearch(query, page)
      if (response.result) {
        setCompanies(response.result)
      }
    }
  }*/

  const filterAll = async () => {
    const response = await API.Item.all()
    if (response.result) {
      setItems(response.result)
    } else {
      setItems([])
    }
  }

  const handleNext = () => {
    if (items.length === 10) {
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

  const deleteItem = async (id) => {
    const response = await API.Item.delete(id)
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
        title='Items'
        to='/item/create'
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
                <th scope='col'> Id </th>
                <th scope='col'> Description </th>
                <th scope='col'> Code </th>
                <th scope='col'> Company </th>
                <th scope='col' className='text-right'> Acciones </th>
              </tr>
            </thead>
            <tbody >
              {items.map((value, index) => (
                <tr key={index} className='handleRedirect text-center' >
                  <th onClick={() => navigate(`/item/update/${value.id}`)} scope='row'> {value.id} </th>
                  <td onClick={() => navigate(`/item/update/${value.id}`)}> {value.description} </td>
                  <td onClick={() => navigate(`/item/update/${value.id}`)}> {value.code} </td>
                  <td onClick={() => navigate(`/item/update/${value.nit}`)}> {value.companies_id} </td>
                  <ActionsComponent
                    setConfirmBoth={setConfirmBoth}
                    id={value.nit}
                    showActivate={true}
                    toUpdated={`/item/update/${value.id}`}
                    onClick={() => deleteItem(value.id)}
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

export default ItemTable;