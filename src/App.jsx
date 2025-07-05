import AnimatedCounter from './components/AnimatedCounter';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
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
      setTimeLeft(updatedTime);
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
    <div
      className='h-screen flex justify-center items-center flex-col gap-6 bg-blue-200'
      id='background'
    >
      {timeLeft && (
        <>
          <h1 className='font-bold text-xl text-center'>
            <Typewriter
              words={[
                'تولدت پیش پیش مبارک وروجک 😍❤',
                'به امید اون روزی که مهندس کوچولو صدات بزنم 😎',
              ]}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <AnimatedCounter timeLeft={timeLeft} />
        </>
      )}
      {!timeLeft && (
        <>
          <h1 className='font-bold text-xl text-center'>
            😍ببین تولد کیهههههههههه دختر کوچولوی من
          </h1>
          <iframe
            src='https://giphy.com/embed/PqLcW0s1xWz0ySP6Ed'
            width='480'
            height='480'
            frameBorder='0'
            className='giphy-embed size-40 rounded-4xl'
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
};

export default App;
