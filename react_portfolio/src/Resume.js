import React from 'react';


const Resume = () => {

    return(
        <section className="row animated slideInRight justify-content-center mb-3">
            <div className="col-12 rounded itemCard">
                <h2>Resume</h2>
                <p>While I'm newer to the web development career path I come with years of professional experience in the fast paced, ever changing pharmaceutical industry. Besides a strong work ethic I have built equally important career skills such as time management, leadership, and developing interpersonal relationships within a team and across global partnerships. If anything, having a chance to start a new career makes me even more eager to learn as much as possible and become a valuable asset quickly.</p>
                <p>Click on the button below to download my resume or visit my LinkedIn profile:</p>
                <div>
                    <a href="images/ArthurKuivanenResume.pdf" className="btn btn-outline-dark mx-4" download>Resume</a>
                    <a  href="https://www.linkedin.com/in/arthur-kuivanen/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/metro/40/000000/linkedin.png" alt="LinkedIn" /></a>
                </div>
            </div>
        </section>
    )
}

export default Resume;
