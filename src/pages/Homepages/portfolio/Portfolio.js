import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react'
import Chaises from './Chaises';
import Housse from './Housse';
import Table from './Table';
import Tonnelle from './Tonnelle';
import Tous from './Tous';
import Vaisselle from './Vaisselle';
import Seau_a_champagne from './Seau_a_champagne';
import Portes_plats from './Portes_plats'
import Pupitre from './Pupitre';
import Marmites from './Marmites';
import Plats from './Plats'
import Chauffe_plats from './Chauffe_plats';
import Verres from './Verres';
import Nappe from './Nappe';

export class Portfolio extends Component {
    state={
        groupe: ''
    }
    
    handleTonnelle = () => {
        this.setState({
            groupe:  'tonnelle'
        })
    }

    handleTable = () => {
        this.setState({
            groupe: 'table'
        })
    }

    handleHousse = () => {
        this.setState({
            groupe: 'housse'
        })
    }

    handleVaisselle = () => {
        this.setState({
            groupe: 'vaisselle'
        })
    }

    handleSeau = () => {
        this.setState({
            groupe: 'seau'
        })
    }

    handlePortes = () => {
        this.setState({
            groupe: 'portes'
        })
    }

    handlePupitre = () => {
        this.setState({
            groupe: 'pupitre'
        })
    }

    handleMarmites = () => {
        this.setState({
            groupe: 'marmites'
        })
    }

    handleNappe = () => {

        this.setState({
            groupe: 'nappe'
        })
    }

    handlePlats = () => {
        this.setState({
            groupe: 'plats'
        })
    }

    handleChauffe = () => {
        this.setState({
            groupe: 'chauffe'
        })
    }

    handleVerres = () => {
        this.setState({
            groupe: 'verres'
        })
    }

    handleChaises = () => {
        this.setState({
            groupe: 'chaises'
        })
    }

    handleTous = () => {
        window.location.reload()
    }
    render() {

        let views;
        if(this.state.groupe === 'tonnelle'){
            views = <Tonnelle/>
        }else if(this.state.groupe === 'table'){
            views = <Table/>
        }else if(this.state.groupe === 'nappe'){
            views = <Nappe/>
        }else if(this.state.groupe === 'housse'){
            views = <Housse/>
        }else if(this.state.groupe === 'vaisselle'){
            views = <Vaisselle/>
        }else if(this.state.groupe === 'seau'){
            views = <Seau_a_champagne/>
        }else if(this.state.groupe === 'portes'){
            views = <Portes_plats/>
        }else if(this.state.groupe === 'pupitre'){
            views = <Pupitre/>
        }else if(this.state.groupe === 'marmites'){
            views = <Marmites/>
        }else if(this.state.groupe === 'plats'){
            views = <Plats/>
        }else if(this.state.groupe === 'chauffe'){
            views = <Chauffe_plats/>
        }else if(this.state.groupe === 'verres'){
            views = <Verres/>
        }else if(this.state.groupe === 'chaises'){
            views = <Chaises/>
        }else if(this.state.groupe === 'tous'){
            views = (
                < >
                    <Tous/>
                </>
            )
        }else{
            views = <Tous/>
        }
        
        return (
            <>
                <div id="portfolio" class="section-bg" style={{position: 'relative'}}>
                    <div class="container">

                        <header class="section-header">
                        <h3 class="section-title">List des produits</h3>
                        </header>

                        <div class="row">
                        <div class="col-lg-12">
                            <ul id="portfolio-flters">
                                <li  class="filter-active" onClick={this.handleTous} >Tous</li>
                                <li onClick={this.handleTonnelle}>Tonnelle</li>
                                <li onClick={this.handleTable}>Table</li>
                                <li onClick={this.handleHousse}>Housse</li>
                                <li onClick={this.handleVaisselle}>Vaisselle</li>
                                <li onClick={this.handleSeau}>Seau à champagne</li>
                                <li onClick={this.handlePortes}>Ports plats</li>
                                <li onClick={this.handlePupitre}>Pupitre</li>
                                <li onClick={this.handleMarmites}>Marmites</li>
                                <li onClick={this.handleNappe}>Nappe</li>
                                <li onClick={this.handlePlats}>Plats</li>
                                <li onClick={this.handleChauffe}>Chauffe plats</li>
                                <li onClick={this.handleVerres}>Verres</li>
                                <li onClick={this.handleChaises}>Chaises</li>
                            </ul>
                        </div>
                        </div>

                        
                            <>
                                {views}
                            </>
                    

                    </div>
                    
                </div>  
            </>
        )
    }
}

export default Portfolio
