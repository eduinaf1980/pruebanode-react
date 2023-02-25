import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row } from 'reactstrap';

const ActionsComponent = (props) => {
  let navigate = useNavigate()


  return (
    <>
      <td className='text-right'>
        <Button
          onClick={() => navigate(props.toUpdated)}
          color="success"
          className="mr-1 waves-effect waves-light btn-sm w-btn"
        >
          Update
        </Button>
        {props.showActivate && (
            <Button
              onClick={() => props.onClick()}
              color="danger"
              className="mr-1 waves-effect waves-light btn-sm w-btn"
              >
              Delete
            </Button>
        )}
      </td>
    </>
  )
}

export default ActionsComponent;