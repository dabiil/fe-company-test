import { Board } from 'components';

import { DataProvider } from 'src/providers';

export const App: React.FC = () => (
  <DataProvider>
    <Board />
  </DataProvider>
);
