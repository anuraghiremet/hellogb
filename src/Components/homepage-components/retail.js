import React from "react";
import { Link } from "gatsby";
import {rnService,description,retailWrapper,sectionTitle} from "./homepage.module.css"


const Retail = (props) => {
    return(
        <section className={`${retailWrapper} p-5`}>
            <div className="rn-service-area rn-section-gap section-separator">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={sectionTitle}>
                            <h2 className="title">Retail, E-Commerce und Dienstleister</h2>
                        </div>
                    </div>
                </div>
                <div className="row row--25 mt_md--10 mt_sm--10">

                    {/* <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-3 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className={rnService}>
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link>{props.title}</Link></h4>
                                    <p className={description}>I throw myself down among the tall grass by the stream as I
                                        lie close to the earth.</p>
                                    <Link className="read-more-button" href="#"><i className=""></i></Link>
                                </div>
                            </div>
                            <Link className="over-link" href="#"></Link>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service --> */}
                    {/* <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-3 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className={rnService}>
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link>App Development</Link></h4>
                                    <p className={description}> It uses a dictionary of over 200 Latin words, combined with
                                        a handful of model sentence.</p>
                                    <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                            <Link className="over-link" href="#"></Link>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service --> */}
                    {/* <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-3 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className={rnService}>
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tv"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link>App Development</Link></h4>
                                    <p className={description}>I throw myself down among the tall grass by the stream as I
                                        lie close to the earth.</p>
                                    <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                            <Link className="over-link" href="#"></Link>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service --> */}
                    {/* <!-- Start Single Service --> */}
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-3 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className={rnService}>
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link>Mobile App</Link></h4>
                                    <p className={description}>There are many variations of passages of Lorem Ipsum
                                        available, but the majority.
                                    </p>
                                    <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                            <Link className="over-link" href="#"></Link>
                        </div>
                    </div>
                    {/* <!-- End SIngle Service --> */}
                    

                </div>
            </div>
            </div>
        </section>
    )
}

export default Retail