import React from "react";
import LoginCard from "./LoginCard";
import "../styles/HomePage.css"

export default function Modal({ isOpen, onClose }) {
    return (
        isOpen && (
            <div className="modal">
                <div className="modal--content">
                    <LoginCard closeModal={onClose}/>
                 </div>
            </div>
        )
    );
}