import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import { useState } from 'react';

import './global.scss'


function App() {
  return (
    <>
      <Header />
      <NewTask />
    </>
  )
}

export default App
