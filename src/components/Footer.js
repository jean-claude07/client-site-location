import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik'
import axios from 'axios'

export class Footer extends Component {
    state={
        message: '',
        error: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value 
        })
    }

    handleClick = () => {
        sessionStorage.clear()
        localStorage.clear(window.location.reload())
    }
    render() {
        let deconnexion;

        if(sessionStorage.id) {
            deconnexion = (
                <li><a href="#" onClick={this.handleClick}><strong>Deconnexion</strong> </a></li>
            )
        }
        return (
            <>
                <footer id="footer" class="section-bg">
                    <div class="footer-top">
                    <div class="container">

                        <div class="row">

                        <div class="col-lg-6">

                            <div class="row">

                                <div class="col-sm-6">

                                <div class="footer-info">
                                    <h3>Location</h3>
                                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra 
                                        videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. 
                                        Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                                </div>

                                <div class="footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim 
                                        veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                                    <form action="" method="post">
                                        <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                                    </form>
                                </div>

                                </div>

                                <div class="col-sm-6">
                                <div class="footer-links">
                                    <h4>hyperlien</h4>
                                    <ul>
                                        <li class="active"><a href="/">Accueil</a></li>
                                        <li><a href="/#about">Condition general</a></li>
                                        <li><a href="/#services">Services</a></li>
                                        <li><a href="/#portfolio">Produits</a></li>
                                        {/* <li><a href="#team">Team</a></li> */}
                                        
                                        <li><a href="/#footer">Contact </a></li>
                                        {deconnexion}
                                    </ul>
                                </div>

                                <div class="footer-links">
                                    <h4>Pour nous contactez</h4>
                                    <p>
                                     
                                    Ambondrona, rue Rainandriamapandry<br/>
                                    Antananarivo Madagascar <br/>
                                    <strong>Telephone:</strong> 22 643 26 / 033 11 091 57 / 034 08 308 18<br/>
                                    <strong>Email:</strong> magasin59bis@gmail.com<br/>
                                    </p>
                                </div>

                                <div class="social-links">
                                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                </div>

                                </div>

                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="">
                            
                            <h4>Formulaire de contact</h4>
                            <p>Envoyer nous un message si vous avez des remarques, suggestions, ou des questions à props de nos service .</p>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        subject: '',
                                        telephone: '',
                                        message: null
                                    }}

                                    onSubmit={(values, {resetForm}) => {
                                        const formData = new FormData;
                                        formData.append('message', this.state.message)
                                        formData.append('name', values.name)
                                        formData.append('telephone', values.telephone)
                                        formData.append('email', values.email)
                                        formData.append('subject', values.subject)

                                        axios.post('contacts', formData).then(response => {
                                            if(response.status === 200){
                                                resetForm();
                                                this.setState({
                                                    error: response.data.notification
                                                })
                                            }
                                        })
                                    }}
                                >
                                    <Form  class="">
                                        <div class="">
                                            <Field type="text" name="name" class="form-control"  placeholder="Nom d'utilisateur"  required/>
                                        </div>
                                        <div class="">
                                            <Field type="email" class="form-control" name="email"  placeholder="Votre email"  required/>
                                        </div>
                                        <div class="">
                                            <Field type="text" class="form-control" name="subject"  placeholder="sujet"  required />
                                        </div>
                                        <div class="">
                                            <Field type="number" class="form-control" name="telephone" placeholder="Votre numero telephone" required />
                                        </div>
                                        <div class="">
                                            <textarea class="form-control" name="message" 
                                            placeholder="Votre  message svp!" onChange={this.handleChange} required ></textarea>
                                        </div>

                                        <div className="text-success">{this.state.error} </div>
                                        

                                        <div class="text-center"><button type="submit" title="Send Message">Envoyer le message</button></div>
                                    </Form>
                                </Formik>
                            </div>

                        </div>

                        

                        </div>

                    </div>
                    </div>
                
                    <div class="container">
                    <div class="copyright">
                        &copy; site de <strong>Location</strong>. Dejà reserver
                    </div>
                    <div class="credits">
                    </div>
                        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                    </div>
                    
                </footer>
            </>
        )
    }
}

export default Footer
