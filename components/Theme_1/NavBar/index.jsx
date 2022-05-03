import React from 'react'
import Link from 'next/link'
export default function NavBar(){
    return(
    <div className="nav-bar">
        <div className="nav-bar-container-1">
           <span>Home</span>
           <span>Course</span>
           <span>About-Us</span>
           <span>Blog</span>
           <span>Contact Us</span>
        </div>
        <div className="nav-bar-container-2">
        <Link href="/Auth_folder/Signin">
        <span>Sign In</span>

        </Link>
        <Link href="/Auth_folder/Signup">
        <span>Sign Up</span>


        </Link>
        </div>
    </div>

    )
}