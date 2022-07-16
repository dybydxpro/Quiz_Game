import React, { useState, useEffect } from "react";
import Service from "./../Services";
import { useNavigate } from 'react-router-dom';

export default function Score(){
    const navigate = useNavigate();
    const [scorechart, setScorechart] = useState("");
    const [my, setMy] = useState({
        "scoreId": 0,
        "userId": 0,
        "learning": 0,
        "fair": 0,
        "good": 0,
        "expert": 0  
    });
    const [learning, setLearning] = useState([{
        "scoreId": 0,
        "userId": 0,
        "learning": 0,
        "fair": 0,
        "good": 0,
        "expert": 0
    }]);
    const [fair, setFair] = useState([{
        "scoreId": 0,
        "userId": 0,
        "learning": 0,
        "fair": 0,
        "good": 0,
        "expert": 0
    }]);
    const [good, setGood] = useState([{
        "scoreId": 0,
        "userId": 0,
        "learning": 0,
        "fair": 0,
        "good": 0,
        "expert": 0
    }]);
    const [expert, setExpert] = useState([{
        "scoreId": 0,
        "userId": 0,
        "learning": 0,
        "fair": 0,
        "good": 0,
        "expert": 0
    }]);

    useEffect(() => {
        if(!(Number(sessionStorage.getItem("userID")) > 0)){
            alert("Please login to the system!");
            navigate("/");
        }

        GetScore();
        GetLearningScore();
        GetFairScore();
        GetScoreGood();
        GetScoreExpert();
    },[]);

    function GetScore(){
        var id = sessionStorage.getItem('userID');
        console.log(id);
        Service.ScoreGet(id)
        .then(({data})=>{
            setMy(data);
            setScorechart("https://quickchart.io/chart?c={type:'bar',data:{labels:['Learning','Fair','Good','Expert'], datasets:[{backgroundColor:'White', label:'Score',data:["+data.learning+","+data.fair+","+data.good+","+data.expert+"]}]}}");
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        })
    }

    function GetLearningScore(){
        Service.ScoreLearning()
        .then(({data})=>{
            setLearning(data);
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        })
    }

    function GetFairScore(){
        Service.ScoreFair()
        .then(({data})=>{
            setFair(data);
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        })
    }

    function GetScoreGood(){
        Service.ScoreGood()
        .then(({data})=>{
            setGood(data);
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        })
    }

    function GetScoreExpert(){
        Service.ScoreExpert()
        .then(({data})=>{
            setExpert(data);
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        })
    }

    //Score Chart
    //setInterval(scorechart="https://quickchart.io/chart?c={type:'bar',data:{labels:['Learning','Fair','Good','Expert'], datasets:[{backgroundColor:'Gold', label:'Score',data:["+my.learning+","+my.fair+","+my.good+","+my.expert+"]}]}}", 4000);
    //scorechart="https://quickchart.io/chart?c={type:'bar',data:{labels:['Learning','Fair','Good','Expert'], datasets:[{backgroundColor:'Gold', label:'Score',data:["+my.learning+","+my.fair+","+my.good+","+my.expert+"]}]}}";

    //Score List
    function score() {
        if(my.length == 0 || my === undefined){
            return(
                <div className="col-12"></div>
            );
        }
        else{
            return(
                <div>
                    <div className=" row text-light mt-4 justify-content-center">
                        <div className=" scorevalue col-2">
                            <p className="display-6 text-center">Learning</p> 
                        </div>
                        <div className="scorevalue col-2">
                            <p className="display-6 text-center">Fair</p> 
                        </div>
                        <div className="scorevalue col-2">
                            <p className="display-6 text-center">Good</p> 
                        </div>
                        <div className="scorevalue col-2">
                            <p className="display-6 text-center">Expert</p> 
                        </div>
                    </div>
                    <div className="row text-light mt-4 justify-content-center">
                        <div className="dbscore col-2">
                            <p className="display-6 text-center"><b>{ my.learning }</b></p> 
                        </div>
                        <div className="dbscore col-2">
                            <p className="display-6 text-center"><b>{ my.fair }</b></p> 
                        </div>
                        <div className="dbscore col-2">
                            <p className="display-6 text-center"><b>{ my.good }</b></p> 
                        </div>
                        <div className="dbscore col-2">
                            <p className="display-6 text-center"><b>{ my.expert }</b></p> 
                        </div>
                    </div>
                    < div className="chart row text-light mt-4 justify-content-center">
                        <img src={scorechart} alt="" />
                    </div>

                </div>
                
            );
        }
    }

    function learningScore(){
        if(learning.length == 0 || learning === undefined){
            return(
                <li className="list-group-item">A second item</li>
            );
        }
        else{
            return(
                learning.map((data) =>
                    <li className="list-group-item " key={data.scoreID}>
                         <b>
                        <div className="row">
                           
                            <div className="col-10">{data.firstname} {data.lastname}</div>
                            <div className="col-1 text-end">{data.learning}</div>
                        </div>
                        </b>
                    </li>    
                )
            );
        }
    }

    function fairScore(){
        if(fair.length == 0 || fair === undefined){
            return(
                <li className="list-group-item">A second item</li>
            );
        }
        else{
            return(
                fair.map((data) =>
                    <li className="list-group-item " key={data.scoreID}>
                        <b>
                        <div className="row">
                            <div className="col-10">{data.firstname} {data.lastname}</div>
                            <div className="col-1 text-end">{data.fair}</div>
                        </div>
                        </b>
                    </li>    
                )
            );
        }
    }

    function goodScore(){
        if(good.length == 0 || good === undefined){
            return(
                <li className="list-group-item">A second item</li>
            );
        }
        else{
            return(
                good.map((data) =>
                    <li className="list-group-item " key={data.scoreID}>
                        <b>
                        <div className="row">
                            <div className="col-10">{data.firstname} {data.lastname}</div>
                            <div className="col-1 text-end">{data.good}</div>
                        </div>
                        </b>
                    </li>    
                )
            );
        }
    }

    function expertScore(){
        if(expert.length == 0 || expert === undefined){
            return(
                <li className="list-group-item">A second item</li>
            );
        }
        else{
            return(
                expert.map((data) =>
                    <li className="list-group-item " key={data.scoreID}>
                        <b>
                            <div className="row">
                            <div className="col-10">{data.firstname} {data.lastname}</div>
                            <div className="col-1 text-end">{data.expert}</div>
                        </div>
                        </b>
                    </li>    
                )
            );
        }
    }

    return(
        <div className="row background" style={{backgroundColor: "#045de9", backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)" }}>
            <div className="container">
                <div className="d-flex justify-content-center text-light mt-4">
                    <h3 className="scoretext display-2"><u>Scoreboard</u></h3>
                </div>
                { score() }
                <hr className="bg-light"/>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item text-light scoretable text-center" aria-disabled="true"><b>Leading board of Learning level</b></li>
                            { learningScore() }
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item text-light scoretable text-center" aria-disabled="true"><b>Leading board of Fair level</b></li>
                            { fairScore() }
                        </ul>
                    </div>  
                </div>
                <br />
                <div className="row justify-content-center">
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item text-light scoretable text-center" aria-disabled="true"><b>Leading board of Good level</b></li>
                            { goodScore() }
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item text-light scoretable text-center" aria-disabled="true"><b>Leading board of Expert level</b></li>
                            { expertScore() }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}