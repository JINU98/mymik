import React, {useRef, useState } from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Folder from './components/Folder';
import Navbar from './components/Navbar';
import NewAppointment from './components/NewAppointment';





function App() {

const change=useRef(null); 

const [id,setid]=useState('');
const [consultant,setconsultant]=useState('');
const [details,setdetails]=useState('');
const [name,setname]=useState('');
const [age,setage]=useState('');
const [gender,setgender]=useState('');
const [phone,setphone]=useState('');
const [refferedby,setrefferedby]=useState('');
const [date,setdate]=useState('');
const [time,settime]=useState('');
const [clicked,setclicked]=useState(null);

  return (
    <div>
      <Navbar></Navbar>
      <Folder></Folder>
      <NewAppointment setid={setid} setconsultant={setconsultant} setdetails={setdetails} setname={setname} setage={setage} setgender={setgender} setphone={setphone} setrefferedby={setrefferedby} setdate={setdate} settime={settime} setclicked={setclicked} change={change}></NewAppointment>
      <Appointments id={id} consultant={consultant} details={details} name={name} age={age} gender={gender} phone={phone} refferedby={refferedby} date={date} time={time} clicked={clicked} setclicked={setclicked} change={change}></Appointments>
    </div>
  );
}

export default App;
