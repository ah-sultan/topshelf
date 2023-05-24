import React from 'react'
import BestWeed from '../component/best-weed/BestWeed'
import Brand from '../component/brand/Brand'
import ChooseWeed from '../component/choose-weed/ChooseWeed'
import Cta from '../component/cta/Cta'
import Education from '../component/education/Education'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Help from '../component/help/Help'
import Hero from '../component/hero/Hero'
import Notification from '../component/notification/Notification'
import RecentAdd from '../component/recent-add/RecentAdd'
import Reffer from '../component/reffer/Reffer'
import Services from '../component/services/Services'
import Testimonial from '../component/testimonial/Testimonial'
import WhyUs from '../component/why-us/WhyUs'




function Home() {
    return (
        <div>
            <Notification />
            <Header />
            <Hero />
            <Services />
            <BestWeed />
            <Testimonial/>
            <ChooseWeed />
            <Reffer />
            <Help />
            <WhyUs/>
            <RecentAdd/>
            <Brand/>
            <Education/>
            <Cta/>
            <Footer/>
        </div>
    )
}

export default Home