import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik'
import axios from 'axios';


export class Register extends Component {
    state={
        photo: null,
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }
    render() {
        return (
            <>
                <div className="base-container" >
                    <div className="header">
                        <h3>Register</h3>
                    </div>
                    <div className="boite">
                        <div className="content">
                            <div className="image">
                                <img src="img/features-1.svg" />
                            </div>
                            <div className="formulaire">
                                <Formik
                                    initialValues={{
                                        username: '',
                                        email: '',
                                        telephone: '',
                                        password: '',
                                        photo: null
                                    }}

                                    onSubmit={(values) => {
                                        const formData = new FormData;
                                        formData.append('username', values.username)
                                        formData.append('email',values.email)
                                        formData.append('telephone', values.telephone)
                                        formData.append('password', values.password)
                                        formData.append('photoUser', this.state.photo)

                                        axios.post('users', formData).then(response => {
                                            if(response.status === 200){
                                                localStorage.setItem('token', response.data.token)
                                                sessionStorage.setItem( 'id', response.data.user.id)
                                                window.location.reload();
                                            }
                                        })
                                    }}
                                >
                                    <Form>
                                        <div className="group-form">
                                            <label htmlFor="photo">photo</label>
                                            <Field className="change" type="file" name="photo" onChange={this.handleChange} required />
                                        </div>
                                        <div className="group-form">
                                            <label htmlFor="username">Nom d'utilisateur</label>
                                            <Field className="change" type="text" name="username" placeholder="votre Nom d' utilisateur" required/>
                                        </div>

                                        <div className="group-form">
                                            <label htmlFor="email">Email</label>
                                            <Field className="change" type="email" name="email" placeholder="votre email" required/>
                                        </div>

                                        <div className="group-form">
                                            <label htmlFor="telephone">Telephone</label>
                                            <Field className="change" type="number" name="telephone" placeholder="votre Numero telephone" required/>
                                        </div>
                
                                        <div className="group-form">
                                            <label htmlFor="passsword">Mot de passe</label>
                                            <Field className="change" type="password" name="password" placeholder="votre Mot de passe" required/>
                                        </div>
                                        <div className="footer">
                                            <button type="submit" className="btn btn-primary">Register</button>
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

