import React, { useState } from 'react'
import CourseCard from '../../CourseCard'
 export default function Container3(){
    let courses =["Graphics & Design","Digital Marketing","Writing & Translation","Music & Audio"];
    const [course, setCourse] = useState(courses[0]);
     return(
        <div className="edu-container-3">
              <div className="inner-container container-lg">
                  <div className="inner-container-heading">
                  Top Featured Courses
                  </div>
                  <div className="inner-container-nav">
                    {
                    courses.map((item,index)=>{
                           return(

                     <div className={course == item ?"nav-tab active":"nav-tab"} onClick={()=>setCourse(item)} key={index} >
                       {item}
                     </div>
                           )
                       })
                    }  
                  </div>
                  <div className="inner-container-main">
                     <CourseCard/>
                     <CourseCard/>
                     <CourseCard/>
                     <CourseCard/>
                     <CourseCard/>
                     <CourseCard/>
                  </div>
              </div>
          </div>
  
     )
    
 }