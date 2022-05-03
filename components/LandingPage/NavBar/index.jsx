import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <div className="lp-nav-bar-container">
      <div className="lp-nav-bar">
        <Link href={"/"}><a><span className="lp-nav-bar-item">
          Home
        </span></a></Link>
        <Link href={"/theme/one"}><a><span className="lp-nav-bar-item">
          Theme 1
        </span></a></Link>
        <Link href={"/"}><a><span className="lp-nav-bar-item">
          What We Do
        </span></a></Link>
        <Link href={"/"}><a><span className="lp-nav-bar-item">
          Why Us?
        </span></a></Link>
        <Link href={"/"}><a><span className="lp-nav-bar-item">
          Our Works
        </span></a></Link>
        <Link href={"/"}><a><span className="lp-nav-bar-item">
          Shop
        </span></a></Link>
        <Link href={"/"}><a><span className="lp-nav-bar-item">
          Blog
        </span></a></Link>
      </div>

      {/*   For Mobile devices  */}
      <nav className='lp-nav-bar-mobile'>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Pages </Link>
            <Link href={'#'}>What We Do</Link>
            <Link href={'#'}>Why Us?</Link>
            <Link href={'#'}>Our Works</Link>
            <Link href={'#'}>Shop</Link>
            <Link href={'#'}>Blog</Link>

          </ul>
        </div>
      </nav>
    </div>

  )
}