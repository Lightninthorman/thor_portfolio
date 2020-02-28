import React from 'react';
let buildData = require('./data.json');

const MoGraphProjects = () => {

    return(
        <section className="row animated slideInRight justify-content-center">
            <div className="col-12 rounded itemCard">
                <h2>Motion Graphics and Video Projects</h2>
                <p>I've always found motion graphics and VFX, as well as video editing, to be interesting and inspiring. Anything you imagine is possible. MoGraph is a hobby of mine and most of the examples below were created as a way to learn different tools in After Effects. However, with these projects and my web projects I make full use of the Adobe Creative Suite, especially Photoshop and Illustrator.</p>
                <p>Check out my tumblr repository for more than what's listed below:</p>
                <a href="https://lightninthorman.tumblr.com/" target="_blank" className="btn btn-outline-dark">More Projects</a>
            </div>
            {buildData.mographProjects.map((item,index) => {
                return(
                    <div key={index} className="col-4 m-3 rounded itemCard">
                        <iframe src={item.link}  frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default MoGraphProjects;
