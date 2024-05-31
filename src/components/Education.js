import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section id="Education" className="mx-5 pt-5">
      <h1 id="title" className="pt-5">Education & Trainings</h1>
      <div className="container-fluid row pt-5 text-center">
        <div className="col-md-5 left">
          <div className="ebox">
            <p>
              <b>Bachelor of Technology in CSE-IoT</b><br />
              Aditya College of Engineering, Surampalem<br />
              Year: 2024<br />
              CGPA: 7.3 (As of Now)
            </p>
          </div>
          <div className="ebox">
            <p>
              <b>Secondary School</b><br />
              Satya Bhama English Medium Shool, Anaparthi<br />
              Year: 2018<br />
              CGPA: 9.7
            </p>
          </div>
        </div>
        <div className="col-md-2 parent justify-content-center">
          <div className="bar"></div>
        </div>
        <div className="col-md-5 right">
          <div className="ebox">
            <p>
              <b>Intermediate (M.P.C)</b><br />
              M.N.R Jr College, Anaparthi<br />
              Year: 2020<br />
              CGPA: 9.42
            </p>
          </div>
          <div className="ebox text-align-justify">
            <p>
              <b>Software Development-Intern</b><br />
              Technical Hub<br />
              Worked on Various Technologies related to Fullstack Development. Participated in several coding competitions and earned Merit Certification in competative programming.<br />
              Duration: Jul 2022-Nov-2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
