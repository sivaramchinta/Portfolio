import React from 'react'
import './Coding.css'
import gfg from '../assets/gfg.jpeg'
import lc from '../assets/lc.png'
import hr from '../assets/hr.png'
export default function Coding() {
  return (
    <section id="Coding" className="pt-5 mx-5">
        <h1 id="title" className='pt-5'>My coding Profiles</h1>
        <p>Every day, I dive into the world of code, practicing and honing my skills on various coding platforms. It's not just a hobby; it's my passion, and it's what drives me to continuously improve.</p>
        <div className=" container-fluid row  card-row mx-1 mt-5">
      <div className="col-md-4 col-lg-3 mt-4 text-center cards">
      <img src={gfg} alt="GFG" className="profile-img" />
        <h4 className="fw-normal mt-4"><b>Geeks For Geeks</b></h4>
        <p className="text-center">• Solved <b>400+</b>problems<br/>• Overal Coding score 1100+</p>
        <div className="d-flex justify-content-center"><p><a className="btn btn-primary" href="https://www.geeksforgeeks.org/user/sivaramchinta/">Check Profile »</a></p></div>
      </div>
      <div className="col-md-4 col-lg-3 mt-4 text-center cards">
      <img src={hr} alt="Hacker Rank" className="profile-img" />
        <h4 className="fw-normal mt-4"><b>Hacker Rank</b></h4>
        <p className="text-center">• Problem Solving <b>6 stars</b><br />• <b>5 stars</b> in C, C++, PYTHON, JAVA, and SQL</p>
        <div className="d-flex justify-content-center"><p><a className="btn btn-primary" href="https://www.hackerrank.com/profile/sivaramch_0922">Check Profile »</a></p></div>
      </div>
      <div className="col-md-4 col-lg-3 mt-4 text-center cards">
      <img src={lc} alt="Leet Code" className="profile-img" />
        <h4 className="fw-normal mt-4"><b>Leet Code</b></h4>
        <p className="text-center">• Solved <b>200+</b> problems<br/>• 50 Days Badge 2022</p>
        <div className="d-flex justify-content-center"><p><a className="btn btn-primary" href="https://leetcode.com/u/SivaramChinta/">Check Profile »</a></p></div>
      </div>
    </div>
    </section>
  )
}
