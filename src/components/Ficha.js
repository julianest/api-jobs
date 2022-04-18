import React, { Component } from 'react';
import {LabelsUni, List, JobDates, JobCaract, DivLabels, DivText, DivImg, FichaStyle } from '../styledComponent';

export default class Ficha extends Component {
  
  render() {
    const{imgJob, titleEnt, jobNew, featured, titleJob, datePublished, modality, ubication, keyWords }=this.props.poste;
    console.log(titleEnt);
    
    return (
      <FichaStyle className="tarjeta">
        <DivImg className= "imagen Logo">
          <img src={imgJob} className="imgLogo" />
        </DivImg>
        <DivText className= "textoMedioLogo">
          <div>
            <span className="titleEntrep">{titleEnt}</span> 
            <JobCaract jobn={jobNew}>{jobNew ? "NEW!": ""}</JobCaract>  
            <JobCaract jobf={featured}>{featured ? "FEATURED": ""}</JobCaract>  
          </div>
          <div>
            <p className="titleJob" >{titleJob}</p>
          </div>
          <List>
              <JobDates>{datePublished}</JobDates>
              <JobDates><li>{modality}</li></JobDates>
              <JobDates><li>{ubication}</li></JobDates>
          </List>
        </DivText>
        <DivLabels className ="labels">
          <LabelsUni className="labelsUni">{keyWords}</LabelsUni>
        </DivLabels>
      </FichaStyle>
    )
  }
}


