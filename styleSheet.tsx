import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  contentSection:{
    // backgroundColor: 'blue',
    height: '100%',
    width: '75%'
  },
  toolBoxSection:{
    height: '100%',
    width: '25%',
  },
  insertParamsSection:{
    height:'60%',
    // marginBottom: 'auto',
    // marginTop:'auto'
    marginTop:'10%'

  },
  infoSection:{
    height:'25%',
  },
  title:{
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
  },
  parameter:{
    backgroundColor:'cornflowerblue',
    height: 60,
  },
  parameterTitle:{
    backgroundColor:'cornflowerblue',
    // minWidth:'100px',
    // width: '100%',
    // fontWeight: '500',
  },
  parameterValue: {
    backgroundColor:'cornflowerblue',
    // width: '100%',
    // textAlign: 'center',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
});
export default styles