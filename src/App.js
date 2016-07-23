import React from 'react'
import { NICE, SUPER_NICE } from './colors'
import Counter from './Counter'
import DevTools from './containers/DevTools';

const App = () => (
    <div>
        <h1>App :-)</h1>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
        <DevTools />
    </div>
)

export default App