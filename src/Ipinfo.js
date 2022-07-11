import React from "react";
import { getIP } from "./apiFetcher.js"
import { useState } from "react";

export default function Ipinfo(){
    const [response, setResponse] = useState('');
    if(response === ""){
        getIP().then(res => setResponse(res));
    }
    return(
        <div className="ipInfo">
            <h4>My IP address is:</h4>
            <p>{ response.ip }</p>
            <h4>My IP information:</h4>
        </div>
    )     
}