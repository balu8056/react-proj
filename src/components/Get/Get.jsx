import "axios";
import { useEffect, useState } from "react";
import urls from "../../helpers/urls.json";
import axios from "axios";

const Get = () =>{
    const [getRes, setGetRes] = useState({})
    const [tryAgain, setTryAgain] = useState(false)

    useEffect(()=>{
        document.title = "Get page"
    }, [])

    useEffect(()=>{
        axios.get(`${urls.baseUrl}${urls.get}`)
            .then(res=>{
                setGetRes(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [tryAgain])

    return <h1>
        Hello from Get {getRes.message}

        <button onClick={()=>{setTryAgain(prev=>!prev)}}>Get again</button> 
    </h1>

};

export default Get;