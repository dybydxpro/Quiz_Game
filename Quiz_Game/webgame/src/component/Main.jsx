import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import bg from "../image/bg.png";

export default function Main(){
    const navigate = useNavigate();
    useEffect(() => {
        

        if(!(Number(sessionStorage.getItem("userID")) > 0)){
            alert("Please login to the system!");
            navigate("/");
        }
    },[]);

    function gameLearning(){
        sessionStorage.setItem("Time", 100);
        sessionStorage.setItem("score", 0);
        window.location.replace("/gamelearning/loading");
    }
    function gameFair(){
        sessionStorage.setItem("score", 0);
        window.location.replace("/gamelearning/loading");
    }
    function gameGood(){
        sessionStorage.setItem("score", 0);
        window.location.replace("/gamelearning/loading");
    }

    function gameExpert(){
        sessionStorage.setItem("score", 0);
        window.location.replace("/gamelearning/loading");
    }

    return(
        <div className="row background">
            <div className="bg-image" style={{ backgroundImage: `url(${bg})`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="col">
                    <div className="formbg shadow bg-dark rounded-3">
                        <h1 className='h1 d-flex justify-content-center text-light'>Welcome</h1>
                        <br/>
                        <div className="form-floating mb-3">
                            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-body">
                                            <div className="form-floating mb-4 d-flex justify-content-center">
                                                <p className="h5 text-light">Choose Defficulty Level</p>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <button type="button" onClick={() => gameLearning()} className="btn button88">Learning</button>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <button type="button" onClick={() => gameFair()} className="btn button88">Fair</button>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <button type="button" onClick={() => gameGood()} className="btn button88">Good</button>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <button type="button" onClick={() => gameExpert()} className="btn button88">Expert</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="button" className="btn button1"  data-bs-toggle="modal" href="#exampleModalToggle3" value="New game"/>
                        </div>
                        <div className="form-floating mb-3">
                            <a href="/score" className="btn button1">Score board</a>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}