import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedCounter from './components/AnimatedCounter';
import { birthday, calculateTimeLeft } from './utility/calculateBirthday';
import { getRandomColor } from './utility/discoBackground';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = calculateTimeLeft(birthday);
      if (updatedTime === null) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        setTimeLeft(updatedTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft !== null) return;
    const interval = setInterval(() => {
      document.getElementById('background').style.backgroundColor =
        getRandomColor();
    }, 400);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className='bg-black'>
      <div
        className={`h-screen flex justify-center items-center flex-col gap-6 ${
          timeLeft !== null
            ? "bg-[url('/dark-wallpaper.jpg')] bg-cover bg-no-repeat bg-center"
            : 'bg-transparent'
        } `}
        id='background'
      >
        {timeLeft && (
          <>
            <h1 className='font-bold text-lg text-center text-white'>
              <Typewriter
                words={['میو میو🐱', 'تولدت پیش پیش مبارک دختر کوچولوی من']}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </h1>
            <AnimatedCounter timeLeft={timeLeft} />
          </>
        )}
        {!timeLeft && (
          <>
            <h1 className='font-bold text-xl text-center text-white'>
              😍🍰ببین تولد کدوم دختر کوچولوئه
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
