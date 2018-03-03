import React, {Component}   from 'react'
import {render}             from 'react-dom'
import AppMain              from './components/main'
import                      './assets/css/style.css'

class App extends Component{
    render(){
        return(<div> <AppMain /> </div>)
    }
}

render(<App />, document.getElementById('root'))