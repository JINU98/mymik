import React  from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import addOutline from '@iconify/icons-gridicons/add-outline';
import Entries from './Entries';


const z={
    zIndex:"101"
}
const text={
   
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    lineHeight: "42px",
    letterSpacing: "0.1em",
    color: "#000000",
    position: "absolute",
    top:"30px",
    left:"60px"
        }

        const neww={
    position: "absolute",
    fontFamily: "Roboto",
    // margin:"0 0 0 0",
    top:"30px",
    left:"800px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    // lineHeight: "18px",
    // textAlign: "center",    
    letterSpacing: "0.1em",
    fontVariant: "small-caps",
    color: "#FFFFFF",
    backgroundColor:"#1D99D6"
        }

function Appointments( {id,consultant,details,name, age, gender, phone,refferedby, date, time,clicked,setclicked,change} ) {


    const changePage = () =>{
        // alert('clicked')
        change.current.style.zIndex="10";
    }

    return (
        <div className="rectangle" ref={change} style={z}>

                <span style={text}>Appiontments</span>
                <button onClick={changePage} className="btn" style={neww}> 
                <Icon icon={addOutline}  style={{color: '#ffffff', fontSize: '18px',marginRight:"10px"}} />new appoitement 
                </button>
                <Entries id={id} consultant={consultant} details={details} name={name} age={age} gender={gender} phone={phone} refferedby={refferedby} date={date} time={time} clicked={clicked} setclicked={setclicked}></Entries>

        </div>
    )
}

export default Appointments
