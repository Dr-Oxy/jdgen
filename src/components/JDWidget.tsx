import { useContext, useEffect } from 'react';

import { AppContext } from '../utils/appContext';

import JDForm from './JDForm';
import JDGenerated from './JDGenerated';

const JDWidget = () => {
  const { view, setView, isDarkMode } = useContext(AppContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      {view === 'form' && <JDForm />}

      {view === 'result' && <JDGenerated />}

      <button
        onClick={() => setView('form')}
        className="fixed bottom-4 md:bottom-12 right-2 md:right-24 z-[996]"
      >
        <img src={`${process.env.PUBLIC_URL}/jd-logo.svg`} alt="Logo" />
      </button>
    </div>
  );
};

export default JDWidget;
