import React, { Component, useEffect } from 'react';
import { Contenedor, FichaStyle } from '../styledComponent';
import Ficha from "./Ficha.js"

export default class JobCard extends Component {
    constructor(){
        super()
        this.state={
            jobs: []
        }

    }
    componentDidMount (){
        this.fetchInfo("http://3.19.186.177:3333/jobs");
    }

    fetchInfo(url){
        fetch(url)
            .then(peticion=> peticion.json())
            .then(data => this.setState({
                jobs:data
            }))
    }

    render() {
        const jobs = this.state.jobs;
        return (
        <Contenedor>    
            
                {   jobs.map((item, index) =>(
                    <Ficha poste={item} key={index}/>
                    ))
                }
            
        </Contenedor>
        )
    }
}
