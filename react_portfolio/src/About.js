import React from 'react';


const About = () => {

    return(
        <section className="row animated slideInRight justify-content-center">
            <div className="col-md-4 m-3 itemCard rounded">
                <h1>Thor Kuivanen</h1>
                <img id="profilePicture" src="/images/headshot.jpg" alt="Thor_Kuivanen_Web_Developer_Headshot" />
                <div className="profileLinks">
                    <a  href="https://www.linkedin.com/in/arthur-kuivanen/"  target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/metro/40/000000/linkedin.png" alt="LinkedIn" />
                    </a>

                    <a  href="https://github.com/Lightninthorman?tab=repositories"  target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-glyphs/45/000000/github.png" alt="Github" />
                    </a>
                </div>
                <a className="link" href="mailto:arthur.777@gmail.com"><img src="https://img.icons8.com/material-outlined/24/000000/new-post.png" alt="email" /> arthur.k777@gmail.com</a>
            </div>
            <div className="col-md-6 m-3 itemCard rounded">

                        <h2>A Little Bit About Me</h2>
                        <p>With 10 years of experience working in the fast paced, ever changing world of pharmaceuticals I am now coming to web development with a keen eye for details and an aptitude for creatively solving problems. I am wired to look at things with an analytical eye, but have a creative side that is always looking to come out and play.</p>

                        <p>Along with web development I have a strong interest in digital marketing and employ many different SEO tactics when designing sites. I also have been a major motion graphics enthusiast and hope to incorporate my animations in future projects.</p>

                        <p>I am currently designing web sites and web apps for small businesses and am always looking for an opportunity to join a company that fits my personality and values. Please reach out to me if you would like to discuss a project or job opportunity!</p>


            </div>
        </section>
    )
}

export default About;
