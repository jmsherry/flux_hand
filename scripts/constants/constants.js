import keyMirror from 'keymirror';

const CounterConstants = keyMirror({
  INCREMENT: null,
  DECREMENT: null
});

CounterConstants.CHANGE_EVENT = 'change';

export default CounterConstants;
