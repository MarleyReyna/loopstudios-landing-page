import React from 'react';
import './Main.scss';
import interactive from './mobile-assets/image-interactive.jpg'

const Main = () => {

    const creationTitles = [
        'Deep Earth',
        'Night Arcade',
        'Soccer Team VR',
        'The Grid',
        'From up above VR',
        'Pocket Borealis',
        'The Curiosity',
        'Make it Fisheye'
    ]

    return (
        <main>
            <section className='interactive'>
                <img src={interactive} alt='' aria-hidden='true' className='interactive-img'/>
                <div>
                    <h2>
                        The leader in interactive VR
                    </h2>
                    <p>
                        Founded in 2011, Loopstudios has 
                        been producing world-class virtual 
                        reality projects for some of the best 
                        companies around the globe. Our 
                        award-winning creations have 
                        transformed businesses through digital 
                        experiences that bind to their brand.
                    </p>
                </div>
            </section>
            <section className='creations'>
                <div className='creation-header'>
                    <h3>
                        Our creations
                    </h3>
                    <button>
                        See all
                    </button>
                </div>
                <ul>
                    {creationTitles.map((item, index) => {
                        return(
                            <li className={'creation' + index} 
                            key={index}>
                                <div className='filter'>
                                    <h4>{item}</h4>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button className='bottom-button'>
                        See all
                    </button>
            </section>
        </main>
    );
}
 
export default Main;