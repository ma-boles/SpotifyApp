import React from "react";
import right from "../images/chevron-right-solid.svg";
import left from "../images/chevron-left-solid.svg";
import "../styles/AudioBooks.css"

export default function AudioBooksPage () {
    return (
        <>
        <section className="audiobooks--page">
            <aside className="div--header">
                <nav className="audiobooks--nav">
                    <img src={left} className='audiobooks--arrowLeft' alt="back"></img>
                    <img src={right} className='audiobooks--arrowRight' alt="next"></img>
                </nav>
                <h1 className="h1--audiobooks">
                    Audiobooks
                </h1>
                <div className="audiobooks">
books
                </div>

            </aside>
            <hr></hr>

        </section>
        </>
    )
}