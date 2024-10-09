import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
   <Element name="About"><div className=" container-fluid aboutcon text-center  w-100vh" style={{paddingTop:'80px' }}>
   <h1>About Us</h1>
   <div className="container aboutinner bg-opacity-80  p-5 text-white " style={{ height: '80%', margin: '0 auto', overflowY: 'auto' }}>
{/* <!-- Company Overview --> */}

<section >
   <h2 className="section-title">Company Overview</h2>
   <p>BMW, or Bayerische Motoren Werke AG, is a German multinational company known for manufacturing luxury vehicles and motorcycles. Established in 1916, BMW has become a symbol of performance and quality.</p>
</section>

{/* <!-- History Section --> */}
<section>
   <h2 className="section-title">Our History</h2>
   <p>Founded as a manufacturer of aircraft engines, BMW shifted to motorcycle production in 1923 and automobiles in 1928. Over the decades, BMW has built a reputation for engineering excellence and innovation.</p>
</section>

{/* <!-- Values Section --> */}
<section>
   <h2 className="section-title">Our Values</h2>
   <p>At BMW, we believe in sustainability, innovation, and performance. We strive to create vehicles that not only provide an exhilarating driving experience but also prioritize environmental responsibility.</p>
</section>


</div></div></Element> 
    
  )
}

export default About;
