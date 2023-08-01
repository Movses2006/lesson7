// import Layout from "../Layouts";
// import "./style.css"
// import { useState, useEffect } from "react";

// const Newsletter = () => {
//     const [userName, setUserName] = useState ("");
//     const [userLastName, setUserLastName] = useState ("");
//     const [userEmail, setUserEmail] = useState ("");

//     useEffect(() => { 
//         localStorage.setItem("Username",JSON.stringify(userName))
//     });
//     useEffect(() => { 
//         localStorage.setItem("Lastname",JSON.stringify(userLastName))
//     });
//     useEffect(() => { 
//         localStorage.setItem("Email",JSON.stringify(userEmail))
//     });
//     const sendLetters = () => {
        
//     }
//     return(
//         <>
//          <Layout>
//                 <form className="newslatter" onSubmit = {(e) => e.preventDefault()}>
//                     <h2>Our Newsletter</h2>
//                     <label for="nameInput">Name</label>
//                     <input type="text"
//                     id="nameInput"
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                     placeholder="Username"/>
//                     <label for="lastNameInput">Last Name</label>
//                     <input type="text" 
//                     id="lastNameInput" 
//                     value={userLastName}
//                     onChange={(e) => setUserLastName(e.target.value)}
//                     placeholder="Last Name"/>
//                     <label for="emailInput">Email</label>
//                     <input type="email" 
//                     id="emailInput" 
//                     value={userEmail}
//                     onChange={(e) => setUserEmail(e.target.value)}
//                     placeholder="Email"/><br/>
//                     <button onClick={() => sendLetters()}>Submit</button>
//                 </form>
//          </Layout>
//         </>
//     )
// }
// export default Newsletter;
import Layout from "../Layouts";
import "./style.css";
import { useState } from "react";

const Newsletter = () => {
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const sendLetters = () => {
        const givenData = JSON.parse(localStorage.getItem("UserData")) || [];

        const newData = {
            username: userName,
            lastname: userLastName,
            email: userEmail,
        };

        const updatedData = [...givenData, newData];
        localStorage.setItem("UserData", JSON.stringify(updatedData));
        setUserName("");
        setUserLastName("");
        setUserEmail("");
    };

    return (
        <div>
            <Layout>
                <form className="newslatter" onSubmit={(e) => e.preventDefault()}>
                    <h2>Our Newsletter</h2>
                    <label htmlFor="nameInput">Name</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input
                        type="text"
                        id="lastNameInput"
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                    />
                    <label htmlFor="emailInput">Email</label>
                    <input
                        type="email"
                        id="emailInput"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    /><br />
                    <button onClick={() => sendLetters()}>Submit</button>
                </form>
            </Layout>
        </div>
    );
};

export default Newsletter;
