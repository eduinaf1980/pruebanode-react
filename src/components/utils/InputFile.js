import React, { useEffect } from 'react';
import { Button, Col, Label, Row } from 'reactstrap';
import FileBase64 from 'react-file-base64';
import './InputFile.css';

const InputFile = (props) => {

  useEffect(() => {
    const query = document.querySelector('input[type="file"]');
    query.id = "file-3"
  }, [])

  const getFiles = (file) => {
    props.setFile({
      'name_file': file.name,
      'base64': file.base64
    })
  }

  let file_name = 'Seleccione un archivo'
  if (props.file && props.file.name_file) {
    file_name = props.file.name_file
  }
  return (
    <Row>
      <Col md={8} className='align-self-center'>
        <Label>{props.title}</Label>
        <div className='container-input'>
          <FileBase64 onDone={getFiles} />
          <label htmlFor='file-3'>
            <svg xmlns='http://www.w3.org/2000/svg' className='iborrainputfile' width='20' height='17' viewBox='0 0 20 17'>
              <path d='M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z'></path>
            </svg>
            <span className='iborrainputfile'>
              {file_name}
            </span>
          </label>
        </div>
      </Col>
      <Col md={4} className='align-self-center'>
        <Button
          color='success'
          className='btn-sm waves-effect waves-ligh w-btn'
          onClick={props.saveFile}
        >
          Subir
        </Button>
      </Col>
    </Row>
  )
}

export default InputFile;