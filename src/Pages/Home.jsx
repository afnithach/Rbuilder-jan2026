import React from 'react'

function Home() {
  return (
   <>
   {/* landing */}
   <div style={{height:'100vh',backgroundImage:'url("/meeting.png")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}
   className='d-flex justify-content-center align-item-center'> 
<div className='row container-fluid'>
  <div className='col-lg-4 rounded shadow p-5 text-center text-light ' style={{backgroundColor:rgba(156,127,110,0.5)}}>
    <h3>Designed to got hired.Your skills,Your Story,Your next-job-all in one.</h3>
    <Link to={'/steps'} className="btn btn-light" style={{backgroundColor:"#8b978a"}}>MAke Your Resume</Link>
  </div>
    <div className='col-lg-4'></div>

</div>
   </div>
{/* tools */}
{/* image */}
{/* testimony */}

   
   </>
  )
}

export default Home