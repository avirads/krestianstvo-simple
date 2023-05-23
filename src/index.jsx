import { render } from 'solid-js/web';
import { Selo } from "krestianstvo";
import App from './App.jsx'

render(() => (
    <Selo
        nodeID={"instance_name"}
        seloID={"world_name"}
        component={App}
        reflectorHost={"https://time.krestianstvo.org"}
    />

), document.getElementById('root'));