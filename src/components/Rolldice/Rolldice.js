import React, { Component } from 'react';
import './Rolldice.css';
import Die from '../Die/Die';

class Rolldice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }

        this.roll = this.roll.bind(this)
    }

    roll() {
        const newDie1 = this.props.sides[Math.floor( Math.random() * this.props.sides.length )];
        const newDie2 = this.props.sides[Math.floor( Math.random() * this.props.sides.length )];

        this.setState({
            die1: newDie1,
            die2: newDie2,
            rolling: true
        });

        setTimeout(()=>{
            this.setState({
                rolling: false
            })
        }, 1000);
    }

   

    render() {
        return (
            <div className="Rolldice">
                <div className="Rolldice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button 
                    onClick={this.roll} 
                    className="Rolldice-button"
                    disabled={this.state.rolling}>
                        {this.state.rolling ? 'Rolling...' : 'Roll dice'}
                </button>  
            </div>
        );
    }
}

export default Rolldice;