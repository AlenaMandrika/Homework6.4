import React, {Component} from 'react';
import Tamagotchi from './components/Tamagotchi'
import Header from './components/Header'

import './App.css'

class App extends Component {

    render() {
        return (
            <div className='app'>
                <Header/>
                <Tamagotchi/>
            </div>
        );
    }
}

export default App;
