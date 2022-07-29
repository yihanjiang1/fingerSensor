import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { formatZero, getTimerFromCurrentTime, intervalFunction, TTimer } from '../../utilities'
import styles from './styleSheet'
// import { YHFormatZero } from '../utilityClass/YHUtility'
interface Iprops {
    start?:number // starting timestamp
    end?: number
}
const Timer = ( props:Iprops ) => {
    const { start, end }= props
    const [timer, setTimer] = useState<TTimer|undefined>(undefined)
    useEffect(() => {
        if(start){
            intervalFunction(()=>{
                if(!end){
                    setTimer(getTimerFromCurrentTime(start))
                }
            },12, start)
        }
    },[start, end])
    return (
        <View style={styles.rootViewStyle}>
            <View style={styles.cellViewStyle}>
                <Text style={styles.labelStyle}>Hour:</Text>
                <Text style={styles.textStyle}>{formatZero(timer?.hour,2)}</Text>
            </View>
            <View style={styles.colonViewStyle}>
                <View style={styles.colonStyle}></View>
                <View style={[styles.colonStyle, { marginTop : 10 }]}></View>
            </View>
            <View style={styles.cellViewStyle}>
                <Text style={styles.labelStyle}>Minute:</Text>
                <Text style={styles.textStyle}>{formatZero(timer?.minute,2)}</Text>
            </View>
            <View style={styles.colonViewStyle}>
                <View style={styles.colonStyle}></View>
                <View style={[styles.colonStyle, { marginTop : 10 }]}></View>
            </View>
            <View style={styles.cellViewStyle}>
                <Text style={styles.labelStyle}>Second:</Text>
                <Text style={styles. textStyle}>{formatZero(timer?.second,2)}</Text>
            </View>
            <View style={styles.colonViewStyle}>
                <View style={styles.colonStyle}></View>
                <View style={[styles.colonStyle, { marginTop : 10 }]}></View>
            </View>
            <View style={styles.cellViewStyle}>
            <Text style={styles.labelStyle}>Millisecond:</Text>
                <Text style={styles.textStyle}>{formatZero(timer?.millisecond,3)}</Text>
            </View>
        </View>
    )
}

export default Timer
