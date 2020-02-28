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
            triangleClassChange(selectedSubject);
            renderSubject(selectedSubject);
        }else{
            //**Jump to top of page before the content disappears and page jumps too fast.
            if(selectedSubject === subject){
                window.scroll({
                    top:0,
                    left:0,
                    behavior:'smooth'
                })
            }

            const element = document.getElementsByTagName("section")[0];
            element.classList.remove('slideInRight')
            element.classList.add('zoomOut');
            triangleClassChange(selectedSubject);
            setTimeout(()=>renderSubject(selectedSubject),
                500
            );
        }
    }

    function triangleClassChange(selectedSubject){
        const selectedTriangle = document.getElementById(selectedSubject + "Triangle");
        const currentTriangleTitle= document.getElementById('open');
        const newTriangleTitle = document.getElementById(selectedSubject).querySelector(".subjectItem")


        const itemOpen = document.querySelector(".triangle-down");

        // if(selectedSubject === subject){
        //     console.log(selectedTriangle);
        //     selectedTriangle.classList.remove("triangle-down")
        //     currentTriangleTitle.removeAttribute("id","open");
        //     currentTriangleTitle.classList.remove("fadeOutUp");
        //     currentTriangleTitle.classList.add("fadeInDown");
        // }

        if(itemOpen){
            currentTriangleTitle.removeAttribute("id","open");
            currentTriangleTitle.classList.remove("fadeOutUp");
            currentTriangleTitle.classList.add("fadeInDown");
            itemOpen.classList.remove("triangle-down");
            if(selectedSubject === subject){
                return;
            }
        }



        selectedTriangle.classList.add("triangle-down");
        newTriangleTitle.setAttribute("id","open");
        newTriangleTitle.classList.remove("fadeInDown");
        newTriangleTitle.classList.add("fadeOutUp");
    }


    function renderSubject(selectedSubject) {

        if(selectedSubject === subject ){
            setSubject(null);
            setPageDisplay(null);
        }else{
            setSubject(selectedSubject);

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
                            <div id={item.id} className="subject" key={index} onClick={()=>changeSubject(item.id)}>
                                <div id={item.id+"Triangle"} className="triangle">
                                    <img src= {buildData.triangleImg[index]} alt= {item.title+ " selector"} />
                                </div>
                                <div className="subjectItem animated">
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
