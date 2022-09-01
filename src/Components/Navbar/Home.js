import React from "react";
import { Button, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";

function Home() {
  const naviget = useNavigate();
  return (
    <>
      <div className="mainimghome">
        <div className="hero_caption">
          <span>Get Every Single Solutions</span>
          <div className="hero_caption">
            <h1>
              I’m Designer <br />
              Hitesh H Prajapati
            </h1>
          </div>
          <div className="hero_caption">
            <p>
              Lorem ipsum, consectetur adipisicing elit. Iurebjksdfghdgkldfjgh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            </p>
            <p>gsdfgiosdgsdfgiojko.</p>
          </div>

          <div className="hitesh">
            <div className="hero_btn">
              <Button variant="">Lern More</Button>
              <Button variant="outline">Hire Me</Button>
            </div>
          </div>
        </div>
      </div>

      <section className="about-area section-paddingt30">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-caption mb-50">
                <h3>Designing With Passion While Exploring The World.</h3>
                <p className="pera1">
                  Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus.
                </p>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="about-caption2">
                <h3>
                  Any Type Of Query
                  <br /> & Discussion.
                </h3>
                <p>Late talk with me</p>
                <div className="send-cv">
                  <NavLink className="ateg" as={Link} to={"/"}>
                    Hiteshhp@skiliq.in
                  </NavLink>
                  <BsFillArrowRightSquareFill size="50px" className="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-area section-padding3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-tittle mb-70">
                <h2>What Services you will Get from me!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-pen">
                    <FiPenTool />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">UI/UX Design</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-speaker">
                    <HiOutlineSpeakerphone />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Digital Marketing</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-portfolio">
                    <GrGallery />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Website Design</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area  services-padding">
        <div className="container mt-5  ">
          <div className="project-heading mb-35">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-tittle">
                  <h2>What Services you will Get from me!</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="properties__button">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="false"
                      >
                        All
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Branding
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Logo
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-last-tab"
                        data-toggle="tab"
                        href="#nav-last"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        UI/UX
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-technology"
                        data-toggle="tab"
                        href="#nav-techno"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Web Design
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-content active" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                            alt=""
                            data-pagespeed-url-hash="3958837646"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                            alt=""
                            data-pagespeed-url-hash="3958837646"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                            alt=""
                            data-pagespeed-url-hash="4253337567"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                                alt=""
                                data-pagespeed-url-hash="3958837646"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-last"
                  role="tabpanel"
                  aria-labelledby="nav-last-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                            alt=""
                            data-pagespeed-url-hash="3958837646"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-techno"
                  role="tabpanel"
                  aria-labelledby="nav-technology"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                            alt=""
                            data-pagespeed-url-hash="252870192"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                                alt=""
                                data-pagespeed-url-hash="3958837646"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
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

      <section className="wantToWork-area w-padding2  ">
        <div className="container">
          <div className="row align-items-center justify-content-between ">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>Dont worry for contact i`m available</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <Button
                onClick={() => naviget("/contact")}
                size="lg"
                className="contatbuttonhome"
              >
                Contact Me Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="client-comments section-paddingt30">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-tittle">
                <h2>
                  Some Possitive Feedback <br /> That Encourage Us
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5">
          <div className="card-body">
            <div className="latest-blog-area">
              <div className="col-xl-4 card-body">
                <div className="blog-wrapper">
                  <div className="blog-inner">
                    <div className="blog-top">
                      <div className="person-img">
                        <img
                          src="assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp"
                          alt=""
                        />
                      </div>
                      <div className="comment-person">
                        <h2>Bradley Erickson</h2>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit, seddosdoe eiusmod tempor
                      incididunt utore etstes dolore magna aliqua. Ut imminim
                      restai veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 card-body">
                <div className="blog-wrapper">
                  <div className="blog-inner">
                    <div className="blog-top">
                      <div className="person-img">
                        <img
                          src="assets/img/gallery/xblog3.png.pagespeed.ic.VrOAiMGtdT.webp"
                          alt=""
                        />
                      </div>
                      <div className="comment-person">
                        <h2>Bradley Erickson</h2>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit, seddosdoe eiusmod tempor
                      incididunt utore etstes dolore magna aliqua. Ut imminim
                      restai veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 card-body">
                <div className="blog-wrapper">
                  <div className="blog-inner">
                    <div className="blog-top">
                      <div className="person-img">
                        <img
                          src="assets/img/gallery/xblog2.png.pagespeed.ic.vduKNjHUYq.webp"
                          alt=""
                        />
                      </div>
                      <div className="comment-person">
                        <h2>Bradley Erickson</h2>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit, seddosdoe eiusmod tempor
                      incididunt utore etstes dolore magna aliqua. Ut imminim
                      restai veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brand-area pb-bottom">
        <div className="container">
          <div className="brand-inrow">
            <div
              className="brand-active brand-border pt-50 pb-40 mb-5"
              style={{
                display: "inline-flex",
                margin: "20px 150px",
              }}
            >
              <div className="single-brand">
                <img
                  src="assets/img/gallery/xbrand1.png.pagespeed.ic.vsJKXq8o6n.webp"
                  alt=""
                  data-pagespeed-url-hash="1771442224"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div className="single-brand">
                <img
                  src="assets/img/gallery/xbrand2.png.pagespeed.ic.rFiXzXgh9r.webp"
                  alt=""
                  data-pagespeed-url-hash="2065942145"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div className="single-brand">
                <img
                  src="assets/img/gallery/xbrand3.png.pagespeed.ic.BidJFeCvq3.webp"
                  alt=""
                  data-pagespeed-url-hash="2360442066"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div className="single-brand">
                <img
                  src="assets/img/gallery/xbrand4.png.pagespeed.ic.W5ZAIexfpO.webp"
                  alt=""
                  data-pagespeed-url-hash="2654941987"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div className="single-brand">
                <img
                  src="assets/img/gallery/xbrand2.png.pagespeed.ic.rFiXzXgh9r.webp"
                  alt=""
                  data-pagespeed-url-hash="2065942145"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="contact-info-area w-padding2"
        style={{ paddingBottom: "60px" }}
        data-background="assets/img/gallery/section_bg04.jpg"
      >
        <div className=" p-5" style={{ padding: "50px" }}>
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-7">
              <div className="contact-caption mb-50">
                <h3 style={{ fontSize: "50px" }}>
                  If Not Now, When? Let’s Work Together!
                </h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra.
                </p>
                <img
                  style={{ marginTop: "40px" }}
                  src="assets/img/gallery/xsin.png.pagespeed.ic.4L7r6tiIs5.webp"
                  alt=""
                  data-pagespeed-url-hash={564202676}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <form action="#" className="contact-wrapper">
                <input type="text" name="name" placeholder="Full Name" />
                <input type="email" name="email" placeholder="Email Address" />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />

                <Button className="submit-btn2">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-area text-light ">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="footer-top-cap text-center">
                    <img
                      src="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKjd2qTIbd5w0mYUtFnUoXXEmrDZFmOtzCAMszlsxv/sqaruEvR8jeg/BLdtJEnyVHdP9rJT1cfOEyD0Yu76o1lUjO7U6/W5649RKVqoM83ffIrK0HM2KqZwq65r4fZzVIDmGdVSeFpP0uLdF8i5btRTtZzxwuwcI7Xw10tkWY/qNn2LLOsPI38jxzp7zTYuXUSO9dC4/x5Z1m9G/o2Z9FJR8w0tIYT9TjOyTRpsUKwxzxE721Qj2xTLzr/KEBoQDRG3YQl97qptXL6AiEhRrxrGHxNmOpU8QXPYybtUkK4iao6CPKqNcSOD+xEJgagNS+j7xv2PSIeoRZrp1LyMeSVuxMwK0sCPRG9sWEL/YuR/E7QtIQwReTWuktGtHA1jEXM2DKHPX7GNK+eT6PS+pWAG1KYNdoZe0TbNTQghDLI+iTJbnMdEWZjTy46PItQGxZKxkRz6nnH/MxIQ+cqox7T0LcxCvMHClzLN/NuLhJ7EjBxjk9HC8myzkRz6JyP3DNRknKDOoisbPBaNW6woY+VUO0APZCE19IXLtnH1nIHeMrRszqC01SJOJD3usZXER652g8yjidTQ/xn3vyKdwH6xclZLW05pdYiuHgtFqZrwoV3sxAK0kRr6ByMPANuP+ch6geoi4cdMECWvgmAnMfTFS7Zx7ayRTqwYYw1YT/xj3P8OE2NBO9N6pa2GJAaDg41QqkU7C0Xf+WVizERq6O+MPMTG5iSKIB7llMDk9JANWtxCuXKav0VtRg3Qbgy9JlJDf2Mbc7NoPfOWmjRhhQHAfuIzpLRiUI3rFZ8r9YuOiZ3SphYL6aFf3F02cB34jD6yIhYdFR5wYSwhfady7VwBlLdjwQG+YNNieWoxhX5VWErlETbN0NQuOw0UURGJu409s6wg6I2F8PFzXbsx2UIDeH57IWXMA+1EdOR1M2jRwxxzanr5B/avIO6YHqJF9Sek2LWEfqdjZ3LhJvBV6a/dDvygEqaW8H/IILsfrhxwNSXDoIcJU+hApz7Yzj8ZvTmv8wxbmMHxzXbgApvUsU6PSHrlylFbQQDfOcZmOjjYMIV+4yQRHX8/obAAdHD3/VgZNXiHtSOnfayA1QndOE3ECvyC+OT6HOM2cFTMyH7kV4dJ6GjHFgCYfVQWnmO7sDOwFfnVu0NECYU/gfeZk5EDyLL2kq6v2zdxOydKF10OmVZP5EUzX5aFnUR0ugnZ1oZRomjhi9bDNPnhm8i4DlKSPt+BrOu1TxOORg+9hsxr+0R0dG9A/hUiR4N7UAV646R2NPXx26gGNU7LcWQ3KkPieWy87XVUh/jzWN8mVIr2Eg3vQ9Wo+5P3kH8BAA=="
                      alt=""
                      data-pagespeed-url-hash={3314867680}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                    <span>
                      <a href="#">
                        <span>
                          hiteshPrajapati@skiliq,mail.in
                          <a href="#"></a>
                        </span>
                      </a>
                    </span>
                    <p>221B Baker Street, Post office Box 353 </p>
                    <p>Park Road, USA - 215431</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright © All rights reserved | This template is made
                      with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="footer-social f-right">
                    <a>Stay Connected</a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
