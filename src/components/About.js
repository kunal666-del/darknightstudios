import React from 'react'
import "./css/about.css"
import vk from './imgs/vk.jpeg'
import ka from './imgs/ka.jpeg'

export const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h1 className="mainh">Dark Truth About Us</h1>
                <p>At Dark Night studios, our only purpose is to scare you till end, without any mercy and kindness.</p>
                <p><b>Disclaimer:- </b>This channel is not for light hearted persons...</p>

            </div>
            <div className="container founders">
                <h1>Founders</h1>
                <div className="imgs">
                    <img src={vk} alt="vk rawat" />
                    <h4>Vivek Rawat</h4>
                    <p>A person with dignity and respect, Always formal and always do work in an organised manner. If you want to get along with him, just be formal to him.</p>
                </div>
                <div className="imgs">
                    <img src={ka} alt="Kunal Arora" />
                    <h4>Kunal Arora</h4>
                    <p>A crazy person, different approach to work, always ready to explore new things and try new approaches. Entrepreneural mindset. If you want to get along with him then just be yourself.</p>
                </div>
            </div>
            <div className="container d-flex flex-wrap justify-content-end">
                <div className="quote">
                    <p><i>"  People don't have power over you, you give it to them. You just have to take it back from them.  "</i>
                        <p className="naming">-Lucifer</p>
                    </p>
                </div>
            </div>
        </div>
    )
}
