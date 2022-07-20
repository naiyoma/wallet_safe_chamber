import React, { useState } from "react";
import '../App.css'


function WithdrawForm() {
    const [amount, setAmount] = useState();
    const [wallet, setWallet] = useState();
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://safe-chamber-55286.herokuapp.com/wallet/withdraw", {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                },

                body: JSON.stringify({
                    amount: amount,
                    wallet: wallet,
                })
            }
            );
            let resJson = await res.json();
            if(res.status === 200) {
                setAmount("");
                setWallet("");
                setMessage("withdrawn amount successfully");
            } else {
                setMessage("some error occured");
            }
        } catch (err) {
            console.log(err)
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
                    value={wallet}
                    placeholder="Wallet"
                    onChange={(e) => setWallet(e.target.value)}
                />
                <button type="submit" className="btn">withdraw</button>
                <div className="message">{message ? <p>{message}</p>: null}</div>
            </form>
        </div>
    )
}

export default WithdrawForm;