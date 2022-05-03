import React from 'react'
import Editable from '../../components/Editable'

function Demo() {
    return (
        <div className='demo-theme'>
            <section className="banner-2 section-padding mb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-content">
                                <Editable
                                    section={1}
                                    inputs={[
                                        {
                                            type: "text",
                                            label: "Banner Heading",
                                            name: "banner_heading",  // should match database
                                            value: "Learn it with FinLadder", // Should be dynamic variable
                                        }
                                    ]}

                                >
                                    <span className="subheading">Learn it with FinLadder</span>
                                </Editable>

                                <Editable
                                    section={1}
                                    inputs={[
                                        {
                                            type: "text",
                                            label: "Banner Sub-heading",
                                            name: "banner_subheading",
                                            value: "Professional and Technical courses for all.",
                                        }
                                    ]}
                                >
                                    <h1 className="banner-heading">Professional and Technical courses for all.</h1>
                                </Editable>

                                <Editable
                                    section={1}
                                    inputs={[
                                        {
                                            type: "text",
                                            label: "Button Text",
                                            name: "banner_cta_text",
                                            value: "View Courses",
                                        },
                                        {
                                            type: "text",
                                            label: "Button Link",
                                            name: "banner_cta_link",
                                            value: "weburl.com/cources",
                                        }

                                    ]}
                                >
                                    <a href="#" className="btn btn-main">View Courses </a>
                                </Editable>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration={1000} className="col-md-12 col-xl-6 col-lg-6 aos-init aos-animate">
                            <Editable
                                section={1}
                                inputs={[
                                    {
                                        type: "file",
                                        label: "Banner Image",
                                        name: "banner_image",
                                        value: "",
                                    }
                                ]}
                            >
                                <img src="https://efinladder.in/static/media/homepage-png1.c8f5ba27.png" alt="" className="img-fluid" />
                            </Editable>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Demo