import LoopingBg from '../components/looping-bg';
import Intro from '@/components/intro';
import About from '@/components/about';
import Volunteering from '@/components/volunteering';
import Projects from '@/components/projects/projects';
import TechUsed from '@/components/tech/tech-used';
import Connect from '@/components/connect/connect';


export default function Portfolio() {
  return (
    <LoopingBg img={'SPACE'}>
      <LoopingBg img={'STARS-SMALL'}>
        <LoopingBg img={'STARS-LARGE'}>
          <div className='h-screen overflow-auto'>
            <Intro />
            <About />
            <Volunteering />
            <Projects />
            <TechUsed />
            <Connect/>
          </div>
        </LoopingBg>
      </LoopingBg>
    </LoopingBg>
  );
}
