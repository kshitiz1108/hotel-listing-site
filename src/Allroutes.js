import React from 'react';

import CityTabs from './components/CityTabs';
import { Route,Routes} from 'react-router-dom';
import PropertyPage from './components/PropertyPage';
import PropertyList from './components/PropertyList';

function AllRoutes() {
  
  return (
    
    
      <>
        <Routes>
        <Route exact path="/" element={<>
          <CityTabs/>
        <PropertyList/></>} />
        <Route path="/property/:id" element={<PropertyPage/>} />
        
        </Routes>
      </>
      
   
  );
}

export default AllRoutes;