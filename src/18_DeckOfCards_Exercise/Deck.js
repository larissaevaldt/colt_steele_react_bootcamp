import React, { Component } from 'react';
import axios from "axios";
import Card from './Card';
import './Deck.css';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

/**
 * Exercise demonstrating the use of ComponentDidMount and Axios
 * ComponentDidMount is a lifecycle method that runs only once, after the first render
 * Order of execution: Constructor -> Render -> ComponentDidMonunt
 * Standard place to make api requests, we used axios in this example
 */
class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck: null, drawn: []} //deck will be the response from the first request
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
        this.setState({deck: deck.data})
    }
    async getCard() {
        //make request using deck id
        let deck_id = this.state.deck.deck_id;
        try {
            let card_url = `${API_BASE_URL}/${deck_id}/draw/`;
            let card_res = await axios.get(card_url);
            if(!card_res.data.success) {
                throw new Error("No card remaing!")
            }

            console.log(card_res.data);
            //set state using new card info from api
            let card = card_res.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch(err) {
            alert(err);
        }
    }
    render() {
        const cards = this.state.drawn.map(c => (
            <Card key={c.id} name={c.name} image={c.image} />
        ))
        return (
            <div className="Deck">
                <h1 className="Deck-title">◊ Card Dealer ◊</h1>
                <h2 className="Deck-title subtitle">◊ A little demo made with React ◊</h2>
                <button className="Deck-btn" onClick={this.getCard}>Get Card!</button>
                <div className="Deck-cardarea">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck;
