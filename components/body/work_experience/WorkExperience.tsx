import { workExperienceData } from "./data";
export const WorkExperience = () => {
  return (
    <section id="Experience" className="Experience section-bg">
      <div className="container ">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            {/* <h3 className="WorkExperience-title">Professional Experience</h3> */}

            {workExperienceData.map((e, index) => {
              return (
                <div key={"sdfgg" + index} className="Experience-item">
                  <h4>{e.jonTitle}</h4>
                  <h5>{e.date}</h5>
                  <p>
                    <em>{e.companyName}</em>
                  </p>
                  <ul>
                    {e.description.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
