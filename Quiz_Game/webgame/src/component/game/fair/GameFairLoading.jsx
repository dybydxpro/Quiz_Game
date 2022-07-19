import React, {useEffect, useState} from "react";

export default function GameFairLoading(){
    const [progress, updateProgress] = useState(0);

    useEffect(()=>{
        const intervel = setInterval(()=>{
            updateProgress(oldValue =>{
                if(oldValue == 100){
                    clearInterval(intervel);
                    redirectToGame();
                }
                const newValue = oldValue + 10;
                return newValue;
            });
        }, 400);
    },[]);

    function redirectToGame(){
        window.location.replace("/gamelearning");
    }

    return(
        <div className="bg">
            <div className="container">
                <div className="text text-center">
                    <p className="ptext">FISH WINNER!</p>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="progress ft">
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" id="progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        </div>
    );
}