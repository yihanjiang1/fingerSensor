import { StyleSheet, StatusBar } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'orange',
        border: '3px solid black',
        width:'100%',
        height:'80%'
    },
    title: {
      width: '100%',
      // borderBottom: '3px solid black',
      alignItems: 'center',
    },
    list:{
        width:'100%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-around'
    },
    item: {
      backgroundColor: 'white',
      border:'1px solid black',
      justifyContent: 'center',
      width:'25%',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
   
  });

export default styles
