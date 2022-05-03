import Blog from "../../BlogCard/Blog";

export default function Container8(params) {
    return (
        <div className="news-section">
            <div className="container">
                <div className="heading">
                    <p>Latest News</p>
                    <h3>Our Insights & Articles</h3>
                </div>
                <div className="row align-items-center">
                    <div className="newsSidebarContainer">
                        <div className="news-sidebar-card">
                            <div className="news-sidebar-card-heading"> <h2>Jan <br /> 20 </h2> </div>
                            <div className="news-sidebar-card-text-wrapper">
                                <div className="news-sidebar-card-main ">
                                    <div className="">
                                        <h4>BY ADMIN</h4>
                                    </div>
                                    <div className="">
                                        <h4>Air transport </h4>
                                    </div>
                                </div>
                                <p className="news-sidebar-card-title" >Duis pretium gravida enim maximus</p>
                            </div>
                        </div>
                        <div className="news-sidebar-card">
                            <div className="news-sidebar-card-heading"> <h2>Jan <br /> 24 </h2> </div>
                            <div className="news-sidebar-card-text-wrapper">
                                <div className="news-sidebar-card-main ">
                                    <div className="">
                                        <h4>BY ADMIN</h4>
                                    </div>
                                    <div className="">
                                        <h4>Air transport </h4>
                                    </div>
                                </div>
                                <p className="news-sidebar-card-title" >Duis pretium gravida enim maximus</p>
                            </div>
                        </div>
                        <div className="news-sidebar-card">
                            <div className="news-sidebar-card-heading"> <h2>Jan <br /> 20 </h2> </div>
                            <div className="news-sidebar-card-text-wrapper">
                                <div className="news-sidebar-card-main ">
                                    <div className="">
                                        <h4>BY ADMIN</h4>
                                    </div>
                                    <div className="">
                                        <h4>Air transport </h4>
                                    </div>
                                </div>
                                <p className="news-sidebar-card-title" >Duis pretium gravida enim maximus</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsCardContainer">
                        <Blog />
                        <Blog />
                    </div>
                </div>
            </div>
        </div>
    )
};
