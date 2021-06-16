import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "./css/style.css"
import ig from "./imgs/ig.png"
import yt from "./imgs/yt.png"
import fb from "./imgs/fb.png"

// import {
//     Link
// } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <h1 className="heading">Dark Night Studios</h1>
                    <div className="container">
                        <p>Dark Night Studios, A place where you can find horror stories, mysteries and more...
                        It's heaven for Horror lovers.
        Do check our social handles, <b>Link Below</b>
                        </p>
                    </div>
                    <div className="container">
                        <div className="logos d-flex justify-content-center">
                            <a href="https://www.youtube.com/channel/UC7Py2okZUHV4jSMRH6nJVvA"><img className="yt" src={yt} alt="youtube" /></a>
                            <a href="https://www.facebook.com/darknightstudios.dns"><img src={fb} alt="facebook" /></a>
                            <a href="https://www.instagram.com/dark_night_studios.dns/"><img className="ig" src={ig} alt="instagram" /></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="ct1">MYSTERY CASES</h1>
                    <div className="d-flex container justify-content-center flex-wrap cate1">
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/dFHGsWm1FGg" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/dFHGsWm1FGg" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/dFHGsWm1FGg" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/dFHGsWm1FGg" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/dFHGsWm1FGg" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/dFHGsWm1FGg" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container">
                    <h1 className="ct1">PODCAST</h1>
                    <div className="d-flex container justify-content-center flex-wrap cate1">
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/My-pV3kric8" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/My-pV3kric8" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/My-pV3kric8" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/My-pV3kric8" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/My-pV3kric8" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="350" height="325" src="https://www.youtube.com/embed/My-pV3kric8" title="YouTube video player" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="social container d-flex justify-content-center flex-wrap">
                    <div className="container first">
                        <h1>Social Links</h1>
                        <i className="fa fa-youtube i1"> <a href="https://www.youtube.com/channel/UC7Py2okZUHV4jSMRH6nJVvA">Dark Night Studios</a>  </i>
                        <i className="fa fa-facebook-square i2">  <a href="https://www.facebook.com/darknightstudios.dns"> darknightstudios.dns</a></i>
                        <i className="fa fa-instagram i3"> <a href="https://www.instagram.com/dark_night_studios.dns/"> dark_night_studios.dns</a></i>
                    </div>
                    <div className="container second">
                        <h1>Founders</h1>
                        <i class="fa fa-user"> <span> Vivek Rawat (Main Vocalist)</span></i>
                        <i class="fa fa-user"> <span>Kunal Arora (Script Writer)</span></i>
                    </div>
                </div>
            </div>
        </>
    )
}
