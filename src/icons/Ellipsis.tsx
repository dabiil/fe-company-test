import cx from 'classnames';

import { IIcon } from './types';

export const Ellipsis: React.FC<IIcon> = ({ className }) => (
  <svg
    className={cx('w-6 h-6', className)}
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
