import { useState } from 'react';

import { IDistrictInfo, MapSelect } from './map-select';

function App() {
  const [selected, setSelected] = useState<IDistrictInfo[]>([]);

  return (
    <>
      <h1>Estados de atuação</h1>
      <pre>{JSON.stringify(selected.map((district) => district.key))}</pre>
      <MapSelect onChange={(selected) => setSelected(() => selected)} />
    </>
  );
}

export default App;
