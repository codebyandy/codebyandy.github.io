
function ProjectCard({data}) {
  return (
    <div className="row">
      {
        data.map((value)=>{
          const {type, img, title, ass, role, skills, desc} = value;
          return( 
            <div className="projectcard">
              <div className="projecttype">{type}</div>
                <div className="projectdesc">
                  <h2>{title}</h2>
                  <p>{ass}</p>
                  <p>Roles: {role}</p>
                  <p>Skills: {skills}</p>
                  <p>{desc}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ProjectCard