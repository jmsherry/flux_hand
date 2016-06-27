import keyMirror from 'keymirror';

const CounterConstants = keyMirror({
  ADD_TODO: null,
  REMOVE_TODO: null
});

CounterConstants.CHANGE_EVENT = 'change';

export default CounterConstants;
