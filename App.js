import React, {Component}from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "Não importa o tamanho da montanha, ela não pode tapar o sol.",
      "O bom-senso vai mais longe do que muito conhecimento.",
      "Quem quer colher rosas deve suportar os espinhos.",
      "São os nossos amigos que nos ensinam as mais valiosas lições.",
      "Aquele que se importa com o sentimento dos outros, não é um tolo.",
      "A adversidade é um espelho que reflete o verdadeiro eu.",
      "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
    ]
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase:' " ' + this.frases[numeroAleatorio] + ' " ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.frase}>
          {this.state.textoFrase}
        </Text>

        <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>
              Abrir Biscoito
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  } 
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
  frase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 25,
    borderColor: "#dd7b22",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText:{
    fontSize:15,
    color: "#dd7b22",
    fontWeight: "bold",
  }
}

export default App;