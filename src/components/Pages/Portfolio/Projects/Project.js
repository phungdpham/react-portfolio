import React from 'react';
import './project.css';

// importing project images
import TrainScheduler from '../../../../assets/images/salon-web.png';


const Practices = () => {
    return (
        <div className="row">
            <div className='col-md-12' id='practices'>
                <div className='panel panel-default'>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div id='practice1'>
                                    <img className="group-img" src={TrainScheduler} alt="train scheduler"></img>
                                    <a href='http://puha.gosalon.site' target='_blank'>
                                        <div className='img-overlay-content'>
                                            <div className='app-name'>
                                                <h5 className='h5-text'>Salon Websites</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <div className='project-description'>
                                    <h6>Description</h6>
                                    <p>
                                        Salon Wesite is the project that applies ReactJS to create multiple
                                        templetes of salon webiste that serves for salon business customers.
                                    </p>
                                    <h6>Technologies</h6>
                                    <ul>
                                        <li>ReactJs, Javascript, HTML5, CS3</li>
                                        <li>NodeJs, NPM Packages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='practice-div'>
                    {/* <div className='practice'>
						<img className="group-img" src={TrainScheduler} alt="train scheduler"></img>
						<a href='http://puha.gosalon.site' target='_blank'>
							<div className='img-overlay-content'>
								<div className='app-name'>
									<h5 className='h5-text'>Salon Websites</h5>
								</div>
							</div>
						</a>
					</div> */}
                </div>
            </div>
        </div>

    )
}

export default Practices;