import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerTop: {
    justifyContent: 'flex-start'
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
    button__home:{
    marginRight: 40
  },

  textPage: {
    backgroundColor: 'orange',
    padding: 20,
  },

  //----------------------------------Principal----------------------------------------

  img: {
    height: 250,
    width: 375,
    position: 'relative',
    borderRadius: 10,
  },

  text_img: {
    color:'black',
    alignItems: 'baseline',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 20,
    borderRadius: 5,
    margin: 10,
    marginTop: 210,
  },

  prin_head: {
    height: 250,
    width: 375,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 10,
  },
  //-----------------------------Descrição---------------------------------------------

  img_desc: {
    height: 250,
    width: 412,
    position: 'relative',
  },

  icon_desc: {
    position: 'absolute',
    margin: 10,
  },

  area_desc: {
    marginTop: 27.9,
  },

  Descrição: {
    fontSize: 30,
    textAlign: 'center',
  },

  star: {
    flexDirection: 'row',
    marginTop: 10,
  },

  custo: {
    marginLeft: 20,
    fontWeight: 'bold'
  },

  nota: {
    marginLeft: 175,
    marginRight: 10,
  },
  //-------------------------Descrição da Cor-------------------------------------------------

  nada: {
    height: 3,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 10,
  },

  //-------------------------------Login------------------------------------------------------

  imgJS: {
    width: '100%',
    height: 100,
  },

  backimg: {
    backgroundColor:'white',
    width: '100%',
    borderBottomEndRadius: 160,
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },

  nadabranco: {
    backgroundColor: 'white',
    width: '100%',
    height: '16%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    marginBottom: -55
  },

  backcolor: {
    backgroundColor: '#df7d0c',
    justifyContent: 'space-around',
  },

  textinput: {
    backgroundColor: 'white',
    width: 350,
    height: 50,
    borderRadius: 25,
    padding: 15,
    margin: 10,
    flexDirection: "row"
  },

  placeholderLogin: {
    marginLeft: 10,
  },

  textinputbtn: {
    backgroundColor: 'white',
    width: 350,
    height: 50,
    borderRadius: 25,
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 30,
    fontSize: 25,
    color: 'grey',
  },
  iconeye: {
    marginLeft: '72%',
  },
  input: {
    margin: 10,
  },

  cadastro: {
    color: 'white',
    fontSize: 20, 
  },
  //-------------------------------------------------
  area__tab: {
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#df7d0c',
    height: '8%',
  },

  shadowProp: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 10,
    elevation: 2,
  },
  img_cria: {
    width: 100,
    height: 150,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'red',
  },

  text_cria: {
    fontSize: 20,
    marginTop: 70,
  },
  //------------------------Home-------------------------------------

  home_input: {
    height: 60,
    width: 350,
    backgroundColor: '#df7d0c',
    padding: 10,
    fontSize: 25,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 30,
    marginTop: 350,
  },
  //--------------------------------------------------------------------------------

  area__menu:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
    color: 'black'
  },

  button__home2:{
    textAlign:'left'
  },

  area__title:{
    width: '80%',
    fontWeight:'bold',
    fontSize:20,
    color:'#000',
    textAlign:'center'
  },

  button__logout:{
    textAlign:'right'
  },

  PrinMoveis:{
    fontSize: 40,
    padding: 20,
  },
  //-----------------------------------------------------------------------------------------//
  
  MenuPrincipal:{
    height: 75,
    width: '100%',
    borderBottomColor: 'grey',
    marginTop: '7%',
    display: 'flex',
    justifyContent: 'center',
  },

  imgJS2: {
    width: '70%',
    height: 80,
  },

  imgmenu: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  //------------------------------------------Principal-Imagem----------------------------------------//

  imgPrin: {
    width: 150,
    height: 150,
  },

  wellcome: {
    width: '100%',
    backgroundColor: 'orange',
    padding: 10,
    flexDirection: 'row',
  },

  text_bem: {
    alignItems: 'center',
    marginTop: '12%'
  },

  button_prin: {
    width: 100,
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'orange',
    borderRadius: 20,
    marginTop: 10
  },

  //-------------------------------------Img parte de cima-------------------------------------------------------//

  backimg2: {
    width: '80%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export {css};