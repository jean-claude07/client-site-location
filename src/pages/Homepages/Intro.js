import React from 'react'

export default function Intro() {
    return (
        <>
            <section id="intro" class="clearfix" style={{paddingTop: '100px'}}>
                <div class="container d-flex h-100">
                <div class="row justify-content-center align-self-center">
                    <div class="col-md-6 intro-info order-md-first order-last">
                    <h2>Depuis 10 ans  <br/>59bis vous propose <span>ses games de produit</span></h2>
                    <div>
                        <a href="espace_client" class="btn-get-started scrollto">Espace client</a>
                    </div>
                    </div>
            
                    <div class="col-md-6 intro-img order-md-last order-first">
                        {/* <img src="img/59bis_intro.jpg" alt="" class="img-fluid"/> */}
                        <img src="img/59bis_intro1.jpg" alt="" class="img-fluid" style={{maxWidth: '90%'}} />
                    </div>
                </div>

                </div>
            </section>
            <div style={{padding: '10px'}}></div>
        </>
    )
}
