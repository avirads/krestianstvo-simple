import { render } from 'solid-js/web';
import { Selo } from "krestianstvo";
import App from './App.jsx'

render(() => (
    <Selo
        nodeID={"simple"}
        seloID={"1"}
        component={App}
        reflectorHost={"https://time.krestianstvo.org"}
    />

), document.getElementById('root'));