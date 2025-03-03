import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-600 mx-auto" />
      <h2 className="text-pink-700 mt-4">Loading...</h2>
    </div>
  );
}

export default Loader;
