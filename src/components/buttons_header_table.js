import React from 'react';
import { Container } from 'reactstrap';

const ButtonsHeaderTable = ({
    toAdd,
    isActive,
}) => {
  return (
    <Container className='mb-2'>
      <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
        <button
          className={`btn btn-success me-md-2 m-2 ${isActive && 'd-none' }`}
          type='button'
          onClick={toAdd}
        >
          Añadir
        </button>
        <button className='btn btn-info m-2' type='button'>
          Reporte general
        </button>
      </div>
    </Container >
  )
}

export default ButtonsHeaderTable;