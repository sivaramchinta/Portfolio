import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <section id="Skills" className="mx-5 pt-5">
        <h1 id="title" className='pt-5'>My Skills</h1>
        <p>I excel in frontend development, problem solving, data structures and algorithms, and AWS. These skills reflect my technical proficiency, creative problem-solving abilities, and expertise in cloud computing. I am well-equipped to deliver high-quality solutions in my field.</p>
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <div className="box">
                    <h4 id="list-item-1">Programming Languages</h4>
                         
                    <ul>
                        <li>C++ <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"80%"}} >80%</div></div>
                        </li>
                        <li>Python <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>Java <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h4 id="list-item-2">Frontend Web Development</h4>
                    
                    <ul>
                        <li>HTML <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"80%"}} >80%</div></div>
                        </li>
                        <li>CSS <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>JavaScript <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"70%"}} >70%</div></div>
                        </li>
                        <li>Bootstrap <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>React <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"65%"}} >65%</div></div>
                        </li>
                        <li>JQuery <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-2"></div>
            <div className="col-md-4">
                <div className="box">
                    <h4 id="list-item-3">Backend  Web Development</h4>
                    
                    <ul>
                        <li>Node <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"70%"}} >70%</div></div>
                        </li>
                        <li>Express <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                        <li>MYSQL <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"80%"}} >80%</div></div>
                        </li>
                        <li>MongoDB <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"50%"}} >50%</div></div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h4 id="list-item-4">Other Tools</h4>
                    
                    <ul>
                        <li>Git & GitHub<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"75%"}} >75%</div></div>
                        </li>
                        <li>Figma<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"60%"}} >60%</div></div>
                        </li>
                        <li>VS Code<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"70%"}} >70%</div></div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h4 id="list-item-5">Soft Skills</h4>
                    
                    <ul>
                        <li>Communication<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"85%"}} >85%</div></div>
                        </li>
                        <li>Team Work<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"80%"}} >80%</div></div>
                        </li>
                        <li>Self Motivation<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width:"100%"}} >100%</div></div>
                        </li>
                    </ul>
                </div>                   
                    
            </div>
        </div>
        </div>
    </section>
  )
}
