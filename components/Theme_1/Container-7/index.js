import OurTeamCard from "../../OurTeamCard";
import Slider from "react-slick";
export default function Container7(params) {

    // dummy json data for team 
    const teamData = [
        {
            image: "/Assests/Team/Rectangle (6).png",
            name: "Akshay Rathod",
            designation: "Designer"
        },
        {
            image: "/Assests/Team/Rectangle (6).png",
            name: "Doris Jordan",
            designation: "Developer"
        },
        {
            image: "/Assests/Team/Rectangle (6).png",
            name: "Doris Jordan",
            designation: "Developer"
        },
        {
            image: "/Assests/Team/Rectangle (6).png",
            name: "Doris Jordan",
            designation: "Developer"
        },
        {
            image: "/Assests/Team/Rectangle (6).png",
            name: "Doris Jordan",
            designation: "Developer"
        },
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: true
            }
          },
        
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
       <div className="team-section">
           <div className="inner-container container-lg ">
                <div className="inner-container-heading">
                    <h2>Our Creative Team</h2>
                </div>
                <div className="inner-container-main">
                <Slider {...settings}>

                {
                    teamData.map((team, index) => {
                        return (
                            <OurTeamCard
                                key={index}
                                team={team}
                            />
                        )
                    }
                    )}

                    </Slider>
              
                </div>
               
           </div>
       </div>
    )
};
