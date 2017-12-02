import React, {Component} from 'react';
import Tamagotchi from './Tamagotchi/Tamagotchi'
import Header from './Header/Header'

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
