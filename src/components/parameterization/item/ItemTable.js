import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table } from 'reactstrap';
import ModalAlert from '../../utils/ModalAlert';
import ActionsComponent from '../../utils/ActionsComponent';
import API from '../../../api'
import PaginationComponent from '../../utils/Pagination';
import { ComponentActions } from '../../utils/ComponentActions';


const ItemTable = () => {
  let navigate = useNavigate()
  const [confirmBoth, setConfirmBoth] = useState(false)
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')


  const filterAll = async () => {
    const response = await API.Item.all()
    if (response.result) {
      setItems(response.result)
    } else {
      setItems([])
    }
  }

  const deleteItem = async (id) => {
    const response = await API.Item.delete(id)
    if(response){
      filterAll()
    }
  }

  useEffect(() => {
    filterAll()
  }, [])

  return (
    <>
      <ComponentActions
        title='Items'
        to='/item/create'
        pdf='true'
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
                  <td onClick={() => navigate(`/item/update/${value.nit}`)}> {value.company.name} </td>
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
          />
        </div>
      </Card>
    </>
  )
}

export default ItemTable;