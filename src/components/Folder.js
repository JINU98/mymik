import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import reportIcon from '@iconify/icons-whh/report';
import bookmarkIcon from '@iconify/icons-fa/bookmark';
import binIcon from '@iconify/icons-icomoon-free/bin';
import appointmentsSolid from '@iconify-icons/teenyicons/appointments-solid';

function Folder() {
    return (
        <div className="folder">
            
            <div className="alignBox">
            <div style={{ margin:"0 0 0 30px" }}>
            <div style={{ paddingTop:"10px" }}></div>
            <Icon icon={appointmentsSolid} style={{color: '#1D99D6', fontSize: '20px',marginRight:"25px",marginTop:"-5px"}} />
            <span className="fold" style={{ color:"#1D99D6"}}>Appointements</span>
            </div>
            </div>

            <div style={{ margin:"45px 10px 10px 30px" }}>
            <Icon icon={reportIcon} style={{color: '#ffffff', fontSize: '20px',marginRight:"26px",marginTop:"-5px"}} />
            <span className="fold" >Reports</span>
            </div>

            <div style={{ margin:"55px 10px 10px 30px" }}>
            <Icon icon={bookmarkIcon} style={{color: '#ffffff', fontSize: '20px',marginRight:"27px",marginTop:"-5px"}} />
            <span className="fold">Bookmarks</span>

            </div>
            <div style={{ margin:"55px 10px 10px 30px" }}>
            <Icon icon={binIcon} style={{color: '#ffffff', fontSize: '20px',marginRight:"25px",marginTop:"-5px"}} />
            <span className="fold">Bin</span>

            </div>
        </div>
    )
}
 
export default Folder
