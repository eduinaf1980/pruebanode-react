import React, { useState } from 'react';
import { Row, Col, Modal, Table, Card, CardBody, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import pdf from '../../assets/images/pdf.png';
import send from '../../assets/images/send.jpeg';
import DocPdf from '../pdf/DocPdf';
import { PDFDownloadLink } from "@react-pdf/renderer"
import { InputTable } from './ComponentTable';
import FileComponent from './FileComponent';
import API from '../../api';


export const ComponentActions = (props) => {

  const [modal, setModal] = useState(false)
  const [messageError, setMessageError] = useState("")
  const [email, setEmail] = useState("")
  const [messageEmail, setMessageEmail] = useState("")

  const [file, setFile] = useState({})
  const [listName, setListName] = useState([])
  const [deleteFile, setDeleteFile] = useState(false)
  const [fileId, setFileId] = useState('')


  const submit = async () => {
    const response = await API.Email.addFile({
      fil: file,
      mail: email
    })
    if (response.ok) {
      alert(response.message)
      close()
    }
  }

  const close = async () => {
    setModal(false)
    setEmail("")
    setFile({})
  }


  return (
    <>
      <Modal
        size="ml"
        isOpen={modal}
        scrollable={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">
            Formulario Envio Pdf
          </h5>
          <button
            type="button"
            onClick={() =>
              close()
            }
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Card>
            <CardBody>
              <Row className='align-items-center'>
                <Col lg='12'>
                  {messageError && (
                    <div className="alert alert-danger" role="alert">{messageError}</div>
                  )}
                  <Form>
                    <InputTable
                      messageInvalid={messageEmail}
                      title='Email'
                      type='text'
                      placeholder='Ingrese un email'
                      onChange={(event) => {
                        setEmail(event.target.value)
                        setMessageEmail('')
                      }}
                      value={email}
                    />
                  </Form>
                </Col>
              </Row>
              <Row className='mt-12'>
                <FileComponent
                  listName={listName}
                  setFile={setFile}
                  file={file}
                  saveFile={() => { submit() }}
                  setDeleteFile={setDeleteFile}
                  setFileId={setFileId}
                />
              </Row>
            </CardBody>
          </Card>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <Row className='align-items-center'>
        <Col md={4}>
          <span className='h4 mr-4'>
            {props.title}
          </span>
          <Link
            className='btn btn-success waves-effect waves-light btn-rounded w-btn'
            to={props.to}
            role='button'
          >
            Añadir
          </Link>
        </Col>
        {(props.pdf === 'true') &&
          <Col md={7}>
            <div className="d-flex justify-content-end">
              <PDFDownloadLink
                document={<DocPdf />}
                fileName="items.pdf"
              >
                <button
                //onClick={() => generateItemsPdf()}
                >
                  <img
                    src={pdf}
                    alt=""
                    className="img-fluid d-block"
                    width={50}
                    height={50}
                  />
                </button>
              </PDFDownloadLink>
            </div>
          </Col>
        }
        {(props.pdf === 'true') &&
          <Col md={1}>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => setModal(true)}
              >
                <img
                  src={send}
                  alt=""
                  className="img-fluid d-block"
                  width={50}
                  height={50}
                />
              </button>
            </div>
          </Col>
        }
      </Row>
      <hr className={`mb-5 lw ${props.color || 'text-primary'}`} />
    </>
  )
}
