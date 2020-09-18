import React from 'react';
import i18next from 'i18next';

function PastTrials() {
  return (
    <div>
      <h1 className='subtitle m-bottom-4'>{i18next.t('PAST_TRIALS:TITLE')}</h1>
    </div>
  );
}

export default PastTrials;
