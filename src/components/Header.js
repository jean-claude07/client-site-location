import React, { Component } from 'react'
import axios from 'axios';

export class Header extends Component {
    state={
        user: {}
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

    handleClick = () => {
        sessionStorage.clear()
        localStorage.clear(window.location.reload())
    }
    render() {
        const user = this.state.user.client;
        var user_token = this.state.user.token;
        let utilisateur;
        if(sessionStorage.id){
            let connect; 
            if(localStorage.token === user_token){
                connect = (
                    <>
                        <li class="drop-down"><a href=""><img src={`http://localhost:4000/${user && user.photoUser.url}`} class="photoHeader" alt="..." 
                                        style={{border: '3px', borderColor: 'blueviolet', backgroundColor: 'blueviolet'}}
                            /> </a>
                            <ul>
                            <li><a href="/espace_client">Profile</a></li>
                            <li><a href="#">Parametre</a>
                                
                            </li>
                            <li><a href="#" onClick={this.handleClick} >Deconnexion</a></li>
                            
                            </ul>
                        </li>
                    </>
                )
            }

            utilisateur = (
                <>
                    {connect}
                </>
            )
        }
        return (
            <div>
                <header id="header">

                    <div id="topbar">
                    <div class="container">
                        <div class="social-links">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="container">

                    <div class="logo float-left">
                        
                        <h1 class="text-light"><a href="/" class="scrollto"><span>Location</span></a></h1>
                        
                    </div>

                    <nav class="main-nav float-right d-none d-lg-block">
                        <ul>
                        <li class="active"><a href="/">Accueil</a></li>
                        <li><a href="/#about">Condition general</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#portfolio">Produits</a></li>
                        {/* <li><a href="#team">Team</a></li> */}
                        
                        <li><a href="/#footer">Contact </a></li>
                        {utilisateur}
                        </ul>
                    </nav>
                    
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
