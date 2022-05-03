import Slider from "react-slick";

export default function Container6(params) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="Testimonial">
        <div className="container">
        <div className="section-title">
            <h1>Testimonials</h1>
        </div>
        <div className="TestimonialWrapper">

       
<div className="testiCard" >
<Slider {...settings}>

 <div className="testicard-1">
 <p>Eugene Freeman sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, elitr, sed diam sed diam volu</p>
 <div className="card-author-info">
     <img src="/Assests/Testimonial/img.png" alt="img" />

     <div className="">
         <h1 className="card-author-name" >Akshay </h1>
         <h1 className="card-author-designation " >Tincidunt</h1>
     </div>
 </div>
 </div>
 <div className="testicard-1">
 <p>Eugene Freeman sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, elitr, sed diam sed diam volu</p>
 <div className="card-author-info">
     <img src="/Assests/Testimonial/img.png" alt="img" />

     <div className="">
         <h1 className="card-author-name" >Akshay 2 </h1>
         <h1 className="card-author-designation " >Tincidunt</h1>
     </div>
 </div>
 </div>




</Slider>

</div>
<div>
</div>

        </div>
        </div>
        </div>
      );
};
