import React, {useEffect, useState} from "react";
import Service from "../../../Services";
import Fish from "./Fish.png";

export default function GameFair(){
    const [data, setData] =  useState([{
        "quizID": 0,
        "question": "",
        "q1": "",
        "q2": "",
        "q3": "",
        "q4": "",
        "correct": "",
        "level": ""
    }]);
    const [user, setUser] =  useState();
    const [values, setValues] =  useState();
    const [time, setTime] =  useState(100);
    const [x, setX] =  useState(56);
    const [y, setY] =  useState(40);
    const [f1, setF1] =  useState(0);
    const [f2, setF2] =  useState(0);
    const [f3, setF3] =  useState(0);
    const [f4, setF4] =  useState(0);
    const [f5, setF5] =  useState(0);
    const [f6, setF6] =  useState(0);
    const [f7, setF7] =  useState(0);
    const [f8, setF8] =  useState(0);
    const [f9, setF9] =  useState(0);
    const [f10, setF10] =  useState(0);

    useEffect(()=>{
        const intervel = setInterval(()=>{
            updateStateTime();
        }, 400);
        
        if(Number(sessionStorage.getItem("score")) >= 100)
        {
            updateScore();
        }

        Service.QuizGet("Fair").then(({data}) => {
            setData(data);
            console.log(data);
        });

        Service.ScoreGet(Number(sessionStorage.getItem('userID'))).then(({data}) => {
            setUser(data);
            console.log(data);
        });

        fish();
    },[]);

    function updateStateTime(){
        var value = Number(time);
        value -= 2;
        setTime(value);
        if(Number(time) <= 0)
        {
            updateScore();
        }
    }

    function updateScore(){
        var jsonOBJ = ({
            "scoreId": user.scoreId,
            "userId": user.userId,
            "learning": user.learning,
            "fair": Number(sessionStorage.getItem("score")),
            "good": user.good,
            "expert": user.expert
        });
        console.log(jsonOBJ);
        Service.ScoreUpdate(jsonOBJ)
        .then(({data})=>{
            console.log(data);
            window.location.replace("/gamefair/over");
        }).catch(({response})=>{
            console.log(response);
        });
    } 

    function answer(ans){
        const aveData = data;
        if(Number(ans) == Number(aveData.correct)){
            var valueS = Number(sessionStorage.getItem("score"));
            valueS += 10;
            sessionStorage.setItem("score", valueS);
            console.log(valueS);
            //var qid = Number(sessionStorage.getItem("qID"));
            fish();
            //sessionStorage.setItem("qID", qid+1);
            window.location.replace("/gamefair");
        }
        else
        {
            updateScore();
        }
    }

    function fish(){
        var valueS = Number(sessionStorage.getItem("score"));
        if(valueS>=10)
        {
            setF1(1);
        }
        if(valueS>=20)
        {
            setF2(1);
        }
        if(valueS>=30)
        {
            setF3(1);
        }
        if(valueS>=40)
        {
            setF4(1);
        }
        if(valueS>=50)
        {
            setF5(1);
        }
        if(valueS>=60)
        {
            setF6(1);
        }
        if(valueS>=70)
        {
            setF7(1);
        }
        if(valueS>=80)
        {
            setF8(8);
        }
        if(valueS>=90)
        {
            setF9(1);
        }
        if(valueS>=100)
        {
            setF10(1);
        }
    }

    function btnUp(e){
        e.preventDefault();
        var xaxis = Number(x);
        var yaxis = Number(y);
        if (yaxis>40)
        {
            yaxis-=2;
        }
       
        setY(yaxis);
        console.log("x: "+ xaxis + " y: " + yaxis);
        options();
    }

    function btnDown(e){
        e.preventDefault();
        var xaxis = Number(x);
        var yaxis = Number(y);
        if (yaxis<84)
        {
            yaxis+=2;
        }
        setY(yaxis);
        console.log("x: "+ xaxis + " y: " + yaxis);
        options();
    }

    function btnLeft(e){
        e.preventDefault();
        var xaxis = Number(x);
        var yaxis = Number(y);
        if(xaxis>36)
        {
            xaxis-=2;
        }
        setX(xaxis);
        console.log("x: "+ xaxis + " y: " + yaxis);
        options();

    }

    function btnRight(e){
        e.preventDefault();
        var xaxis = Number(x);
        var yaxis = Number(y);
        if(xaxis<74)
        {
            xaxis+=2;
        }
        setX(xaxis);
        console.log("x: "+ xaxis + " y: " + yaxis);
        options();

    }

    function options(){
        var xaxis = Number(x);
        var yaxis = Number(y);
        if(yaxis == 82)
        {
            if((xaxis >= 36) && (xaxis <= 38))
            {
                answer("1");
                console.log("1");
            }
            else if((xaxis >= 48) && (xaxis <= 50))
            {
                answer("2");
                console.log("2");
            }
            else if((xaxis >= 60) && (xaxis <= 62))
            {
                answer("3");
                console.log("3");
            }
            else if((xaxis >= 72) && (xaxis <= 74))
            {
                answer("4");
                console.log("4");
            }
        }

    }

    return(
        <div className="scrollLock">
            <div className="row">
                <div className="col-3 fishTank">
                    <img src={Fish} alt="" className="fish f1" style={{opacity:`${f1}`}}/>     
                    <img src={Fish} alt="" className="fish f2" style={{opacity:`${f2}`}} />
                    <img src={Fish} alt="" className="fish f3" style={{opacity:`${f3}`}} />     
                    <img src={Fish} alt="" className="fish f4" style={{opacity:`${f4}`}} /> 
                    <img src={Fish} alt="" className="fish f5" style={{opacity:`${f5}`}} />     
                    <img src={Fish} alt="" className="fish f6" style={{opacity:`${f6}`}} /> 
                    <img src={Fish} alt="" className="fish f7" style={{opacity:`${f7}`}} />     
                    <img src={Fish} alt="" className="fish f8" style={{opacity:`${f8}`}} />  
                    <img src={Fish} alt="" className="fish f9" style={{opacity:`${f9}`}} />     
                    <img src={Fish} alt="" className="fish f10"style={{opacity:`${f10}`}} />                
                </div>
                <div className="col-9 bggradient"> 
                        <div className="formBg shadow-lg">
                            <div className="progress bg-dark" style={{ marginRight: "90px", marginBottom: "20px" }}>
                                <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{width: `${time}%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="question">
                                <p>{data.quizID}. &nbsp; {data.question} </p>
                            </div>
                            <div className="answer row" >
                                <div className="col">
                                    <p>1. {data.q1}</p>
                                </div>
                                <div className="col">
                                    <p>2. {data.q2}</p>
                                </div>
                                <div className="col">
                                    <p>3. {data.q3}</p>
                                </div>
                                <div className="col">
                                    <p>4. {data.q4}</p>
                                </div>
                                
                            </div>
                            <div className="row" style={{height: "45%"}}>
                                <div className="disk" style={{ left: `${x}%`, top: `${y}%`, position: "absolute"}}></div>
                            </div>
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-3 d-flex justify-content-center" style={{ position: "absolute", top: "82%", left: "25.80%" }}>
                                        <div className="boxes b1"><p className="text-center py-3 boxText">1</p></div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-center" style={{ position: "absolute", top: "82%", left: "38.40%" }}>
                                        <div className="boxes b2"><p className="text-center py-3 boxText">2</p></div>
                                    </div>
                                   <div className="col-3 d-flex justify-content-center" style={{ position: "absolute", top: "82%", left: "50.72%" }}>
                                        <div className="boxes b3"><p className="text-center py-3 boxText">3</p></div>
                                    </div>
                                   <div className="col-3 d-flex justify-content-center" style={{ position: "absolute", top: "82%", left: "63.42%" }}>
                                        <div className="boxes b4"><p className="text-center py-3 boxText" >4</p></div>
                                    </div> 
                                </div>
                            </div>
                           
                        </div>
                        <div>
                            <div className="score shadow-lg">
                                <p className="scoreTxt">Score:&nbsp; {sessionStorage.getItem("score")}</p>
                            </div>

                            <div className="buttonPack shadow-lg">
                                <button className="btn pbtn bup" type="button" onClick={(e) => btnUp(e)} id="button-addonX1"><i className="bi bi-caret-up-fill"></i></button>
                                <div className="row">
                                    &nbsp;
                                    <button className="btn pbtn bleft" type="button" onClick={(e) => btnLeft(e)} id="button-addonX2"><i className="bi bi-caret-left-fill"></i></button>
                                    &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="btn pbtn " type="button" onClick={(e) => btnRight(e)} id="button-addonX3"><i className="bi bi-caret-right-fill"></i></button>
                                </div>
                                <button className="btn pbtn bdown" type="button" onClick={(e) => btnDown(e)} id="button-addonX4"><i className="bi bi-caret-down-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}