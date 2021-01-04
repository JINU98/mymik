import React from 'react'
import Background from '../MIMYK LOGO_2019 - white version 2.png';

import { Icon, InlineIcon } from '@iconify/react';
import baselineArrowBackIosNew from '@iconify/icons-ic/baseline-arrow-back-ios-new';
import searchCircle from '@iconify/icons-heroicons-outline/search-circle';
import addOutline from '@iconify/icons-gridicons/add-outline';
import progressUpload from '@iconify/icons-mdi/progress-upload';
import infoCircle from '@iconify/icons-bi/info-circle';
import userAvatarFilledAlt from '@iconify/icons-carbon/user-avatar-filled-alt';


function Navbar() {

   
    return (
<div>          
<nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#1D99D6",height:"40px" }}>
  <button  style={{ backgroundColor:'rgba(0,0,0,0)',border:"none" }}>
<Icon icon={baselineArrowBackIosNew} style={{color: '#ffffff', fontSize: '24px',cursor:"pointer"}} /></button>
  <a style={{ margin:"0 0 6px 2%" }} className="navbar-brand" href="#"><img src={Background} height="30px" alt=""></img></a>
  <div  id="navbarSupportedContent">
    <ul style={{ marginLeft:"270%" }}className="navbar-nav mr-auto">
      <li className="nav-item active" >
        <a className="nav-link" href="#"><Icon icon={searchCircle} style={{color: '#ffffff', fontSize: '32px' }} /></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Icon icon={addOutline} style={{color: '#ffffff', fontSize: '32px',marginLeft:"20px" }} /></a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="#"><Icon icon={progressUpload} style={{color: '#ffffff', fontSize: '32px',marginLeft:"20px"}} /></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Icon icon={infoCircle} style={{color: '#ffffff', fontSize: '28px',marginLeft:"20px"}} /></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Icon icon={userAvatarFilledAlt} style={{color: '#ffffff', fontSize: '32px',marginLeft:"20px"}} /></a>
      </li>
    </ul>
    
  </div>
</nav>

 </div>
    )
}

export default Navbar

