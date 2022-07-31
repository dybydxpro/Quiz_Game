import { GoogleLogin } from 'react-google-login';
import imageGoogle from "../image/google.png";
import Services from '../Services';

const clientId = "581086915737-vromsvj2jkfogiq34kkdg1ev98ukrr1d.apps.googleusercontent.com";

// oneaid-357104

export default function GoogleLoginButton(){
    const onSuccess = (res) => {
        var email = res.profileObj.email;
        Services.SocialLogin(email)
        .then(({data})=>{
            console.log(data);
            sessionStorage.setItem("userID", data.userId);
            sessionStorage.setItem("userName", data.userName);
            window.location.replace("/main");
        }).catch(({response})=>{
            alert(response);
            console.log(response);
        });
        console.log(res);
    }

    const onFailure = (res) => {
        console.log(res);
        alert("Login failed!");
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
                render={renderProps => (
                    <img src={imageGoogle} alt="" onClick={renderProps.onClick} style={{ height: "50px", width: "50px" }}/>
                )}
            />
        </div>
    );
}