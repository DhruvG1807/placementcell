import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Anavbar() {
  const handleClick=async ()=>{
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/logout`,
        {
          method: "DELETE",
          credentials: "include",
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        alert("Logged out successfully!");
      } else {
        console.log("fetching unsuccessful");
      }
    } catch (error) {
      console.log("error fetching company", error);
    }
  }
  return (
<div>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
{/* <Link className="navbar-brand" to="/home">
    <img src="../../jaypee.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
    JIIT
  </Link> */}
<div className="container-fluid">
<Link className="navbar-brand" to="/home">JIIT</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
</li>
<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
<li className="nav-item"><Link className="nav-link" to="/addstudent">Add Student</Link></li>
<li className="nav-item"><Link className="nav-link" to="/addcompany">Add Company</Link></li>
<li className="nav-item"><Link className="nav-link" to="/ablog">Add Blog</Link></li>
<li className="nav-item"><Link className="nav-link" to="/vblog">View Blogs</Link></li>
<li className="nav-item" id="logout"><Link className="nav-link" to="/logout"><button onClick={handleClick} type="button" class="btn btn-outline-info">Logout</button>
</Link></li>
{/* <li className="nav-item"><Link className="nav-link" to="/">About</Link></li> */}
</ul>

</div>
</div>
</nav>
</div>
  )
}
