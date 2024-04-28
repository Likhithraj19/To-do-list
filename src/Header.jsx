import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header( {title,onAdd,showAdd} ) {

  return (
    <div>
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
        </div>
  )
}

Header.defaultProps = {
    title:'Task tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

const headingStyle = {
    color:'red',backgroundColor:'black'
}

export default Header