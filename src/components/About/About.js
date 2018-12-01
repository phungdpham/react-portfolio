import React, { Component } from 'react';
import './about.css';

const About = () => {
    return (
        <div class="container" style="margin-bottom: 25%">
            <div class="p-3 bg-white text-dark mt-3">
                <div class="row my-2 mx-0" style="border-bottom: 2px solid grey">
                    <h2 class="col-md-12 font-weight-bold text-info pb-2">About Me</h2>
                </div>
                <div class="row my-4">
                    <div class="col-md-12">
                        <div class="media mb-3rem">

                            <div class="media-body">
                                <p>My name is Phung Pham. I am a saleperson in Orlando who loves to work with my clients.
                                    They are salon owners, most of whom like to build business website and applicaiton for
                                    their salon . This is the reason I like to take UCF coding bootcamp to become web
                                developer who can create beautiful websites for my clients.</p>
                                <p>I have a business background, so I started finding a little bit difficulty in learning
                                    technician things such as building website but I will do my best. This is an
                                    opportunity for me to change my career or having another job besides my current sale
                                job.</p>
                                <p>After finishing this coding class, I hope I can use my coding skills to make super fast,
                                and super fun websites. Also, I am looking for meeting and knowing new friends</P>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;