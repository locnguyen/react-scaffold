import React from 'react';
import { NICE, SUPER_NICE } from './colors';
import Counter from './Counter';
import DevTools from './containers/DevTools';

const devTool = process.env.NODE_ENV === 'production' ? DevTools : <span />;

const App = () => (
    <div>
        <h1>App :-)</h1>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
        <devTool />
    </div>
);

export default App;
