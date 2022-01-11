import React from 'react';

export default class CalcularIMC extends React.Component  {
    constructor(){
    //super - metodo que chama o construtor da classe pai react.component
    super()
    //para poder usar o this.calc
    this.calc=this.fcalc.bind(this)
    }
    //funcao para usar internamente
    fcalc = () => {
        const r = this.props.p/(this.props.a*this.props.a)
        this.props.sr(r)
        console.log(r)
    }
    render() {
    return(
            <div className="inputs">
                <button className="btn btn-primary" onClick={this.calc}>Calcular</button>
            </div>
            )
    
    }
}