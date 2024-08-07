import React from 'react';

const WidgetButton = ({ setView }: any) => {
  return (
    <button
      onClick={() => setView('form')}
      className="fixed bottom-4 md:bottom-12 right-2 md:right-24"
    >
      Widget
    </button>
  );
};

export default WidgetButton;
