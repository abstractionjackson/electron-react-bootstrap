import { createRoot } from 'react-dom/client';

import { App } from './containers/App';

const rootNode = document.getElementById('root')
const root = createRoot(rootNode)

root.render(<App />)