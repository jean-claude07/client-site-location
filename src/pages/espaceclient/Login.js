import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import axios from 'axios';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            message: ''
        }
    }
    render() {
        return (
            <>
                <div className="base-container">
                    <div className="header">
                        <h3>Login</h3>
                    </div>
                    <div className="row">
                        <div className="wow bounceInUp">
                            <div className="boite">
                                <div className="image">
                                    <img src="img/intro-img.svg" />
                                </div>
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}

                                    onSubmit={(values) => {
                                        axios.post('user_session', values).then(response => {
                                            if(response.status === 200){
                                                console.log(response.data)
                                                localStorage.setItem('token', response.data.token)
                                                sessionStorage.setItem( 'id', response.data.user.id)
                                                window.location.reload();
                                            }else{
                                                this.setState({
                                                    message: response.data.message
                                                })
                                            }
                                        })
                                    }}
                                >
                                    <Form className="formulaire">
                                        <div className="group-form">
                                            <label htmlFor="username">Nom d'utilisateur</label>
                                            <Field className="change" type="email" name="email" placeholder="votre Nom d' utilisateur"/>
                                        </div>
                
                                        <div className="group-form">
                                            <label htmlFor="passsword">Mot de passe</label>
                                            <Field className="change" type="password" name="password" placeholder="votre Mot de passe"/>
                                        </div>
                                        <center>
                                            <div className="text-danger">{this.state.message} </div>
                                        </center>
                                        <div className="footer">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

