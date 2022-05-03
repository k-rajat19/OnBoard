

export default function OurTeamCard({team}){
    return(
    
        <div className="Team-section">
            <div className="team-card-image-container">
            <img src="/Assests/Team/Rectangle (6).png" alt="team Image" />
            
            </div>
            <div className="team-card-author-detail">
                <div className="team-card-container">
                <div className="team-card-author-name">
               {team.name}
                </div>
                <div className="team-card-author-designation">
                 { team.designation }
                </div>
               
                </div>
            </div>
          
        </div>
        
    )
}