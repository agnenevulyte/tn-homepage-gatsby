import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
// import Tetst from '../components/button'

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Layout />
      <Link to="/contact/">Contact</Link>
      <Link to="/account/">Account</Link>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}