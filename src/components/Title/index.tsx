import * as React from 'react';

import styles from './index.module.scss';

type Header = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children: React.ReactNode;
  h?: Header;
}

const Title: React.FC<HeadingProps> = ({ children, h = 1 }) => {
  const Heading = `h${h}`;
  return React.createElement(Heading, { className: styles[Heading] }, children);
};

export default Title;