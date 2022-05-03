import React from 'react'

export default function CourseCard(){
    return(
    
        <div className="course-card">
            <div className="course-card-image-container">
            <img src="/Rectangle (11).png" alt="Course Image" />
            </div>
            <div className="course-card-bottom-container">
              <div className="top">
                <div className="tutor">
                   <div className="tutor-image"><img src="" alt="" /></div>
                   <span className="tutor-name">Nancy Reyes</span>
                </div>
                <div className="description">
                Fox nymphs grab quick-jived waltz. Brick quiz whangs                 
                </div>
                </div>    
                <div className="footer">
                  <span className="feedback">
                      <div>4.3</div>
                       <div>(23)</div>
                  </span>
                  <span className="price">Price: 
                   <div>$5734.0</div> 
                  </span>
                </div>
            </div>
        </div>
        
    )
}