import React from 'react'
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from 'react-redux';
import { actionSetMessageSuccess } from '../../redux/reducers/alerts/actions'


const AlertComponent = () => {
  const dispatch = useDispatch()
  const messageSuccess = useSelector(({ parametrization }) => parametrization.messageSuccess)
 
  const setMessageSuccess = (messageSuccess) => {
    dispatch(actionSetMessageSuccess(messageSuccess))
  }

  return (
    <>
    {messageSuccess && (
        <SweetAlert
          success
          title='Exitoso'
          onConfirm={() => setMessageSuccess('')}
        >
          {messageSuccess}
        </SweetAlert>
      )}  
    </>
  )
}
export default AlertComponent; 