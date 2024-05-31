import React from 'react'
import './Projects.css'
import snake from '../assets/snake_and _ladder.png'
import ansible from '../assets/memorygame.png'
import portfolio from '../assets/sudoku.png'

export default function Projects() {
  function openp1(){ window.open("https://sivaramchinta.github.io/SnakeandLadder/");}
  function openp2(){ window.open("https://sivaramchinta.github.io/memorygame/");}
  function openp3(){ window.open("https://sivaramchinta.github.io/sudoku_solver/");}
  return (
    <section id="Projects" className="mx-5 pt-5">
        <h1 id="title" className='pt-5'>My Projects</h1>
        <p>Driven by my passion for programming and software development, I am highly motivated to create mobile applications and websites that solve various problems encountered in everyday life, or to automate routine tasks. This strong drive to innovate and find creative solutions to everyday challenges has led me to pursue opportunities to develop practical solutions that make a tangible difference. Whether it's an app that simplifies a daily task, or a website that provides convenient access to important information, my aim is to create software that is both useful and user-friendly.</p>
        <div className=" container-fluid row  card-row mx-1 mt-3">
            

            <div className="card col-md-5 col-lg-3" onClick={openp1}>
            <img src={snake} className="card-img-top" alt="Snake & Ladder" />
            <div className="card-body">
            <h4 className="title">Snake and Ladder Game</h4>
            <p className="card-text">Designed a fully responsive & attractive web application for classical Snake and Ladder game. Developed and established the fundamental game mechanics, including player movement, snakes and ladders placement, 
and the winning criteria.</p>
            </div></div>

            <div className="card col-md-5 col-lg-3" onClick={openp2}>
            <img src={ansible} className="card-img-top" alt="Ansible" />
            <div className="card-body">
            <h4 className="title">Memory Game</h4>
            <p className="card-text">Developed dynamic game patterns, user interactions, and sound effects, showcasing attention to detail and problem-solving skills.</p>
            </div></div>

            <div className="card col-md-5 col-lg-3" onClick={openp3}>
            <img src={portfolio} className="card-img-top" alt="snake & Lader" />
            <div className="card-body">
            <h4 className="title">Sudoku Solver </h4>
            <p className="card-text">Developed a Sudoku Solver using Backtracking Algorithm, which allows the user to input numbers and the Algorithm solves it. </p>
            </div></div>      
        </div>
    </section>
  )
}
