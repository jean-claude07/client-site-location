import React, { Component } from 'react'
import About from '../about/About'
import Call from './call_section/Call'
import Featured from './featured/Featured'
import Intro from './Intro'
import Portfolio from './portfolio/Portfolio'
import Service from './service/Service'
import Teams from './teams/Teams'
import Testimonial from './testimonial/Testimonial'
import Use from './use_section/Use'

export class HomePage extends Component {
    render() {
        return (
            <>
               <Intro/> 
               <About/>
               <Service/>
               <Use/>
               <Call/>
               <Featured/>
               <Portfolio/>
               <Testimonial/>
               {/* <Teams/> */}
            </>
        )
    }
}

export default HomePage
