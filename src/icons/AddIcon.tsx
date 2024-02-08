import cx from 'classnames';

import { IIcon } from './types';

export const AddIcon: React.FC<IIcon> = ({ className }) => (
  <svg
    className={cx('w-6 h-6', className)}
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 4.5v15m7.5-7.5h-15' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
