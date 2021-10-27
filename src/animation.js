export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const fadeAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: { duration: 1 },
  },
};

export const dropAnim = {
  hidden: {
    y: -500,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
  exit: {
    y: -500,
    transition: {
      duration: 0.5,
    },
  },
};

export const dropItemAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
