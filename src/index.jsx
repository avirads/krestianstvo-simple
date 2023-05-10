import { render } from 'solid-js/web';
import { Selo } from 'krestianstvo';
import Simple from './Simple.jsx';

render(
  () => (
    <Selo
      nodeID={'simple'}
      seloID={'1'}
      component={Simple}
      reflectorHost={'https://lcs-reflector.onrender.com/'}
    />
  ),
  document.getElementById('root')
);
