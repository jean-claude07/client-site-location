import React, { Component } from 'react'

export class Testimonial extends Component {
    render() {
        return (
            <>
                <section id="testimonials" style={{position:'initial'}}>
                    <div class="container">

                        <div class="section-header">
                            <h3>Avis d'un client</h3>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-lg-8    ">
                                <div class="container">
                        
                                <div class="testimonial-item">
                                    <img src="img/testimonial-1.jpg" class="testimonial-img" alt=""/>
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                </div>
                        
                                </div>

                            </div>
                        </div>


                    </div>
                </section>  
            </>
        )
    }
}

export default Testimonial
