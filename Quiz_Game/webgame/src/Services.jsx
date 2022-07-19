import http from "./HttpCommon";

class Service {
    //Login
    Login(data) {
        return http.post("/User/Login", data);
    }

    SocialLogin(email) {
        return http.get(`/User/Social/${email}`);
    }

    Register(data) {
        return http.post("/User/Register", data);
    }

    //Score
    ScoreGet(id) {
        return http.get(`/Score/${id}`);
    }

    ScoreLearning() {
        return http.get("/Score/Learning");
    }

    ScoreFair() {
        return http.get("/Score/Fair");
    }

    ScoreGood() {
        return http.get("/Score/Good");
    }

    ScoreExpert() {
        return http.get("/Score/Expert");
    }

    ScoreUpdate(data) {
        return http.put("/Score", data);
    }

    //
    QuizGet(text){
        return http.get(`Quiz/${text}`);
    }
}

export default new Service();