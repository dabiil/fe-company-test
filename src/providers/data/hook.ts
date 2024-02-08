import { useContext } from 'react';

import { dataContext } from './context';

export const useDataContext = () => useContext(dataContext);
