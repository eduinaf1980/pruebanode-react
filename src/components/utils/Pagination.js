import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const PaginationComponent = (props) => {
  return (
    <> 
      <nav aria-label='Page navigation example'>
        <Pagination>
          <PaginationItem>
            <PaginationLink
              aria-label='Previous'
              onClick={() => props.back()}
            >
              <i className='mdi mdi-arrow-left-thick' />
              <span className='sr-only'>Previous</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>
              {props.page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              aria-label='Next'
              onClick={() => props.next()}
            >
              <i className='mdi mdi-arrow-right-thick' />
              <span className='sr-only'>Next</span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  )
}
export default PaginationComponent