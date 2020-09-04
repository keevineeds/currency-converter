import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moedaA_valor: '',
            moedaB_valor: '',
            nomeclatura: ''
        }
        this.converter = this.converter.bind(this)
    }

    converter(){
        var de_para = `${this.props.moedaB}&base=${this.props.moedaA}`;
        var url = `https://api.exchangeratesapi.io/latest?symbols=${de_para}`
        fetch(url).then(res=>{
            return res.json()
        }).then(json =>{
            var cot_dia = json.rates[this.props.moedaB]
            var moedaB_valor = parseFloat(this.state.moedaA_valor * cot_dia).toFixed(2)
            this.setState({moedaB_valor})
            var nomeclatura;

            //verifica a moeda para adicionar a nomeclatura
            switch(this.props.moedaB){
                case 'BRL':
                    nomeclatura = "R$ "
                    this.setState({nomeclatura})
                    break;
                
                case 'GBP':
                    nomeclatura = "£ "
                    this.setState({nomeclatura})
                    break;
                
                case 'USD':
                    nomeclatura = "US$ "
                    this.setState({nomeclatura})
                    break;
                
                case 'CAD':
                    nomeclatura = "CA$ "
                    this.setState({nomeclatura})
                    break;

                case 'RUB':
                    nomeclatura = "₽ "
                    this.setState({nomeclatura})
                    break;

                case 'EUR':
                    nomeclatura = "€ "
                    this.setState({nomeclatura})
                    break;

                case 'AUD':
                    nomeclatura = "AU$ "
                    this.setState({nomeclatura})
                    break;
                
            }
        })
    }
    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="number" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" className="btn btn-dark" onClick= {this.converter}></input>
                <h3>{this.state.nomeclatura}{this.state.moedaB_valor}</h3>
            </div>
        )
    }
}
