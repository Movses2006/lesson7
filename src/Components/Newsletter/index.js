import Layout from "../Layouts";
import "./style.css";
import { useState } from "react";

const Newsletter = () => {
    const [info, setInfo] = useState({
        userName: '',
        userLastName:'',
        userEmail: ''
    })

    const sendLetters = () => {
        console.log('info', info)
    };

    const handleChange = (e, field) => {
        setInfo({...info, [field]: e.target.value  })
    }
    return (
        <div>
            <Layout>
                <form className="newslatter" onSubmit={(e) => e.preventDefault()}>
                    <h2>Our Newsletter</h2>
                    <label htmlFor="nameInput">Name</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={info.userName}
                        onChange={(e) => handleChange(e, 'userName')}
                    />
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input
                        type="text"
                        id="lastNameInput"
                        value={info.userLastName}
                        onChange={(e) => handleChange(e, 'userLastName')}
                    />
                    <label htmlFor="emailInput">Email</label>
                    <input
                        type="email"
                        id="emailInput"
                        value={info.userEmail}
                        onChange={(e) =>handleChange(e, 'userEmail')}
                    /><br />
                    <button onClick={() => sendLetters()}>Submit</button>
                </form>
            </Layout>
        </div>
    );
};

export default Newsletter;