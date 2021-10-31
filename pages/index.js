import dynamic from "next/dynamic";
import { NextSeo } from 'next-seo';

// import { useInView } from 'react-intersection-observer';
// const Page = () => (
//   <>
    
//   </>
// );

// export Page;

const DynamicComponent = dynamic(() => import("../components/init"));
const DynamicComponent2 = dynamic(() => import("../components/portremix"));
const DynamicComponent3 = dynamic(() => import("../components/member"));

function Home() {
  return (
    <div>
      <NextSeo
      title="JaklaewAudio"
      description="All remix songs from music inspiration."
    />
      <div style={{ position: "relative", height: '100vh' }}>
        <DynamicComponent />
      </div>
      <div id='portremix' style={{ position: "relative", height: '100vh' }}>
        <DynamicComponent2 />
      </div>
      {/* <div id='member' style={{ position: "relative", height: '100vh' }}>
        <DynamicComponent3 />
      </div> */}
    </div>
  );
}

export default Home;
