import React, { useState } from "react";
import axios from "axios";
import './Email.css';

function Email() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/f/mjvjjbzy",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    function submitEmailForm(form) {
        let obj = new XMLHttpRequest();
        obj.onreadystatechange = function () {
            if (obj.readyState == 4) {
                if (obj.status === 200) {
                    var x = JSON.parse(obj.responseText);
                    alert(x.message);
                    
                }
                else {
                    alert("HMLHttp Status: " + obj.status + "/ " + obj.statusText);
                }
            }
        }
        obj.open("post", form.action, true);
        obj.setRequestHeader("Content-Type", "application/json");
        obj.send(JSON.stringify({email: form.email.value}));
        return false;
    }
    return (
        <div>
             <div className="form-div">
                <form action="/ajax/email" className="actual-form" method="POST" onSubmit="return submitEmailForm(this);">
                  <input id="email" type="email" name="email" className="input" placeholder="Email@YourAddress.com" required />
                  <button className="Contact-Button" type="submit" disabled={serverState.submitting}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Email;