import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';

export class Location extends Component {
    state = {
        click: false,
        login: false,
        message: ''
    }

    handleLouer = () => {
        if(sessionStorage.id){
            this.setState({
                click:true
            })
        }else{
            this.setState({
                login: true
            })
        }
    }

    handleChange =  (e) => {
        this.setState({
            nombre: e.target.value 
        });
    }

    render() {
        const produit = this.props.data
        let button;
        if(this.state.click){
            const nombre = this.state.nombre
            button = (
                <>
                    <div className="row">
                        <div className="col-12">
                            <Formik
                                initialValues={{
                                    nomMvola: '',
                                    numero: '',
                                    nombre: '',
                                    date: ''
                                }}

                                onSubmit={(values) => {
                                    const formData = new FormData;
                                    formData.append('nomMvola', values.nomMvola)
                                    formData.append('nombre',values.nombre)
                                    formData.append('numero', values.numero)
                                    formData.append('nomProduit', produit.nom)
                                    formData.append('cout', produit.cout)
                                    formData.append('date', values.date)
                                    formData.append('user_id', sessionStorage.id)
                                    formData.append('image', produit.produitphoto.url)

                                    axios.post('locations', formData).then(response => {
                                        if(response.status === 200){
                                            this.setState({
                                                message: response.data.message
                                            })
                                        }
                                    })
                                }}
                            >
                                <Form>
                                    <div>
                                        <label>Nombre : </label>
                                        <Field className="form-control mr-1" placeholder="Nombre ... " name="nombre" type="number" required />
                                        
                                    </div>
                                    <br/>
                                    <div>
                                        <strong>Mode de payment sur mobile money   
                                            <span>-Uniquement sur MVola</span>
                                        </strong>
                                        <br/>
                                        <label>Nom MVola :</label>
                                        <Field className="form-control mr-1" placeholder="Nom MVola" name="nomMvola" type="text" />
                                    </div>
                                    <br/>
                                    <div>
                                        <label>Numero MVola : </label>
                                        <Field className="form-control mr-1" name="numero" placeholder="Numero telephone" type="number" />
                                    </div>
                                    <br/>
                                    {/* <div>
                                        <label>Durrée : </label>
                                        <Field as="select" className="form-control mr-1" name="durree">
                                            <option value="1">3 jours minimum</option>
                                            <option value="2">6 jours</option>
                                            <option value="3">9 jours</option>
                                        </Field>
                                    </div> */}
                                    <br/>
                                    <div>
                                        <label>Date : </label>
                                        <Field className="form-control mr-1" name="date" placeholder="Numero telephone" type="date" required />
                                    </div>
                                    <br/>
                                    <center>
                                        <div className="text-success" style={{paddingBottom: '10px'}}>{this.state.message} </div>
                                    </center>
                                    <Field type="submit" className="btn btn-info btn-lg btn-block" value="valider" />
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </>
            )
        }else{
            let login;
            if(this.state.login){
                login = (
                    
                    <div className="card">
                        <div className="card-body" style={{backgroundColor:'silver'}}>
                            <p><stro> </stro>Pour les locations, veuillez vous rendre dans <a href="/espace_client">
                                Espace client</a> pour vous connecter .</p>
                        </div>
                    </div>
                )
            }
            button = (
                <>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-primary">{produit.nom} </h1>
                            
                            <div className="card">
                                <div className="card-body">
                                    {produit.description}
                                </div>
                            </div>
                            <br/>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="text-secondary">Tarif:  {produit.cout} <strong>Ar/pièce</strong> </h5>
                                </div>
                            </div>
                            <div style={{paddingTop:'10px'}}></div>
                            <div className="d-flex">
                                <button className="btn btn-primary btn-lg btn-block" onClick={this.handleLouer}>Louer</button>
                            </div>
                            <br/>
                            <center>{login} </center>
                        </div>
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <img src={`http://localhost:4000/${produit.produitphoto.url}`} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="container">
                                {button}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Location;
