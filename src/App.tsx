import './App.css'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from '@/routes'
import { Provider } from 'react-redux'
import store from '@/store'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
function App() {

  const element = useRoutes(routes);
  return (
    <Provider store={store}>
        <div className="App" >
          {element}
        </div>
    </Provider>

  )
}
export default App
