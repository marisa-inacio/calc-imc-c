import React from 'react';


export default class tabelaIMC extends React.Component{
    render(){

        return(

            <div className="w-100 p-2">
            <table className= "table mw-100">
        <thead className="thead-dark">
            <tr>
                <th >
                    Classificação
                </th>
                <th>
                    IMC
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Abaixo do Peso</td>
                <td>Abaixo de 18,5</td>
            </tr>
            <tr>
                <td>Peso Normal</td>
                <td>Entre 18,5 e 24,9</td>
            </tr>
            <tr>
                <td>Sobrepeso</td>
                <td>Entre 25 e 29,9</td>
            </tr>
            <tr>
                <td>Obesidade Grau I</td>
                <td>Entre 30 e 34,9</td>
            </tr>
            <tr>
                <td>Obesidade Grau II</td>
                <td>Entre 35 e 39,9</td>
            </tr>
            <tr>
                <td>Obesidade Grau III ou Mórbida</td>
                <td>Maior do que 40</td>
            </tr>
        </tbody>


        </table>
        </div>
        )
    }   
} 
  