//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import imageMeta from "../image/meta.png";
import Services from '../Services';

const appKey = "785361432907580";

// oneaid-357104

export default function FacebookLoginButton(){
    const responseFacebook = (response) => {
        console.log(response);
        var email = response.email;
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
      }

    return(
        <div>
            <FacebookLogin
                appId={appKey}
                autoLoad={false}
                fields="name,email"
                callback={responseFacebook}
                render={renderProps => (
                    <img src={imageMeta} alt="" onClick={renderProps.onClick} style={{ height: "50px", width: "50px" }}/>
                )}
            />
        </div>
    );
}