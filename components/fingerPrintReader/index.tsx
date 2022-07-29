import React, { useState, useEffect } from "react";
import { Text, View, VirtualizedList } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { formatTimer } from "../../utilities";
import styles from './styleSheet'

import moment from "moment";
import { TData } from "../../App";
import { useAsyncEffect } from "../../utilities/hook";
interface IProps {
  start?:number // starting timestamp
  end?: number
  gap: number
  modalPopTime: number
  setEnd: React.Dispatch<React.SetStateAction<number|undefined>>
  count?: number
  frequency?:number
  show?: boolean
  setData: React.Dispatch<React.SetStateAction<TData[]>>
  data: TData[]
}


const AppStateDetector = (props: IProps) => {
  const { start, end, frequency, count, show, data, setData, setEnd, gap, modalPopTime} = props
  // const [count, setCount]= useState<number>(0)

  useAsyncEffect(async () => {
    if(start && frequency && count){
      // console.log(formatTimer(start))
      const res = await LocalAuthentication.authenticateAsync({ disableDeviceFallback: true, promptMessage: 'Login with Biometrics',cancelLabel: 'Cancel'})
        if(res.success){
      // console.log(formatTimer(start))

            let currentIndex = 0
            let failureTime:string | number | NodeJS.Timeout=0
            intervalFunction(function (timer:string | number | NodeJS.Timeout,endTime?:number ) {
                currentIndex ++
                // console.log( `${currentIndex}--> Modal Up Time: ${formatTimer(start)}`)
                clearTimeout(failureTime)
                if(currentIndex !==1 ){
                failureTime = setTimeout(()=>{
                  LocalAuthentication.cancelAuthenticate().then(()=>{
                    setData(pre=>{
                      const timer = formatTimer(start)
                      console.log(pre.length !== currentIndex ? 'Fail' + timer: '')
                      return pre.length !== currentIndex 
                        ? pre.concat({key: currentIndex, result: 'Fail', time: timer})
                        : pre
                    })
                  })
                }, frequency - gap)
                }

                LocalAuthentication.authenticateAsync({ disableDeviceFallback: true, promptMessage: 'Login with Biometrics',cancelLabel: 'Cancel'}).then((res)=>{
                  if(res.success){
                    clearTimeout(failureTime)
                    const timer = formatTimer(start)
                    console.log('Success', start ? timer : '')
                      setData(pre=>{
                        return pre.concat({key: currentIndex, result: 'Success', time: timer})
                      })
                  }
                })
              if (currentIndex === count || endTime) {
                console.log('外部函数执行完毕')
                // setEnd(moment().valueOf())
                clearTimeout(timer)
              }
            }, frequency, start, gap, modalPopTime)
        }
    }
  },[start])

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[{fontSize: 40} ]}>Result Section</Text>
      </View>
      <View style={styles.title}>
          <Text style={[{fontSize: 12} ]}>Data will only Display after Progress Finish.</Text>
          <Text style={[{fontSize: 12} ]}>Click Display Result to Display Full Data, otherwise only 'Fail' Data will Display after Progress Finish.</Text>
      </View>
      { start && data.length < (count || 0) &&
        <View style={styles.title}>
          <Text style={[{fontSize: 20} ]}>Fetching data.....</Text>
        </View>
      }
      { show && (end || data.length === (count || 0)) && <VirtualizedList<TData[]>
        style={styles.list}
        data={data}
        initialNumToRender={4}
        renderItem={({ item, index }) => <Item data={item[index]} />}
        getItemCount={(data)=>data.length}
        getItem={(data)=>data}
      />}
      { !show && (end || data.length === (count || 0)) && <VirtualizedList<TData[]>
        style={styles.list}
        data={data.filter(e=>e.result ==='Fail')}
        initialNumToRender={4}
        renderItem={({ item, index }) => <Item data={item[index]} />}
        getItemCount={(data)=>data.length}
        getItem={(data)=>data}
      />}
    </View>
  );
};
const Item = (props:{data:TData}) => {
  const { data } = props
  return( 
    <View style={styles.row}>
      <View style={styles.item}>
        <Text>{data.key}</Text>
      </View>
      <View style={styles.item}>
        <Text>{data.result}</Text>
      </View>
      <View style={styles.item}>
        <Text>{data.time}</Text>
      </View>
    </View>
  )
}


export default AppStateDetector;
function intervalFunction (fn:any, interval:number, start:number, gap:number, modalPopTime: number) {
  let count = 0
  let currentInterval = interval
  let timer:string | number | NodeJS.Timeout = 0
  const startTime = moment().valueOf()
  console.log('screenreader', formatTimer(start))
  function inner() {
      count++
      let offset = new Date().getTime() - (startTime + interval-modalPopTime + (count-1) * interval)
      // let offset = new Date().getTime() - (startTime + count * interval)
      // offset =  offset > interval ? interval : offset
      currentInterval = interval - offset
      console.log(`${count}--> 当前时间: ${formatTimer(start)}, 代码执行时间: ${offset}, 下次循环间隔: ${currentInterval} `)
      timer = setTimeout(inner, currentInterval)
      fn(timer)
  }
  setTimeout(inner, currentInterval-modalPopTime)
}