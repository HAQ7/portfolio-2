import Stats from './about/stats';
import Title from './common/title';
import userIcon from '@/assets/icons/user.svg';

export default function About() {
  return (
    <section className="grid lg:grid-cols-2 lg:gap-0 gap-24 bg-gradient-to-t from-black via-transparent to-black min-h-screen lg:py-0 py-32">
      <div className="flex flex-col justify-center items-center p-4">
        <div className="grid gap-10 place-items-center lg:place-items-start">
          <Title image={userIcon}>About me</Title>

          <div className="max-w-96 grid gap-3 2xl:text-xl text-lg lg:text-start text-center">
            <p>
              A King Saud University Software Engineering student passionate in
              Web development.
            </p>
            <p>Awarded the Dean’s Award for Outstanding Academic Excellence.</p>
            <p>
              Developed numerous web applications leveraging cutting-edge
              technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <Stats/>
      </div>
    </section>
  );
}
