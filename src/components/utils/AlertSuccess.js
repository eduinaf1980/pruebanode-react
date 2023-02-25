import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetMessageSuccessAlert } from "../../redux/reducers/alerts/actions";

const AlertSuccess = () => {
  const dispatch = useDispatch()
  const messageSuccessAlert = useSelector(({ parametrization }) => parametrization.messageSuccessAlert)
 
  const setMessageSuccessAlert = (messageSuccessAlert) => {
    dispatch(actionSetMessageSuccessAlert(messageSuccessAlert))
  }

  useEffect(() => {
    setTimeout(() => {
      setMessageSuccessAlert('')
    }, 3000);
  }, [messageSuccessAlert])
  
  return (
    <>
      {messageSuccessAlert && (
        <div className="alert alert-success" role="alert">
          {messageSuccessAlert}
        </div>
      )}
    </>
  );
};

export default AlertSuccess;
