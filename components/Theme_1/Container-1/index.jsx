import React from 'react'
import NavBar from '../../Theme_1/NavBar'

export default function Container1() {
    return (
        <div className="edu-container-1">
            <div className="edu-nav-bar">
                <NavBar />
            </div>
            <div className="inner-container container-lg">
                <div className="inner-container-text">
                    <div className="inner-container-subheading">
                        
                    DISCOVER RESEARCH
                       
                    </div>
                    <div className="inner-container-heading">
                       
                       A better learning future starts here
                       
                    </div>
                    <div className="inner-container-btn-container">
                      

                            <a href="#" >
                                <button className="btn inner-container-btn">
                                Get A Quote
                                </button>
                            </a>
                       
                    </div>
                </div>
                <div className="inner-container-img">
                   


                        <img src="/Rectangle (9).png" alt="Banner Image" />
                  
                </div>
            </div>
        </div>
    )

}