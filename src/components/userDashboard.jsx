import '../styles/userDashboard.css'

const UserDashboard = () => {
    return (
        <div className="user-dashboard">
            <div className="box1">
                <div className="box1-content">
                    <h1>Learning Lab</h1>
                    <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff
                        and patrons can empower themselves with a practical understanding of current technology.</p>
                </div>
            </div>
            <div className="box2">
                <div className="image">
                    <img src="/images/LinkedInLearning-1024x400.jpg" alt="" />
                </div>
                <div className="box2-content">
                    <h5>LEARN</h5>
                    <h1>LinkedIn Learning</h1>
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                    <div className="get-started">
                        <button>
                            <a href='/user/error-404/'><span>Get Started &#8594;</span></a>
                        </button>
                    </div>
                </div>
                <div className="box3">
                    <div className="image-2">
                        <img src="/images/Pattern-BG-Learn.svg" alt="" />
                        <div className="box3-content">
                        <h1>Learn Something New or Get Tech Help</h1>
                        <p>Register on the online calendar. For more information call (203) 789-1234.</p>
                        <div className="get-started2">
                            <button>
                                <a href='/user/error-404/'><span>View Calendar &#8594;</span></a>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard