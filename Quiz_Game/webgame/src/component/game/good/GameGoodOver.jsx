import React from "react";

export default function GameGoodOver(){
    return(
        <div>
            <div className="goBG">
                <div className="goMsgBox shadow-lg">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <p className="modelParaGraph">
                                Game Over
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-end">
                            <a href="/main" className="btn btn-primary ">Return to Main Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}