import React from 'react'
import style from './index.css'

import Header from '../Header'

const App = ({
  app,
  actions,
  children,

  user,
  form,
}) => {
  return (
    <div className={style.root}>
      <Header {...{
        app,
        actions,
        user,
        form,
      }} />
      <h1></h1>
      {children}
    </div>
  )
}

export default App
