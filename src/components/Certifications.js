import React from 'react'
import './Certifications.css'

export default function Certifications() {
  return (
    <section id="Certifications" className="mx-5 pt-5">
        <h1 id="title" className='pt-5'>My Certifications</h1>
        <p>I hold valuable certifications that demonstrates my dedication to continuous learning and professional growth. This certifications equipped me with a strong foundation in relevant skills and knowledge, which enhances my capabilities in my chosen field. It reflects my commitment to staying updated and competent in a rapidly evolving industry.</p>
        <div className="container-fluid crd row mt-1">
        <div className="col-md-3 mycard" onClick={()=>window.open("https://drive.google.com/file/d/1SBBAELNut-QskR0yOYiAST6rE86vdD2t/view?usp=drivesdk")}>
          <h4 className="coll">OWL CODER Admiration</h4>
          <p>Achieved Level-5 Badge in the OWL CODER Program Conducted by Our College</p>
        </div>
        <div className="col-md-3 mycard" onClick={()=>window.open("https://drive.google.com/file/d/1qoqZ-rIxUABPtqHAeWPF25Rd07muF1VQ/view?usp=sharing")} >
          <h4 className="coll">RedHat</h4>
          <p>RHCSA: Red Hat Certified System Administrator</p>
          <p>Certified by RedHat</p>
        </div>
        </div>
    </section>
  );
}
