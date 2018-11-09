import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>I'm Harsh Bajaj.</p>
    <p>I'm a Cybersecurity researcher at University of Illinois </p>
    <p>I keep coding here as well: <a href="https://www.hackerrank.com/harshpbajaj"> HackerRank  </a> </p>
    <p> THe last hackathon I am proud of was : <a> https://hackuiowa.hackerearth.com/sprints/hackuiowa-1/dashboard/fbab7af/submission/ </a></p>
  <p>ANd I contribute to Open Source as well :<a href=" https://www.owasp.org/index.php/OWASP_Serverless_Top_10_Project"> OWASP</a> . 
& <a href="http://w3af.org/">w3af (going to contribute)<a/> </p>  
  <Link to="/page-2/">Myself</Link>
  </div>
)

export default IndexPage
