import React from 'react';
import "./estilo.css";

export default class Altura extends React.Component  {
    constructor(){
    //super - metodo que chama o construtor da classe pai react.component
    super()
    }
    render() {
         return(
            <div className="inputs">
                <label>
                    Altura
                    <input type="text" value={this.props.a} onChange={(e)=>{this.props.sa(e.target.value)}}></input>
                </label>
            </div>
        )
    }
       
}