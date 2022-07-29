import { StyleSheet } from 'react-native'

const style = StyleSheet.create ({
    rootViewStyle : {
        // flex : 1,
        flexDirection: 'row',
        height: '20%',
        display: 'flex',
        alignItems:'center',
        paddingBottom:'5%',
        paddingTop:'5%',
        paddingLeft:'12%',
        paddingRight:'12%',
        backgroundColor: 'cornflowerblue'
    },
    cellViewStyle : {
        flex: 4,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#38BOEC',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
        wight:'100%'

    },
    colonViewStyle:{
        flex : 1,
        backgroundColor: 'cornflowerblue',
        justifyContent: 'center',
        alignItems : 'center'
    },
    colonStyle: {
        width : 8,
        height : 8,
        backgroundColor: '#fff',
        borderRadius:2,
    },
    textStyle: {
        color : '#ED785C',
        fontSize: 50,
    },
    labelStyle: {
        color : '#c73e1b',
        fontSize: 24,
    },
    infoSectionStyle:{

    }
})
export default style
