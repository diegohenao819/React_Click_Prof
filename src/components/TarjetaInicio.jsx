import React from 'react'
import Logo from '../img/CLIK_PROF_LOGO.png';

import '../css/TarjetaInicio.css'

import { useHistory } from 'react-router-dom';

function TarjetaInicio() {

  const history = useHistory();

    return (
        <div>
        <section className="TarjetaInicio">
        <h1>CLICK-PROF <small className="text-muted" >Do you want to test your English? </small></h1>
        <h4>Take our diagnostic test!</h4>
      </section>
    
    
      <div className="container mt-5 border imagenInicio">
        <div className="row fotoContainer" >
          <div className="col-xs-12 col-sm-6 col-sm-push-9">
            <h5 className="text-muted"> ENGLISH TEST </h5>
            <p className="text-dark" > We are a company specialized in English language online testing!  </p>
            <br />
            <p> Thanks to the experience we have acquired throughout the time, we can guarantee the correct assessment of a learner's English level.. </p>
            <button className="button btn-primary EnglishTest" onClick={() => history.push('/quiz')}>ENGLISH TEST
            </button>
          </div>
          <div className="col-sm-3 col-md-3 foto" >
            <img src={Logo} alt="Logo" className=" rounded img-fluid"/>
          </div>
        </div>
      </div>
      </div>
    )
}

export default TarjetaInicio
