import axios from 'axios';
import React, { Component } from 'react'

export class Use extends Component {
    state={
        userCount: ''
    }

    componentDidMount = () => {
        this.getUserCount();
    }

    getUserCount = () => {
        axios.get('user_counteur').then(response => {
            this.setState({
                userCount: response.data
            })
        })
    }
    render() {
        const userCount = this.state.userCount
        return (
            <>
                 <section id="why-us" class="wow fadeIn">
                    <div class="container-fluid">
                        
                        <header class="section-header">
                        <h3>Conditions générales de location</h3>
                        <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                        </header>

                        <div class="row">

                        <div class="col-lg-6">
                            <div class="why-us-img">
                            <img src="img/why-us.jpg" alt="" class="img-fluid"/>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="why-us-content">
                            
                           
                            <div class="features wow bounceInUp clearfix">
                                <i class="fa fa-diamond" style={{color: '#f058dc'}}></i>
                                <h4>RESPONSABILITÉ</h4>
                                <p>
                                    Les produit seront livré en bon état et complète. Nous vous demandons de prendre soin des produits et de nous les rendre propres. 
                                    Dans le cas contraire  seront prélevés sur la caution.
                                </p>
                            </div>

                            <div class="features wow bounceInUp clearfix">
                                <i class="fa fa-object-group" style={{color: '#ffb774'}}></i>
                                <h4>DISPOSITIONS GÉNÉRALES </h4>
                                <p>
                                <ul>
                                    <li>
                                        La location est personnelle et non transmissible, cession et sous-location sont interdites. Seuls sont habilités à utiliser 
                                        le produit, le locataire et la (ou les) personnes désignées sur le contrat.
                                    </li>
                                    <li>
                                        Seule la restitution des produit en parfait état fait cesser la location. Tout renboursement en cas de vol ou abimation sera à la charge du locataire.
                                    </li>
                                    
                                </ul>
                                </p>
                            </div>
                            
                            {/* <div class="features wow bounceInUp clearfix">
                                <i class="fa fa-language" style={{color: '#589af1'}}></i>
                                <h4>Voluptates dolores</h4>
                                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
                            </div> */}
                            
                            </div>

                        </div>

                        </div>

                    </div>

                    {/* <div class="container">
                        <div class="row counters">

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">{userCount} </span>
                            <p>Clients</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">421</span>
                            <p>Projects</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">1,364</span>
                            <p>Hours Of Support</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">18</span>
                            <p>Hard Workers</p>
                        </div>
                
                        </div>

                    </div> */}
                </section>
            </>
        )
    }
}

export default Use
