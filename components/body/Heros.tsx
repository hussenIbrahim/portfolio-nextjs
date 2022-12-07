import Typical from "react-typical";
// dfdsfs
export const Heros = () => {
  return (
    <section
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Hussein Hassan Ibrahim</h1>
        <p style={{ fontSize: "30px" }}>
          Im{" "}
          <span>
            <Typical
              wrapper="span"
              steps={[
                "Flutter Developer",
                2000,
                "FrontEnd Develper (ReactJS)",
                2000,
                "BackEnd Develper (ASP .Net Core)",
                2000,
              ]}
              loop={Infinity}
            />
          </span>
        </p>
      </div>
    </section>
  );
};
