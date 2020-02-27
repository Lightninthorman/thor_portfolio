import React, {useState} from 'react';
import About from './About.js';
import WebProjects from './WebProjects.js';
import MoGraphProjects from './MoGraphProjects.js';
import Resume from './Resume.js';
let buildData = require('./data.json');


const App = () => {

    const [subject, setSubject] = useState(null);
    const [pageDisplay, setPageDisplay] = useState(null)

    function changeSubject(selectedSubject) {
        console.log(subject,selectedSubject);
        if (subject === null) {
            renderSubject(selectedSubject)
        }else{
            //**Jump to top of page before the content disappears and page jumps too fast.
            if(selectedSubject === subject){
                window.scroll({
                    top:0,
                    left:0,
                    behavior:'smooth'
                })

                const element = document.getElementById(selectedSubject);
                element.classList.remove(selectedSubject,'triangle-down')
            }

            const element = document.querySelector(".animated");
            element.classList.remove("animated",'slideInRight')
            element.classList.add("animated",'zoomOut');
            setTimeout(()=>renderSubject(selectedSubject),
                500
            );
        }
    }

    function renderSubject(selectedSubject) {
        const element = document.getElementById(selectedSubject);
        const subjectCurrentlyDisplayed = document.querySelector(".triangle-down");

        if(subjectCurrentlyDisplayed){
            subjectCurrentlyDisplayed.classList.remove('triangle-down');
        }

        if(selectedSubject === subject ){
            setSubject(null);
            setPageDisplay(null);
            element.classList.remove(selectedSubject,'triangle-down')
        }else{
            setSubject(selectedSubject);

            element.classList.add(selectedSubject,'triangle-down')

            switch(selectedSubject){
                case 'about':
                    setPageDisplay(<About />);
                    jumpTo();
                    break;
                case 'web':
                    setPageDisplay(<WebProjects />);
                    jumpTo();
                    break;
                case 'mograph':
                    setPageDisplay(<MoGraphProjects />);
                    jumpTo();
                    break;
                case 'resume':
                    setPageDisplay(<Resume />);
                    jumpTo();
                    break;
                default:
                    setPageDisplay(null);

            }
        }

    }

    function jumpTo() {
        setTimeout(
            () => {
                const height= document.body.clientHeight;
                const content = document.getElementsByTagName("SECTION")[0];
                const contentHeight = content.offsetHeight;
                const start = height - contentHeight-50;

                window.scroll({
                    top:start,
                    left:0,
                    behavior:'smooth'
                })
            },500
        )
    }





    return(
        <div className="container">
            <header>
                <img src="images/ThorLogo.png" alt="Thor_Kuivanen_Web_Developer_Logo" />
            </header>
            <main>
                <div className="triangle-container">

                    {buildData.triangleSubject.map((item, index) => {
                        return(
                            <div className="subject" key={index} onClick={()=>changeSubject(item.id)}>
                                <div id={item.id} className="triangle triangle-up">
                                    <img src= {buildData.triangleImg[index]} alt= {item.title+ " selector"} />
                                </div>
                                <div className="subjectItem">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                {pageDisplay}
            </main>
        </div>
    )
}

export default App;
