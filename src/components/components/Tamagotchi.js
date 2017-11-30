import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Tamagotchi.css'



import cat from '../../assets/img/tenorkitti.gif'
import catEat from '../../assets/img/giphyEat.gif'
import catCook from '../../assets/img/giphy1Cook.gif'
import catSlip from '../../assets/img/tenor.gif'
import catPlay from '../../assets/img/play.gif'
import catDance from '../../assets/img/Dance.gif'
import catMice from '../../assets/img/catchesMice.gif'

export default class Tamagotchi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            health: 0,
            beauty: 0,
            security: 0,
            pleasure: 0,
            leisure: 0,
            actions: 0,

            greeting: '',
            photo: '',

            isVisible: true,
            isHidden: false,
        };

        this.updatePhoto = this.updatePhoto.bind(this);
        this.clear = this.clear.bind(this);

        this.updatePretendersOfLife = this.updatePretendersOfLife.bind(this);

        this.live = this.live.bind(this);
        this.addImage = this.addImage.bind(this);

        this.eat = this.eat.bind(this);
        this.cook = this.cook.bind(this);
        this.slip = this.slip.bind(this);
        this.play = this.play.bind(this);
        this.dance = this.dance.bind(this);
        this.catchesMice = this.catchesMice.bind(this);

    }

    updatePretendersOfLife(RaisedButton, event) {
        this.setState({
            [RaisedButton]: event.target.RaisedButton,
        })
    }

    updatePhoto(photoPath) {
        this.setState ({
            photo: photoPath,
        });
    }

    clear () {
        window.location.reload();
    }

    live() {
        if (this.state.health < 0) {
            alert('Game OVER!');
            this.clear();
            this.setState({
                health: 0,
                beauty: 0,
                security: 0,
                pleasure: 0,
                leisure: 0,
                actions: 0,
            });
        } else if (this.state.beauty < 0) {
            alert('Game OVER!');
            this.clear();
            this.setState({
                health: 0,
                beauty: 0,
                security: 0,
                pleasure: 0,
                leisure: 0,
                actions: 0,
            });
        } else if (this.state.security < 0) {
            alert('Game OVER!');
            this.clear();
            this.setState({
                health: 0,
                beauty: 0,
                security: 0,
                pleasure: 0,
                leisure: 0,
                actions: 0,
            });
        } else if (this.state.pleasure < 0) {
            alert('Game OVER!');
            this.clear();
            this.setState({
                health: 0,
                beauty: 0,
                security: 0,
                pleasure: 0,
                leisure: 0,
                actions: 0,
            });
        } else if (this.state.leisure < 0) {
            alert('Game OVER!');
            this.clear();
            this.setState({
                health: 0,
                beauty: 0,
                security: 0,
                pleasure: 0,
                leisure: 0,
                actions: 0,
            });
        } else if (this.state.actions < 0) {
            alert('Game OVER!');
            this.clear();
            this.setState({
                health: 0,
                beauty: 0,
                security: 0,
                pleasure: 0,
                leisure: 0,
                actions: 0,
            });
        }
    }

    addImage () {
        this.setState ({
            greeting: 'I am Kitti',
            photo: cat,

            health: this.state.health + Math.floor(Math.random() * 30) + 15,
            beauty: this.state.beauty + Math.floor(Math.random() * 30) + 15,
            security: this.state.security + Math.floor(Math.random() * 30) + 15,
            pleasure: this.state.pleasure + Math.floor(Math.random() * 30) + 15,
            leisure: this.state.leisure + Math.floor(Math.random() * 30) + 15,
            actions: this.state.actions + Math.floor(Math.random() * 30) + 15,

            isVisible: false,
            isHidden: true
        });
    }



    eat() {
        const eat = this;
        this.setState({
            health: this.state.health + 5,
            beauty: this.state.beauty + 5,
            security: this.state.security -6,
            pleasure: this.state.pleasure + 5,
            leisure: this.state.leisure - 5,
            actions: this.state.actions - 5,
        });
        this.updatePhoto(catEat);
        setTimeout(function () {
            eat.updatePhoto(cat)
        }, 20000);
        this.live()
    }

    cook() {
        const cook = this;
        this.setState({
            health: this.state.health - 7,
            beauty: this.state.beauty - 7 ,
            security: this.state.security -5,
            pleasure: this.state.pleasure + 5,
            leisure: this.state.leisure + 1,
            actions: this.state.actions + 1
        });
        this.updatePhoto(catCook);
        setTimeout(function () {
            cook.updatePhoto(cat)
        }, 20000);
        this.live()
    }

    slip() {
        const slip = this;
        this.setState({
            health: this.state.health + 1,
            beauty: this.state.beauty + 1,
            security: this.state.security - 5,
            pleasure: this.state.pleasure + 2,
            leisure: this.state.leisure - 5,
            actions: this.state.actions - 5
        });
        this.updatePhoto(catSlip);
        setTimeout(function () {
            slip.updatePhoto(cat)
        }, 20000);
        this.live()
    }

    play() {
        const play = this;
        this.setState({
            health: this.state.health - 8,
            beauty: this.state.beauty - 8,
            security: this.state.security - 5,
            pleasure: this.state.pleasure + 5,
            leisure: this.state.leisure + 3,
            actions: this.state.actions - 5
        });
        this.updatePhoto(catPlay);
        setTimeout(function () {
            play.updatePhoto(cat)
        }, 20000);
        this.live()
    }

    dance() {
        const dance = this;
        this.setState({
            health: this.state.health + 5,
            beauty: this.state.beauty + 5,
            security: this.state.security + 1,
            pleasure: this.state.pleasure + 5,
            leisure: this.state.leisure + 5,
            actions: this.state.actions - 5
        });
        this.updatePhoto(catDance);
        setTimeout(function () {
            dance.updatePhoto(cat)
        }, 20000);
        this.live()
    }

    catchesMice() {
        const catchesMice = this;
        this.setState({
            health: this.state.health + 3,
            beauty: this.state.beauty - 10,
            security: this.state.security - 10,
            pleasure: this.state.pleasure + 10,
            leisure: this.state.leisure + 1,
            actions: this.state.actions - 8
        });
        this.updatePhoto(catMice);
        setTimeout(function () {
            catchesMice.updatePhoto(cat)
        }, 20000);
        this.live()
    }

    render() {
        return (
            <div>
                <div className='вtnActions' hidden={!this.state.isHidden}>
                    <RaisedButton onClick={this.eat} label="eat" secondary={true} style={{margin: '30px'}}/>
                    <RaisedButton onClick={this.cook} label="cook" secondary={true} style={{margin: '30px'}}/>
                    <RaisedButton onClick={this.slip} label="slip" secondary={true} style={{margin: '30px'}}/>
                    <RaisedButton onClick={this.dance} label="dance" secondary={true} style={{margin: '30px'}}/>
                    <RaisedButton onClick={this.play} label="play" secondary={true} style={{margin: '30px'}}/>
                    <RaisedButton onClick={this.catchesMice} label="catches mice" secondary={true} style={{margin: '30px'}}/>
                </div>
                <div>
                    <div className='options'>
                        health: {this.state.health}
                        <br/>
                        beauty: {this.state.beauty}
                        <br/>
                        pleasure: {this.state.pleasure}
                        <br/>
                        security: {this.state.security}
                        <br/>
                        actions: {this.state.actions}
                        <br/>
                        leisure: {this.state.leisure}
                    </div>
                </div>
                <div>
                    <div className='block'>
                        <h1>{this.state.greeting}</h1>
                        <br/>
                        <img src={this.state.photo} alt=""/>
                    </div>
                    <div className='btnStart' hidden={!this.state.isVisible}>
                        <RaisedButton onClick={this.addImage} label="start" primary={true}/>
                    </div>
                </div>
            </div>
        )
    }
}