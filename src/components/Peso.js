import react from 'react';
import React from 'react';

export default class Peso extends React.Component {
    constructor(){
        //super - metodo que chama o construtor da classe pai react.component
          super()
    }
    render(){
        return(
            <div>
                <h1 className="text-primary text-left">Calculadora de IMC</h1>
                <label className="inputs">      
                    Peso
                    <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}></input>
                </label>
            </div>
        )
    }
        
}