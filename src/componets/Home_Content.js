import React from 'react'

export default function Home_Content() {
	function location() {
		alert(window.location.href)
	}
  return (
    <>
		<div class="head_content">
					<h3>Register now to become a </h3>
					<h3 >member of Ved Science & Maths</h3>
					<button className='btn btn-primary'onClick={location}>Register/Login</button>
					</div>
		</>
  )
}
