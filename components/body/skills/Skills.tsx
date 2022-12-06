import { chunkArray, langsSkils, skils, techniclSkills } from "./SkillsData";
import ProgressBar from "@ramonak/react-progress-bar";
export const Skils = () => {
  const style = {
    fontSize: "16px",
    background: "#e4edf9",
    padding: "10px 15px",
    display: "inline-block",
    fontWeight: "600",
    width: "100%",
    marginBottom: "10px",
  };
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">
        {chunkArray(skils, 2).map((part, index) => {
          return (
            <div key={index + "index"} className="col-lg-6" data-aos="fade-up">
              {part.map((skil, index) => {
                return (
                  <div
                    key={
                      "sdfsdfpsdjpfsjod" + index + "sdfsdfpsdjpfsjod" + index
                    }
                    className="progress"
                  >
                    <span className="skill">
                      {skil.name} <i className="val">{skil.progress}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <ProgressBar
                        height="10px"
                        customLabel=""
                        isLabelVisible={false}
                        animateOnRender
                        completed={skil.progress}
                        borderRadius={"0"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="col-lg-12" data-aos="fade-up">
        {langsSkils.map((e, index) => {
          return (
            <div key={"indexsdsd" + index}>
              <h5 style={style} className="rounded">
                {e.name}
              </h5>

              <ul className="skills">
                {e.knowledge.map((l, index) => (
                  <li key={"isdflksdmfndex" + index}>{l}</li>
                ))}
              </ul>
            </div>
          );
        })}

        <h5 style={style} className="rounded">
          TECHNICAL SKILLS
        </h5>
        <ul className="skills">
          {techniclSkills.map((l, index) => (
            <li key={"index" + index + index + "indsdfdsfdexp"}>
              {l.name} : {l.data.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
