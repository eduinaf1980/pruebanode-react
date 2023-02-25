import React from 'react';

const SearchComponent = (props) => {
  return (
    <form className='app-search' onSubmit={(event) =>{
      event.preventDefault()
      props.submitKey()
    }}>
      <div className='position-relative'>
        <input
          type='text'
          className='form-control'
          placeholder='Buscar'
          onChange={props.onChange}
          value={props.value}
        />
        <span className='bx bx-search-alt ' />
      </div>
    </form>
  )
}

export default SearchComponent;