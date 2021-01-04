import React,{useRef} from 'react'
const z={
    zIndex:"20",
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

        const text1={
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '23px',
            letterSpacing: '0.1em',
            color: '#000000',
            }
            const adjust={
            margin:"100px 0 0 100px",
            }

            const dt ={
                fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "12px",
              lineHeight: "23px",
              letterSpacing: "0.1em",
              color: "#1D99D6",
              border:"none",

            }
            const ins={
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "12px",
              lineHeight: "23px",
              letterSpacing: "0.1em",
              color: "#000000",
              border:"none",
            //   display:"inline-block"
            //   borderRadius:"10px"
              }

              const cancel={
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "12px",
                letterSpacing: "0.1em",
                fontVariant: "small-caps",
                color: "black",
                border:"1px solid rgba(0,0,0,0.5)",
                borderRadius:"5px",
                padding:"0 20px 2px 20px",
                backgroundColor:"white",
                color:"rgba(0,0,0,0.5)",
                // border:"1px solid black",
                // height:"30px"
                    }
                const save={
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    fontVariant: "small-caps",
                    color: "black",
                    border:"1px solid #1D99D6",
                    borderRadius:"5px",
                    padding:"0 20px 2px 20px",
                    backgroundColor:"#1D99D6",
                    color:"white"
                }

function NewAppointment( { setid ,setconsultant ,setdetails ,setname, setage ,setgender ,setphone, setrefferedby, setdate ,settime,setclicked,change} ) {

    const id=useRef(null);
    const consultant=useRef(null);
    const details=useRef(null);
    const name=useRef(null);
    const age=useRef(null);
    const gender=useRef(null);
    const phone=useRef(null);
    const refferedby=useRef(null);
    const date=useRef(null);
    const time=useRef(null);

    const onCancel=()=>{
        change.current.style.zIndex="101";
    }
    const onSave = () =>{
        setid(id.current.value);
        setconsultant(consultant.current.value);
        setdetails(details.current.value);
        setname(name.current.value);
        setage(age.current.value);
        setgender(gender.current.value);
        setphone(phone.current.value);
        setrefferedby(refferedby.current.value);
        setdate(date.current.value);
        settime(time.current.value);

        id.current.value=('');
        consultant.current.value=('');
        details.current.value=('');
        name.current.value=('');
        age.current.value=('');
        gender.current.value=('');
        phone.current.value=('');
        refferedby.current.value=('');
        date.current.value=('');
        time.current.value=('');
        setclicked(1); 

        change.current.style.zIndex="101";
        
    };

    return (
        <div className="rectangle" style={z}>
            <span style={text}>Appointments<span style={{ fontSize:"20px" }}>>>New Apponitement</span></span>

            <div className="row">
                <div style={adjust}>
                    <div style={text1}>Patient ID</div>
                    <input ref={id} style={ins} type="text" />
                </div>
                <div style={adjust}>
                    <div style={text1}>Consultant</div>
                    <input ref={consultant} style={ins} type="text" />
                </div>
                <div style={adjust}>
                    <div style={text1}>Procedure details</div>
                    <input ref={details} style={ins} type="text" />
                </div>
            </div>

            <div className="row">
                <div style={{ margin:"50px 0 20px 100px"}}>
                    <div style={text1}>Patient details</div>
                    <div>
                    <span style={text1}>Name</span>
                    <span style={{ marginLeft:"30px" }}></span>
                    <input ref={name} style={ins} type="text" />
                    </div>
                    <div>
                    <span style={text1}>Age</span>
                    <span style={{ marginLeft:"40px" }}></span>
                    <input ref={age} style={ins} type="text" />
                    </div>
                    <div>
                    <span style={text1}>Gender</span>
                    <span style={{ marginLeft:"20px" }}></span>
                    <input ref={gender} style={ins} type="text" />
                    </div>
                    <div>
                    <span style={text1}>Phone</span>
                    <span style={{ marginLeft:"25px" }}></span>
                    <input ref={phone} style={ins} type="text" />
                    </div>
                </div>
                <div style={{ margin:"50px 0 0 30px" }}>
                    <div style={text1}>Refferd By</div>
                    <input ref={refferedby} style={ins} type="text" />
                </div>
            </div>

            <div style= {{ margin:"40px 0 0 80px" }}>
            <div style={text1}>Appointement schedule</div>
            <span style={text1}>Date</span>
            <span style={{ marginLeft:"25px" }}></span>
            <input ref={date} style={dt} type="date" />
            <span style={{ marginLeft:"25px" }}></span>
            <span style={text1}>Time</span>
            <span style={{ marginLeft:"25px" }}></span>
            <input ref={time} style={dt} type="time" />

            </div>
            <div style={{ margin:"20px 0 0 400px" }}>
                <button onClick={onCancel} style={ cancel }>cancel</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button  style={ save } onClick={onSave}>save</button>
            </div>
        </div>
    )
}

export default NewAppointment
