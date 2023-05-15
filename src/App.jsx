import { createLocalStore } from 'krestianstvo';

export default function App(props) {
  window.seloprops = props.selo;
  const [local, setLocal] = createLocalStore(
    {
      data: {
        type: 'Node',
        nodeID: props.nodeID,
        name: 'Counter',
        properties: {
          name: props.name ? props.name : props.nodeID,
          count: 0,
          ticking: false,
          initialized: false,
        },
        dynamic: [],
      },
    },
    props
  );

  const initialize = () => {
    props.selo.future(props.nodeID, 'add', 0, []);
  };

  const add = () => {
    setLocal('data', 'properties', 'count', (a) => a + 1);
    // recursive increment counter after every Future 1s
    props.selo.future(props.nodeID, 'add', 1, []);
  };

  const reset = (data) => {
    console.log(data);
    setLocal('data', 'properties', 'count', 0);
  };

  const step = (tick) => {
    console.log('a');
    // do steps here on every Reflector tick
    // props.selo.storeNode.tick
  };

  const doesNotUnderstand = () => {
    console.log('My replaced action for doesNotUnderstand message!');
  };

  props.selo.createAction(props.nodeID, 'initialize', initialize);
  props.selo.createAction(props.nodeID, 'add', add);
  props.selo.createAction(props.nodeID, 'reset', reset);
  props.selo.createAction(props.nodeID, 'step', step);
  props.selo.createAction(
    props.nodeID,
    'doesNotUnderstand',
    doesNotUnderstand,
    true
  );

  function handleClick(msg) {
    console.log(msg);
    props.selo.sendExtMsg({
      msg: msg,
      id: props.nodeID,
      params: [props.selo.clientSeloID],
    });
  }

  return (
    <>
      <div>{local.data.properties.count}</div>
      <button onClick={[handleClick, 'reset']}>Reset</button>
    </>
  );
}
