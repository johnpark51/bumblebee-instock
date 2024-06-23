import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import InventoryItem from './InventoryItem.jsx';

const AnimatedInventoryItem = ({ inventory }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <InventoryItem inventory={inventory} />
    </motion.div>
  );
};

export default AnimatedInventoryItem;
