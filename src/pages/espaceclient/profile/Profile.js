import React, { Component } from 'react'
import { date } from 'yup/lib/locale';
import person_2 from '../../../photo/person_2.jpg'

export class Profile extends Component {
    render() {
        const user = this.props.user.user.client
        const locations = this.props.user.user.location
        const date = new Date(user.created_at);
        const daty = date.toLocaleDateString()
        return (
            <div>
                <br/><br/>
                <section id="pricing" class="wow fadeInUp section-bg">

                    <div class="container">

                    <header class="section-header">
                        <h3>Espace client</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </header>

                    <div class="row flex-items-xs-middle flex-items-xs-center">

                        <div class="col-xs-12 col-lg-8">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"> 
                                    List des reservations
                                </h4>
                            </div>
                            <div class="card-block">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th className="text-danger" scope="col">D R</th>
                                        <th scope="col">Produit</th>
                                        <th scope="col">Prix Total</th>
                                        <th scope="col">Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {locations && locations.map(location => {
                                            const total = location.nombre * location.cout
                                            let payment;
                                            if(location.payment === "OK"){
                                                payment = (
                                                    <button class="btn btn-danger" type="button" disabled style={{backgroundColor: 'red'}}>
                                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                        {/* <span class="sr-only">Loading...</span> */}
                                                        Payer
                                                    </button>
                                                )
                                            }else{
                                                payment = (
                                                    <button class="btn btn-primary" type="button" disabled>
                                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                        {/* <span class="sr-only">Loading...</span> */}
                                                        Non payer
                                                    </button>
                                                )
                                            }
                                            
                                            return (

                                                <tr>
                                                <th scope="row">
                                                    <div  width="50px" height="50px">
                                                        {location.date}
                                                    </div>  
                                                </th>
                                                <td>{location.nomProduit} </td>
                                                <td><strong className="text-warning">{total} Ariary </strong></td>
                                                <td>
                                                        {payment}
                                                </td>
                                                </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            
                            </div>
                        </div>
                        </div>

                        <div class="col-xs-12 col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <img src={`http://localhost:4000/${user && user.photoUser.url}`} class="rounded-circle" alt="..." width="200px" height="100px" 
                                    style={{border: '3px', borderColor: 'blueviolet', backgroundColor: 'blueviolet'}}
                                />
                            </div>
                            <div class="card-block">
                            <h4 class="card-title"> 
                                {user && user.username}
                            </h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <strong>Email : </strong> {user && user.email}
                                </li>
                                <li class="list-group-item">
                                    <strong>Telephone : </strong> {user && user.telephone}
                                </li>
                                <li class="list-group-item">
                                    <strong>Menbre depuis : </strong> {daty}
                                </li>
                                <li class="list-group-item">welcome to welcome</li>
                            </ul>
                            <a href="#" class="btn">Editer le profile</a>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Profile
