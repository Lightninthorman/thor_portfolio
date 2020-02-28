import React from 'react';
let buildData = require('./data.json');

const About = () => {

    return(
        <section className="row animated slideInRight justify-content-center">
            <div className="col-12 rounded itemCard">
                <h2>Web Projects for Clients</h2>
            </div>
            {buildData.webProjects.clients.map((item,index) => {
                return(
                    <div key={index} className="col-4 m-3 rounded itemCard">
                    <h3>{item.title}</h3>
                    <img className="w-75 rounded" src={item.image} alt={item.title} />
                    <p>{item.description}</p>
                    <p>{item.tools}</p>
                </div>
                )
            })}
            <div className="col-12 rounded itemCard">
                <h2>Web Projects for Personal Development</h2>
                <p>Many of my projects have a bit of my humor built in. I've found when learning new concepts that a premise that makes me laugh is a great motivator to try and learn as many features of the language or framework as possible.</p>
            </div>
            {buildData.webProjects.projects.map((item,index) => {
                return(

                    <div key={index} className="col-md-4 mx-2 my-3 rounded itemCard cardContainer">
                    <a className="cardLink" href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3>{item.title}</h3>
                    <img className="w-75 rounded" src={item.image} alt={item.title} />
                    <p>{item.description}</p>
                    <p>{item.tools}</p>
                    </a>
                </div>

                )
            })}
        </section>
    )
}

export default About;
