import Image from "next/image";

export default function Container4() {
    return(
        <div className="container4 container-xl">
            <div className="container">
                <div className="title ">
                Why Choose US
                </div>
                <div className="inner-container-title">
                Build product for audience
                </div>

                <div className="lp-inner-container">
                <div className="lp-inner-container-img" data-aos="fade-right" data-aos-duration="2500" >

             

  <Image src="/LandingPage/Rectangle.svg"  height={500} width={500} alt="Rectangle" />



             </div>
             <div className="lp-inner-container-text" data-aos="fade-left" data-aos-duration="2500" >
             <div className="lp-inner-container-btn-1">
                          <button>Great Team</button> 
                           </div> 
             <div className="lp-inner-container-heading">
             Start investing on innovative software products
                           </div>    
                           <div className="lp-inner-container-subheading">
                          Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                           </div>
                        <div className="lp-inner-container-btn">
                          <button>Learn More</button> 
                           </div> 
             </div>
             
         </div>
                <div className="lp-inner-container">
             <div className="lp-inner-container-text" data-aos="fade-right" data-aos-duration="2500">
             <div className="lp-inner-container-btn-2">
                          <button>Traget Audience</button> 
                           </div> 
             <div className="lp-inner-container-heading">
             We keep eyes on our target audience
                           </div>    
                           <div className="lp-inner-container-subheading">
                          Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                           </div>
                        <div className="lp-inner-container-btn">
                          <button>Learn More</button> 
                           </div> 
             </div>
             <div className="lp-inner-container-img" data-aos="fade-left" data-aos-duration="2500">

           

  <Image src="/LandingPage/Rectangle2.svg"  height={500} width={500} alt="Rectangle" />



             </div>
         </div>
            </div>
        </div>
    )
};
