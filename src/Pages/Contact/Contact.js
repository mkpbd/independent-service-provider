import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="ftco-section mt-5 pt-2">
        <div className="container px-3 py-4  shadow-sm rounded">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">
                                Subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-md-5 p-4 text-light">
                      <h3>Let's get in touch</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> Dhaka, Gazipur, Sreepur
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="text-white">
                            <span>Phone:</span>{" "}
                            <a className="text-white" href="tel://01818985479">
                              + 01818985479
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="text-white">
                            <span>Email:</span>{" "}
                            <a
                              className="text-white"
                              href="mailto:mostofakamal1990@gmail.com"
                            >
                              mostofa1990mkp@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website</span>{" "}
                            <a className="text-white" href="#">
                              yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
