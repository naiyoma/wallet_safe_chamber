import React, {useState} from 'react';
import '../App.css'


function RegistrationForm() {

    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    // const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("https://safe-chamber-55286.herokuapp.com/rest-auth/registration/", {
            // console.log("Post-Data")
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',

            },
            // mode: 'no-cors',
            body: JSON.stringify({
            email: email,
            password1: password1,
            password2: password2,
            }),
          
        }
        );
        
        let resJson = await res.json();
        if (res.status === 200) {
            setEmail("");
            setPassword1("");
            setPassword2("");
            setMessage("User created successfully");
        } else {
            setMessage("Some error occured");
        }
        } catch (err) {
        console.log(err);
        }
    };
    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={password1}
                    placeholder="Password"
                    onChange={(e) => setPassword1(e.target.value)}
                />
                <input
                    type="text"
                    value={password2}
                    placeholder="ConfirmPassword"
                    onChange={(e) => setPassword2(e.target.value)}
                />

                <button type="submit" className="btn">Register</button>
                <div className="message">{message ? <p>{message}</p>: null}</div>
            </form>
              
      </div>    
    )
}

export default RegistrationForm;