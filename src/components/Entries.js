import React from 'react'
import Vector from '../Vector.png'

function Entries({id,consultant,details,name, age, gender, phone,refferedby, date,time,clicked,setclicked}) {

  function entry(){
    if (clicked=='1'){
      clicked='0';
      return (
      <>
        <span className ="day">{date}</span>
    <tr>
      <td><img style={{ marginRight:"10px"}} src={Vector} height="10px" alt="" />{id}</td>
      <td>{name}{clicked} <br/> {gender} {age}</td>
      <td>{details}</td>
      <td>{consultant}</td>
      <td>{refferedby}</td>
      <td style = {{ color: "#1d99d6" }}>{time}</td>
    </tr>

      </>
    );
    }
  }

    return (
        <div style={{ marginTop:"8%",width:"90%",marginLeft:"6%" }}>
            <table className="table table-borderless" style = {{ backgroundColor: "rgba(0,0,0,0)"  }}>
  <thead>
    <tr style={{ borderBottom: "1px solid black" }}>
      <th scope="col"><img style={{ marginRight:"10px"}} src={Vector} height="10px" alt="" /> Patient ID</th>
      <th scope="col">Patient details</th>
      <th scope="col">Procedure details</th>
      <th scope="col">Consultant</th>
      <th scope="col">Referred by</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
      {entry()}
      {/* <span className ="day">{date}</span>
    <tr>
      <td><img style={{ marginRight:"10px"}} src={Vector} height="10px" alt="" />{id}</td>
      <td>{name} <br/> {gender} {age}</td>
      <td>{details}</td>
      <td>{consultant}</td>
      <td>{refferedby}</td>
      <td style = {{ color: "#1d99d6" }}>{time}</td>
    </tr> */}

  </tbody>

</table>
        </div>
    )
}

export default Entries
