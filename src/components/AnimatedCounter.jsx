import { motion } from 'framer-motion';

const AnimatedCounter = ({ timeLeft }) => {
  const renderTimeUnit = (value, label) => (
    <div className='flex flex-col items-center gap-2 w-12'>
      <motion.span
        key={`${label}-${value}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='text-xl font-bold'
      >
        {value.toString().padStart(2, '0')}
      </motion.span>
      <span className='text-sm text-gray-500'>{label}</span>
    </div>
  );

  return (
    <div className='flex flex-row gap-4'>
      {renderTimeUnit(timeLeft.days, 'D')}
      {renderTimeUnit(timeLeft.hours, 'H')}
      {renderTimeUnit(timeLeft.minutes, 'M')}
      {renderTimeUnit(timeLeft.seconds, 'S')}
    </div>
  );
};

export default AnimatedCounter;
