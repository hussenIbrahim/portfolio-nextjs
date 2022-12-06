 import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  let emailRef = useRef<any>();
  let nameRef = useRef<any>();
  let messageRef = useRef<any>();
  let subjectRef = useRef<any>();
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch align-items-center">
            <div className="info">
              <div className="address">
                <i className="fa fa-map-marker" aria-hidden="true"></i>

                <h4>Location:</h4>
                <p>Raparin, Erbil, Iraq</p>
              </div>
              <div className="email">
                <i className="fa fa-envelope" aria-hidden="true"></i>

                <h4>Email:</h4>
                <p>hussenibrahim245@gmail.com</p>
              </div>
              <div className="phone">
                <i className="fa fa-phone" aria-hidden="true"></i>

                <h4>Call:</h4>
                <p>+964 750 398 9843</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const templateParams = {
                  email: emailRef.current?.value ?? "",
                  name: nameRef?.current?.value ?? "",
                  subject: messageRef?.current?.value ?? "",
                  message: subjectRef?.current?.value ?? "",
                };

                emailjs
                  .send(
                    "service_26lhz89",
                    "template_c4tefee",
                    templateParams,
                    "YyLIE831YI2SfCvGG"
                  )
                  .then(
                    (response) => {
                      emailRef.current.value = "";
                      nameRef.current.value = "";
                      messageRef.current.value = "";
                      subjectRef.current.value = "";
                      alert("Thanks");
                    },
                    (err) => {
                      alert("FAILED...");
                    }
                  );
              }}
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  ref={subjectRef}
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  ref={messageRef}
                  className="form-control"
                  name="message"
                  rows={5}
                  required
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
