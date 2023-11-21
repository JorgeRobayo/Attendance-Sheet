import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'
import { useState } from 'react';

function App() {
  const inputRef = useRef(null)

  const [currentWorker, setCurrentWorker] = useState('')


  //==============={ARRAY OF EMPLPLOYEES}

  const employees = [
    { name: 'Eduardo', workingHours: '35h', lateness: '2h' },
    { name: 'Alvaro', workingHours: '10h', lateness: '20m' },
    { name: 'Andrea', workingHours: '40h', lateness: '2m' },
    { name: 'Juan', workingHours: '80h', lateness: '25m' },
    { name: 'Robert', workingHours: '100h', lateness: '7m' },
    { name: 'Sabrina', workingHours: '25h', lateness: '8m' },
    { name: 'Sara', workingHours: '50h', lateness: '14m' },
  ]

  let handleChange = () => {
    let content = inputRef.current.value
    setCurrentWorker(content)
    // console.log(content)
  }

  //========={MAPPING}
//n as name
  const filteredWorkers = employees.filter((employee) => employee.name.toLowerCase() === 
  currentWorker.toLowerCase()).map((employee, n) => (
    <div className='empResults' key={n}>
      <div>
        <h3>Name: {employee.name}</h3>
        <h3>Working Hours: {employee.workingHours}</h3>
        <h3>Lateness: {employee.lateness}</h3>
      </div>
    </div>
  ))




  return (
    <div className="App">
      <h1>Attendance Sheet</h1>

      <div>
        
        <input type='text' ref={inputRef}></input>
        <button onClick={handleChange}>Check Attendance</button>
        <h3>Your input: {currentWorker}</h3>

        {filteredWorkers.length > 0 ? (
          filteredWorkers
        ):(
          <p>No workers selected, please input a name</p>
        )}
        
      </div>
    </div>
  );
}

export default App;
