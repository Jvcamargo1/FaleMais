import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/background.png')} 
        style={styles.backgroundImage} 
        resizeMode="cover" 
      />
      <View style={styles.blueBar}>
        <Text style={styles.title}>Fala+</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
          <Image 
            source={require('../assets/images/btn_refeicao.png')} // Adicione sua imagem aqui
            style={styles.buttonImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image 
            source={require('../assets/images/btn_bebidas.png')} // Adicione sua imagem aqui
            style={styles.buttonImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botão 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Botão 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha o conteúdo no topo
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  blueBar: {
    width: '100%', // Largura total da tela
    height: 80, // Altura da barra azul
    backgroundColor: '#add8e6', // Azul claro
    justifyContent: 'center', // Centraliza verticalmente o conteúdo
    alignItems: 'flex-start', // Alinha o conteúdo à esquerda
    paddingLeft: 20, // Espaçamento à esquerda
  },
  title: {
    fontSize: 32, // Tamanho da fonte
    color: '#fff', // Cor do texto
    fontWeight: 'bold', // Peso da fonte
    textAlign: 'left', // Alinhamento do texto à esquerda
  },
  buttonContainer: {
    flexDirection: 'row', // Layout horizontal para os botões
    flexWrap: 'wrap', // Permite que os botões "quebrem" para a linha seguinte
    justifyContent: 'space-between', // Espaço uniforme entre os botões
    padding: 0, // Aumentar o padding ao redor da grade de botões
    marginTop: 20, // Adicionar margem superior para separar da blue bar
  },
  button: {
    backgroundColor: 'transparent', // Fundo transparente
    borderRadius: 10, // Bordas arredondadas
    paddingVertical: 0, // Remover espaçamento interno vertical
    paddingHorizontal: 0, // Remover espaçamento interno horizontal
    marginVertical: 10, // Espaçamento vertical entre os botões
    width: '45%', // Largura do botão, dois por linha
    alignItems: 'center', // Alinha o conteúdo no centro
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do botão
  },
  buttonImage: {
    width: '100%', // Largura da imagem igual à largura do botão
    height: 100, // Altura da imagem, ajuste conforme necessário
    resizeMode: 'contain', // Ajusta a imagem para manter a proporção
  },

});

export default App;
