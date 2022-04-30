import React from 'react'
import './header.css'
import './home_content.css'
import { Link } from "react-router-dom";
import Home_Content from './Home_Content';
import { useState } from 'react';
export default function Header() {
	var a = window.location.href
	const [count, setCounter] = useState(a)
	console.log(count)

	return (
		<>

			<div className='banner'>
				<div className='container'>
					<nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
						<a class="navbar-brand" href="#">Veds</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<Link className="nav-link" Link to="/">Home <span class="sr-only">(current)</span></Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" Link to="/book">Book</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" Link to="/feed">Feeds</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" Link to="/courses">Courses</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" Link to="/contact">Contact</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" Link to="/about">About Us</Link>
								</li>
							</ul>
						</div>
					</nav>
					<div className='head_content'>
					<Home_Content/>
					</div>
					
				</div>
			</div>
		</>
	)
}
