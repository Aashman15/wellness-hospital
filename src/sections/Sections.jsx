import React from 'react';
import FormControl from '../components/FormControl';
import { FiSearch } from 'react-icons/fi';

const Sections = () => {
  const leftComponent = () => <FiSearch size={24} />;

  const rightComponent = () => (
    <div className="h-4 w-4 bg-green sm:h-6 sm:w-6"></div>
  );

  return (
    <div>
      <p>This is other section</p>
      <FormControl
        RightComponent={rightComponent}
        placeholder="Enter email"
        useArrowDown
      />
    </div>
  );
};

export default Sections;
