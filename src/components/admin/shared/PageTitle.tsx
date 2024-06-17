import React from 'react';

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex-start flex items-center py-4">
      <h2 className="text-3xl font-[900] text-violet">{title}</h2>
    </div>
  );
};

export default PageTitle;
