import React, { useState } from 'react';
import { Button, Col, } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";

const ModalAlert = (props) => {
  const [successDlg, setSuccessDlg] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState(false);
  const [dynamicDescription, setDynamicDescription] = useState(false);
  const [errorDlg, setErrorDlg] = useState(false)
  return (
    <>
      {successDlg ? (
        <SweetAlert
          success
          title={dynamicTitle}
          onConfirm={() => setSuccessDlg(false)}
        >
          {dynamicDescription}
        </SweetAlert>
      ) : null}

      {errorDlg ? (
        <SweetAlert
          error
          title={dynamicTitle}
          onConfirm={() => {
            setErrorDlg(false)
          }}
        >
          {dynamicDescription}
        </SweetAlert>
      ) : null}
      <Col xl="3" lg="4" sm="6" className="m-b-30">
        {props.confirmBoth ? (
          <SweetAlert
            title={props.title}
            warning
            showCancel
            cancelBtnText='Cancelar'
            confirmBtnText='Continuar'
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => {
              props.delete()
              props.setConfirmBoth(false)
              setSuccessDlg(true)
              setDynamicTitle('Cerrado')
              setDynamicDescription(props.successTitle || 'El registro ha sido eliminado.')             
            }}
            onCancel={() => {
              props.setConfirmBoth(false)
              setErrorDlg(true)
              setDynamicTitle('Cancelado')
              setDynamicDescription('El registro no se ha eliminado.')
            }}
          >
          </SweetAlert>
        ) : null}
      </Col>
    </>

  )
}

export default ModalAlert