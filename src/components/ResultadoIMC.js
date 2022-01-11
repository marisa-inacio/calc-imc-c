import React from 'react';

export default class Resultado extends React.Component {
    //como o componente resultado na app.js recebe um atributo por props para poder se usar o this
    constructor(){
        //super - metodo que chama o construtor da classe pai react.component
          super()
    }
    render(){ 
        return(
            <div className="inputs">
                {/* duas casas decimais no resultado */}
                <p style={{fontWeight: "bold"}}>Resultado: {this.props.r.toFixed(2)}</p>
            </div>
        )
    }
}
