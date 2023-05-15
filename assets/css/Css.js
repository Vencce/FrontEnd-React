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

  //--------------------------------------------------------------------------

  darkbg:{
    backgroundColor: "white"
  },

  login__logomarca:{
    marginBottom: 10,
    margin: 30,
  },

  login__msg:(text='none')=>({
    fontWeight: "bold",
    fontSize: 22,
    color: 'red',
    marginBottom: 15,
    display: text,
  }),

  login__form:{
    width: "85%",
    height: '40%',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    borderRadius: 10,
  },

  login__input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    margin: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    maxWidth: 350,
  },

  login__button:{
    padding: 12,
    marginTop: 25,
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 5,
  },

  login__buttonText:{
    fontWeight:"bold",
    fontSize: 22,
    color:"white",
  },
  //-------------------------------------------------
  area__tab: {
    backgroundColor: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },

  criador: {
    height: '90%',
    width: '80%',
    marginTop: '8%',
    marginLeft: '10%',
    borderRadius: 10,
    backgroundColor: 'white',
  },

  shadowProp: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 2},
    shadowRadius: 10,
    elevation: 2,
  },

  vitor:{
    backgroundColor: 'white',
    margin: 25,
    borderRadius: 10,
    width: 280,
    height: 170,
    flex: 1,
    flexDirection: 'row',
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
  //------------------------------------------------------------------

  home_input: {
    height: 90,
    width: 250,
    backgroundColor: 'red',
    margin: 15,
    padding: 10,
    fontSize: 45,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
  },
  //--------------------------------------------------------------------------------

  area__menu:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor:'#111',
    alignItems:'center',
    justifyContent:'center'
  },

  button__home2:{
    textAlign:'left'
  },

  area__title:{
    width: '80%',
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',
    textAlign:'center'
  },

  button__logout:{
    textAlign:'right'
  }
});

export {css};