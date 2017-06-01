import React from 'react';

import './RightPanel.css';

import Conversation from '../../modules/chat/components/Conversation/Conversation';

const RightPanel = () => (
  <article className='RightPanel'>
    <section>
      <Conversation />
    </section>
  </article>
);

export default RightPanel;
