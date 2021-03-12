import axios from 'axios';
import React, { Component } from 'react'
import Location from '../../location/Location';

export class Verres extends Component {
    state={
        produit: [],
        modal: false
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

            <div class="row portfolio-container" style={{display: 'flex'}}>
                {produits && produits.map(produit => {
                    const modal = `#staticBackdrop_${produit.id}`
                    const openModal = `staticBackdrop_${produit.id}`;
                    let card;

                    if(produit.groupe === 'Verres'){
                        card = (
                                <div class="col-lg-4 col-md-6 portfolio-item " data-wow-delay="0.2s">
                                    <div class="portfolio-wrap">
                                    <img src={`http://localhost:4000/${produit.produitphoto.url}`} class="img-fluid" alt=""/>
                                        <div class="portfolio-info">
                                            <h4><a href="#">{produit.nom} </a></h4>
                                            <p>{produit.groupe} </p>
                                            <div>
                                            <a href={`http://localhost:4000/${produit.produitphoto.url}`} data-lightbox="portfolio" data-title={produit.nom} class="link-preview" title="Preview">
                                                <i class="ion ion-eye"></i>
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
                        )
                    }else{
                        card = (
                            <>
                            </>
                        )
                    }
                    return ( 
                        <>    
                            {card}
                        </>
                    )
                })}
            </div>

            </>
        )
    }
}

export default Verres
