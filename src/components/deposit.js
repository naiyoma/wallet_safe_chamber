import React from "react";
import { useState } from "react";
import "../App.css"



function DepositForm() {
    const [deposit_amount, setDepositAmount] = useState("");
    const [wallet, setWallet] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://safe-chamber-55286.herokuapp.com/wallet/deposit", {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                },
                body: JSON.stringify({
                    deposit_amount: deposit_amount,
                    wallet: wallet,
                })
            }
            );
            let resJson = await res.json();
            if (res.status === 200) {
                setDepositAmount("");
                setWallet("");
                setMessage("User created successfully");
            } else {
                setMessage("some error occured");
            }
        } catch (err) {
            console.log(err)
        }
    };
    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={deposit_amount}
                    placeholder="Amount"
                    onChange={(e) => setDepositAmount(e.target.value)}
                />
                <input 
                    type="text"
                    value={wallet}
                    placeholder="wallet"
                    onChange={(e) => setWallet(e.target.value)}
                />
                <button type="submit" className="btn">Deposit</button>
                <div className="message">{message ? <p>{message}</p>: null}</div>
            </form>
        </div>
    )
    
}

export default DepositForm;