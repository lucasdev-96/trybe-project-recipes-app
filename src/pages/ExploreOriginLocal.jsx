import React, { useState } from 'react';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import RenderSelect from '../components/RenderSelect';
import RendersFiltersArea from '../components/RenderFiltersArea';
// import ExploreByArea from '../components/ExploreByArea';

function ExploreOriginLocal() {
  const [area, setArea] = useState('');
  return (
    <div>
      <Header title="Explorar Origem" />
      <RenderSelect setArea={ setArea } />
      <RendersFiltersArea area={ area } />
      <BottomMenu />
    </div>
  );
}

export default ExploreOriginLocal;
