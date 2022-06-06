import React, {Component} from "react";
import './style.css'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        textoFrase: ''
    }
    this.frases = ['Às vezes, o silêncio é a melhor resposta.', 'Nem tudo que reluz é ouro.', 'Trilhar o caminho é mais importante que conhece-lo.', 'Nada como um dia após o outro dia.','A resposta está na paciência.', 'Revidar nem sempre é uma opção.', 'Confie no seu processo.', 'Fuja da síndrome do impostor.', 'Feito é melhor que perfeito.', 'Na dúvida, haja! O tempo passa independentemente das suas atitudes.', 'Acredite em milagres, mas não conte com eles.', 'A sorte está do lado de quem corrre atrás.', 'Siga os seus sonhos sem que digam até onde você pode ir.', 'Não deixe o medo te engolir.', 'Lute por tudo aquilo que acredita.', 'Contemple tudo o que conquistou até chegar aqui.','Não  deixe dizerem quem você é.', 'A vida presenteia quem não para de tentar','Descance enquanto eles trabalham', 'Seja a inspiração de quem você já foi um dia.'];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }
  
  quebraBiscoito() {
    let state = this.state;
    let numRandom = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = `"${this.frases[numRandom]}"`;
    this.setState(state);
  }
  
  render() {
    return (
      <div className='container'>
        <h1>Boa sorte!</h1>
        <img src={require('./assets/biscoito.png')} className='img' alt='cookie'/>
        <Botao name='Abra o biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className="text-frase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.name}</button>
      </div>
    )
  }
}

export default App; 