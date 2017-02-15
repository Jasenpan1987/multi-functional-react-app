import React from 'react';
import { Link } from 'react-router'

const App = ({ children }) => {
  return (
     <div>
      <header>
        Links:
        {' '}
        <Link to="examples">Examples</Link>
        {' '}
        <Link to="todos">Todos</Link>
        {' '}
        <Link to="youtube">Youtube</Link>
      </header>
      {/*<div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>*/}
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

export default App;
