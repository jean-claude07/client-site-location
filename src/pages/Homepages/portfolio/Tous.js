import axios from 'axios';
import React, { Component } from 'react'
import Location from '../../location/Location';
import './Portfolio.css';
import {createStore} from 'redux'


export class Tous extends Component {
    constructor() {
        super();
        this.state = {
            produit: [],
            modal: false,
            card: [
                
            ]
        }
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

    handleModale = () => {
        this.setState({
            modal: true
        })
    }

    
    
    render() {
        const produits = this.state.produit
        return (
            <>

            <main className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item">
                    <ul>
                        {/* {
                            this.state.card.map(c => <li>{c.nom} | nombre {c.nombre} </li>)
                        } */}
                    </ul>
                </div>
                {produits && produits.map(produit => {
                    const modal = `#staticBackdrop_${produit.id}`
                    const openModal = `staticBackdrop_${produit.id}`;
                    console.log(produit)
                    return (    
                        <>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                    <img src={`http://localhost:4000/${produit.produitphoto.url}`} className="img-fluid" alt=""/>
                                        <div className="portfolio-info">
                                            <h4><a href="#">{produit.nom} </a></h4>
                                            <p>{produit.groupe} </p> 
                                            <div>
                                                <a href={`http://localhost:4000/${produit.produitphoto.url}`} data-lightbox="portfolio" data-title={produit.nom} className="link-preview" title="Preview">
                                                    <i className="ion ion-eye"></i>
                                                </a>
                                                <a className="link-details" title="More Details" data-toggle="modal" data-target={modal}>
                                                    <i className="ion ion-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id={openModal} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Details du produit</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                               <Location data={produit} />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                                
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </>
                    )
                })}

            </main>
            </>
        )
    }
}

export default Tous
