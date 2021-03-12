import axios from 'axios';
import React, { Component } from 'react'
import { ref } from 'yup';
import {Login, Register} from './Index'
import Profile from './profile/Profile';


export class EspaceClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogginActive: '',
            user: {}
        }
    }

    changeState = (e) =>  {
        e.preventDefault();
        this.setState({
            isLogginActive: 'true'
        })

    }

    componentDidMount = () => {
        if(sessionStorage.id){
            this.getUser();
        }
    }

    getUser = () => {
        axios.get(`users/${sessionStorage.id}`).then(resp => {
            if(resp.status === 200 ){
                this.setState({
                    user: resp.data
                })
            }
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            isLogginActive: 'false'
        })
    }

    render() {
        const user = this.state
        var token = this.state.user.token
       let card;

       if(this.state.isLogginActive === 'true'){
            card = (
                <Login/>
            )
       }else if(this.state.isLogginActive === 'false'){
           card = (
               <Register/>
           )
       }else{
           card = <Login/>
       };

       let login;
       if(sessionStorage.id ){
           if(localStorage.token === token){
                login = <Profile user={user} />
           }
       }else{
           login = (
            <section id="pricing" class="wow fadeInUp section-bg" style={{paddingTop: '150px'}}>

                <div class="container">

                <header class="section-header">
                    <h3>Espace Client</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </header>

                <div class="row flex-items-xs-middle flex-items-xs-center">

                    <div class="col-xs-12 col-lg-4">
                    <div class="boite">
                    <span href="#" onClick={this.changeState}>
                            <h3>Login</h3>
                    </span>
                    </div>
                    </div>

                    <div class="col-xs-12 col-lg-4">
                        {card}
                    </div>

                    <div class="col-xs-12 col-lg-4">
                    <div class="boite">
                        <span href="#" onClick={this.handleClick} >
                            <h3>Register</h3>
                        </span>
                    </div>
                    </div>

                </div>
                </div>

            </section>
           )
       }
        return (
            <>
             {login}
            
            </>
        )
    }
}



export default EspaceClient
