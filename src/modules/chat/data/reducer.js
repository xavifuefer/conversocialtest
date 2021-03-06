import { v4 } from 'uuid';

import { SEND_MESSAGE_REQUEST } from './types';
import { BOT_WELCOME_MESSAGE } from './constants';

const id = v4();
const initialState = {
  messages: {
    [id]: {
      id,
      sentAt: new Date(),
      author: { id: 0 },
      text: BOT_WELCOME_MESSAGE,
    },
  },
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE_REQUEST: {
      const messagesIds = Object.keys(payload.messages);
      const newstate = {
        ...state,
        messages: {
          ...state.messages,
          [messagesIds[0]]: payload.messages[messagesIds[0]],
          [messagesIds[1]]: payload.messages[messagesIds[1]],
        },
      };
      return newstate;
    }

    default: {
      return state;
    }
  }
};

export default chatReducer;
