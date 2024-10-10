import LoopingBg from '../components/looping-bg';
import Intro from '@/components/intro';
import About from '@/components/about';
import Volunteering from '@/components/volunteering';
import Projects from '@/components/projects';
import TechUsed from '@/components/tech-used';

export default function Portfolio() {
  return (
    <LoopingBg img={'SPACE'}>
      <LoopingBg img={'STARS-SMALL'}>
        <LoopingBg img={'STARS-LARGE'}>
          <div className='h-screen overflow-hidden animate-overflow'>
            <Intro />
            <About />
            <Volunteering />
            <Projects />
            <TechUsed />
          </div>
        </LoopingBg>
      </LoopingBg>
    </LoopingBg>
  );
}
