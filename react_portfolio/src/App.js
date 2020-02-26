import React from 'react';

const App = () => {

    return(
        <div className="container">
            <header>
                <img src="images/ThorLogo.png" alt="Thor_Kuivanen_Web_Developer_Logo" />
            </header>
            <main>
                <div className="triangle-container">
                    <div className="subject">
                        <div className="triangle-up">
                            <img src="images/background-1.png" alt="About_me_selector" />
                        </div>
                        <div className="listItem" data-subject="about">
                            <p>About Me</p>
                        </div>
                    </div>
                    <div className="subject">
                        <div className="triangle-up">
                            <img src="images/background-2.png" alt="Web_projects_selector" />
                        </div>
                        <div className="listItem " data-subject="web">
                            <p>Web Projects</p>
                        </div>
                    </div>
                    <div className="subject">
                        <div className="triangle-up" >
                            <img src="images/background-4.png" alt="Mograph_projects_selector" />
                        </div>
                        <div className="listItem " data-subject="mograph">
                            <p>MoGraph Projects</p>
                        </div>
                    </div>
                    <div className="subject">
                        <div className="triangle-up">
                            <img src="images/background-3.png" alt="Resume_selector" />
                        </div>
                        <div className="listItem" data-subject="resume">
                            <p>Resume</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;
