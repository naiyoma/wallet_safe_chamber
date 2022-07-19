import React, {useState} from 'react';
import '../App.css'

function WalletForm() {
    const [balance, setBalance] = useState("");
    const [account_name, setAccountName] = useState("");
    const [account_number, setAccountNumber] = useState("");
    const [bank, setBank] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://safe-chamber-55286.herokuapp.com/wallet/create", {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    
                },
                body: JSON.stringify({
                    balance: balance,
                    account_name: account_name,
                    account_number: account_number,
                    bank: bank,
                    phone_number: phone_number,
                    password: password,
                    user: user,
                })
            }
            );
            let resJson = await res.json();
            if(res.status === 200) {
                setBalance("");
                setAccountName("");
                setAccountNumber("");
                setBank("");
                setPhoneNumber("");
                setPassword("");
                setUser("");
                setMessage("User created successfully");
            } else {
                setMessage("some error occured");
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
                    value={balance}
                    placeholder="Balance"
                    onChange={(e) => setBalance(e.target.value)}
                />
                <input 
                    type="text"
                    value={account_name}
                    placeholder="account name"
                    onChange={(e) => setAccountName(e.target.value)}
                />
                <input
                    type="text"
                    value={account_number}
                    placeholder="account number"
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
                <input
                    type="text"
                    value={bank}
                    placeholder="bank name"
                    onChange={(e) => setBank(e.target.value)}
                />
                <input 
                    type="text"
                    value={phone_number}
                    placeholder="phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn">Register</button>
                <div className="message">{message ? <p>{message}</p>: null}</div>
            </form>
        </div>
    )
}

export default WalletForm;