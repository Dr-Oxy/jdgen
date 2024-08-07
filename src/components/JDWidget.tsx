import React, { useState } from 'react';
import JDForm from './JDForm';
import JDGenerated from './JDGenerated';

import { jdLogo } from '../assets/icons';

const JDWidget = () => {
  const [view, setView] = useState('');

  const [jobDesc, setJobDesc] = useState<string>('');

  return (
    <div>
      {view === 'form' && <JDForm setJobDesc={setJobDesc} setView={setView} />}

      {view === 'result' && <JDGenerated jobDesc={jobDesc} setView={setView} />}

      <button
        onClick={() => setView('form')}
        className="fixed bottom-4 md:bottom-12 right-2 md:right-24"
      >
        <img src={jdLogo} alt="jdlogo widget button" />
      </button>
    </div>
  );
};

export default JDWidget;
