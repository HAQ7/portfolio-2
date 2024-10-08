import LoopingBg from '../components/looping-bg';
import Intro from '@/components/intro';
import About from '@/components/about';

export default function Portfolio() {
  return (
    <LoopingBg img={'SPACE'}>
      <LoopingBg img={'STARS-SMALL'}>
        <LoopingBg img={'STARS-LARGE'}>
          <div className='h-screen overflow-hidden animate-overflow'>
            <Intro />
            <About />
          </div>
        </LoopingBg>
      </LoopingBg>
    </LoopingBg>
  );
}
