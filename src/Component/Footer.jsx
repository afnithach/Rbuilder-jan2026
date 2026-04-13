import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (

      <div style={{height:"400px" ,backgroundColor:"#653c25.",}} className='d-flex justify-content-center align-item-center flex-column text-light'>
<h1>Contact US</h1>
<h3><MdAttachEmail/>resumebuilder@gmail.com</h3>
<h4><FaPhoneAlt/>9652146325</h4>
<h2>contact with US</h2>
<div className="my-5 fs-4">
<FaWhatsapp/>
<FaFacebook className='mx-2'/>
<FaInstagram/>
</div>
<h4>Designed & Buid with using React</h4>
      </div>
     
  );
}




export default Footer;