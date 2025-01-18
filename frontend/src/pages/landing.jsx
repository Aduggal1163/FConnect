import React from 'react'
import "../App.css"
import image from "./Untitled.png"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>FaceConnect</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                       <button className='loginbutton'>Login</button>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div style={{fontSize:"1.5rem"}}>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by FaceConnect🫂</p>
                    <div role='button'>
                        <Link to={"/auth"}>Lets Connect</Link>
                    </div>
                </div>
                <div>

                    <img src={image} alt=""  style={{height:"600px"}}/>

                </div>
            </div>



        </div>
    )
}