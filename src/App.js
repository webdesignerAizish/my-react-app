import React from 'react'

import './App.css';
import Heading from './component/Heading';
import Input from './component/Input';

function App() {

  return (
    <>
      <div>
        <div className='image'></div>
        <div className="container">

          <Heading title={"To-do List"}></Heading>
          <div className="to-do">

            <Input></Input>

          </div>
        </div>
      </div >

    </>
  )
}

export default App;
