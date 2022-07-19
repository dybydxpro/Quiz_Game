import React, { useState } from "react";
import Service from "../Services";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import bg from "../image/bg.png";

export default function Login(){
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        "email": "",
        "password": ""
    });
    const [register, setRegister] = useState({
        "userId": 0,
        "firstname": "",
        "lastname": "",
        "email": "",
        "password": "",
        "gender": "",
        "dob": ""
    });

    function loginFunc(){
        var reps = ({
            "email": login.email,
            "password": login.password
        });
        Service.Login(reps)
        .then(({data})=>{
            console.log(data);
            sessionStorage.setItem('userID', data.userId);
            sessionStorage.setItem('userName', data.firstname+" "+data.lastname);
            navigate("/main");
        }).catch(({response})=>{
            alert("Login failed!");
            console.log(response);
        })
    }

    function registerFunc(){
        var reps = ({
            "userId": 0,
            "firstname": register.firstname,
            "lastname": register.lastname,
            "email": register.email,
            "password": register.password,
            "gender": register.gender,
            "dob": dateToDateTime(register.dob)
        });
        Service.Register(reps)
        .then(({data})=>{
          console.log(data);
          navigate("/");
          setRegister({
            "userId": 0,
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": "",
            "gender": "",
            "dob": ""
          });
          alert("Registation Successed!");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    const loginHandle = async (e) => {
        const newData = {...login};
        newData[e.target.id] = e.target.value;
        setLogin(newData);
        console.log(newData);
    }

    const registerHandle = async (e) => {
        const newData = {...register};
        newData[e.target.id] = e.target.value;
        setRegister(newData);
        console.log(newData);
    }

    function dateToDateTime(vals){
        const dt = vals.split("-");
        const dtv = new Date(dt[0], Number(dt[1])-1, Number(dt[2])+1, 0,0,0,0);
        return dtv;
    }

    //Login
    const [loginModel, setLoginModel] = useState(false);

    const handleLoginClose = () => setLoginModel(false);
    const handleLoginShow = () => setLoginModel(true);
        
    //Register
    const [registerModel, setRegisterModel] = useState(false);

    const handleRegisterClose = () => setRegisterModel(false);
    const handleRegisterShow = () => setRegisterModel(true);


    return(
        <div className="row background" style={{overflow: "hidden"}}>
            <div className="bg-image" style={{ backgroundImage: `url(${bg})`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="col">
                    <div className="formbg shadow bg-dark rounded-3">
                        <h1 className='h1 d-flex justify-content-center text-light'>Welcome</h1>
                        <br/>
                        <div className="form-floating mb-3">
                            {/* Login Form */}
                            <Modal show={loginModel} onHide={() => setLoginModel(false)} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="email" onChange={(e) =>loginHandle(e)} placeholder="Email" required/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="password" onChange={(e) =>loginHandle(e)} placeholder="Password" required/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={ () => {handleLoginClose(); handleRegisterShow();}}>Register</Button>
                                    <Button onClick={ () => {loginFunc(); handleLoginClose();}}>Login</Button>
                                </Modal.Footer>
                            </Modal>
                            { /* Registation Form */ }
                            <Modal show={registerModel} onHide={() => setRegisterModel(false)} aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" onChange={(e) =>registerHandle(e)} id="firstname" placeholder="First Name" required/>
                                            <label htmlFor="firstname">First Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" onChange={(e) =>registerHandle(e)} id="lastname" placeholder="Last Name" required/>
                                            <label htmlFor="lastname">Last Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" onChange={(e) =>registerHandle(e)} id="email" placeholder="Email" required/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" onChange={(e) =>registerHandle(e)} id="password" placeholder="Password" required/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <select className="form-select form-select" id="gender" onChange={(e) => registerHandle(e)}  aria-label=".form-select-sm example">
                                                <option value="">Select one</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                            <label htmlFor="gender" className="form-label">Gender</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="date" className="form-control" id="dob" onChange={(e) =>registerHandle(e)} placeholder="Birthday" required/>
                                            <label htmlFor="dob">Birthday</label>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={ () => {handleRegisterClose(); handleLoginShow();}}>Login</Button>
                                    <Button onClick={ () => {registerFunc(); handleRegisterClose();}}>Register</Button>
                                </Modal.Footer>
                            </Modal>
                            <input type="button" className="btn button1" onClick={() => handleLoginShow()} value="Start"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}