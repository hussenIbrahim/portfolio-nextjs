import { useState } from "react";
import MyVerticallyCenteredModal from "../../modal/Modal";
import { projects } from "./ProjectData";
import { ProjectModel } from "./ProjectModel";
 export const Projects = () => {
  const [state, setState] = useState<ProjectModel | null>(null);
  return (
    <section id="projects" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Last Projects</h2>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {projects.map((e, index) => {
            return (
              <div
                key={"indexsfsoj" + index + index}
                className="col-lg-3 col-md-4 col-sm-6"
              >
                <div
                  className="border border-all rounded portfolio-wrap "
                  style={{
                    marginBottom: "20px",
                    padding: "1px",
                  }}
                  onClick={(r) => {
                    setState(e);
                  }}
                >
                  <img
                    src={e.coverImage}
                    alt={e.name}
                    className="rounded-top"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />{" "}
                  <div
                    className="rounded-bottom"
                    style={{
                      backgroundColor: "#E4EDF9",

                      paddingTop: "10px",
                      paddingBottom: "1px",
                      width: "100%",
                      textAlign: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "#173B6C",
                        lineHeight: "14px",
                      }}
                    >
                      {e.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {state != null ? (
        <MyVerticallyCenteredModal
          onHide={() => {
            setState(null);
          }}
          data={state!}
        />
      ) : null}
    </section>
  );
};
