import React from "react";
import "../styles/App.css";
import "../styles/Login.css"
import { Routes, Route, Link } from "react-router-dom";
import LoginCard from "../components/LoginCard";
import Login from "../components/Login"


export default function LoginPage() {
    return(
        <>
{            /*<Login />*/
}            <LoginCard />
       </>
    )
}