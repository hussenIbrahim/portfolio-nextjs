import CountUp from "react-countup";
 
export const Facts = () => {
  return (
    <section id="facts" className="facts section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
        </div>
        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="fa fa-smile-o " aria-hidden="true"></i>
              <CountUp className="purecounter" startVal={0} end={89} />

              <p>
                <strong>Happy Clients</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
