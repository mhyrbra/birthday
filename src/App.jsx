import AnimatedCounter from './components/AnimatedCounter';
import { Typewriter } from 'react-simple-typewriter';

const App = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-6 bg-blue-200'>
      <h1 className='font-bold text-2xl'>
        <Typewriter
          words={[
            'تولدت پیش پیش مبارک وروجک 😍❤',
            'امید اون روزی که مهندس کوچولو صدات بزنم😎',
          ]}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
      <AnimatedCounter />
    </div>
  );
};

export default App;
