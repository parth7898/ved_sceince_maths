import React from 'react'
import Book from './Book'

import {Link} from "react-router-dom";
import Feed from './Feed';
export default function Header() {

	return (
		<>
			
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
								<Link class="nav-link" Link to="/car">Courses</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" Link to="/signup">Contact</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" Link to="/netflix">About Us</Link>
							</li>
						</ul>
					</div>
				</nav>

		</>
	)
}
