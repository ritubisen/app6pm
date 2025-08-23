
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import LoginContext , {MyLoginContext} from "./LoginContext.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(

    <LoginContext>
    <App />
</LoginContext>
)
