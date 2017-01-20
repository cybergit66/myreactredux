import ReactDOM from 'react-dom'
import Examples from './components/Examples'
import store from './redux/store/config'

function render(){
    ReactDOM.render(
        <Examples/>,
        document.getElementById('root')  
    )
}

 store.subscribe(render)