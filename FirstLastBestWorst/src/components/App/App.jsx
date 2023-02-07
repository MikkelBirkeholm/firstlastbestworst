import React from 'react'
import './App.css'
import AddRow from '../AddRow/AddRow'

export default function App() {
  return (
    <div className="app">
      <h1>FIRST LAST BEST WORST</h1>
      <div className="explainer">
        <span>Anectdote</span>
        <span>Story</span>
      </div>
      <div className="row-wrapper">
        <AddRow />
      </div>
    </div>
  )
}
