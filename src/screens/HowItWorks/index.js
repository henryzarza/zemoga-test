import React from 'react';
import i18next from 'i18next';

function HowItWorks() {
  return (
    <div>
      <h1 className='subtitle m-bottom-4'>{i18next.t('HOW_IT_WORKS:TITLE')}</h1>
    </div>
  );
}

export default HowItWorks;
