import axios from 'axios';
import React, { Component } from 'react'

export class CardTous extends Component {
    state={
        produit: []
    }

    componentDidMount = () => {
        this.getProduit();
    }

    getProduit = () => {
        axios.get('produits').then(response => {
            this.setState({
                produit: response.data
            })
        })
    }
    render() {
        const produits = this.state.produit
        return (
            <>
                {produits && produits.map(produit => {
                    return ( 
                    <>
                        <div >
                            <img src={`http://localhost:4000/${produit.produitphoto.url}`} class="img-fluid" alt=""/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <hr/>
                        </div>
                    </>
                    )
                })}
            </>
        )
    }
}

export default CardTous;
