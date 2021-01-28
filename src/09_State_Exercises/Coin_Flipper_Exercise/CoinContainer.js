import React, { Component } from 'react';
import Coin from './Coin';
// import heads from './heads.jpg';
// import tails from './tails.jpg';
import { choice } from '../helpers';

class CoinContainer extends Component {
    // when the flipme button is clicked it's going to look in the default props, inside of coins array
    // pick one of these at random, and whichever one we get we will pass this data down as props into a coin component
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://www.fleur-de-coin.com/images/currency/KM200/KM187_2002b.jpg"},
            { side: "tails", imgSrc: "https://www.fleur-de-coin.com/images/Thumbnails/euroimages-belgium1euro2008new-SIZE166x166.jpg"}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        });
    }
    handleClick(e) {
        this.flipCoin();
    }
        
    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's Flip A Coin!</h2>
                {/* check whether curCoin is null or not, if it's not null then we render coin, otherwise we don't */}
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        );
    }
}

export default CoinContainer;