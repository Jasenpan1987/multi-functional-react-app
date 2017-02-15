import React from 'react';
import { Link } from 'react-router'

const Examples = ({ children }) => {
  return (
     <div>
      <header>
        Links:
        {' '}
        <Link to="/examples/counter">Counter</Link>
        {' '}
        <Link to="/examples/sum">Sum</Link>
        {' '}
        <Link to="/examples/imgur">Imgur</Link>
      </header>
      
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

export default Examples;