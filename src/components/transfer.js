import React from "react";
import { useState } from "react";
import '../App.css';


function Transfer() {
    const [amount, setAmount] = useState("");
    const [sender, setSender] = useState("");
    const [receiver, setReceiver]= useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("https://safe-chamber-55286.herokuapp.com/wallet/transfer", {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            },
            body: JSON.stringify({
                amount:amount,
                sender: sender,
                receiver: receiver
            })
        }
        );
        let resJson = await res.json();
        if(res.status === 200) {
            setAmount("");
            setSender("");
            setReceiver("");
            setMessage("Transfer succeful");
        } else {
            setMessage("some error occured");
        }
    } catch (err) {
        console.log(err);
    }
};
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    value={sender}
                    placeholder="Sender"
                    onChange={(e) => setSender(e.target.value)} 
                />
                <input
                    type="text"
                    value={receiver}
                    placeholder="Receiver"
                    onChange={(e) => setSender(e.target.value)}
                />
                <button type="submit" className="btn">Send</button>
                <div className="message">{message ? <p>{message}</p>: null}</div>
            </form>
        </div>
    )
}

export default Transfer;
