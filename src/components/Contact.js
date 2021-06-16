import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./css/contact.css"

export const Contact = () => {

    const history = useHistory();

const [user, setUser] = useState({
    name:"", email:"", message:""
});


let name,value;
const handleInputs = (e) =>{
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
}

const PostData = async (e) =>{
    e.preventDefault();

    const {name, email, message} = user;

    const res = await fetch('/contact', {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name, email, message
        })
    });

    const data = await res.json();

    if( data.status === 422 || !data){
        alert("data not stored");
        console.log("not done")
    } else{
        alert("data stored");
        console.log("done");

        history.push("/")
    }
}

    return (
        <section id="form"> 
            <div className="container box mb-3">
                <h1>Tell me, What you Truly Desire..</h1>
                <form method="POST">
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="name" placeholder="Your Name"  value= {user.name} onChange ={handleInputs} />
                    <input type="email" className="form-control" id="exampleFormControlInput" name="email" placeholder="E-mail" value= {user.email} onChange ={handleInputs} />
                    <textarea className="form-control"  name="message" id="exampleFormControlTextarea2" rows="3" placeholder="Your Wish" value= {user.message} onChange ={handleInputs}></textarea>
                    <input type="submit" value="Submit" className="btn btn-danger my-4 ml-2" />
                </form>
            </div>
        </section>
    )
}
