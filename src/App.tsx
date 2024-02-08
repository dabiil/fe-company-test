import { Canvas } from 'containers';

import { DataProvider } from 'src/providers';

export const App: React.FC = () => (
  <DataProvider>
    <Canvas />
  </DataProvider>
);
