import Title from './title';
import userIcon from '@/assets/user.svg';
import Image from 'next/image';
import statsBg from '@/assets/stats.svg'

export default function About() {
  return (
    <section className="grid sm:grid-cols-2 bg-gradient-to-t from-black via-transparent to-black min-h-screen">
      <div className='grid place-items-center'>
        <Title image={userIcon}>About me</Title>
      </div>
      <div className='grid place-items-center'>
        <Image className='w-44' src={statsBg} alt='deco'/>
      </div>
    </section>
  );
}
 