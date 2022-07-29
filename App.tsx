import moment from 'moment';
import React, { useState } from 'react';
import { View, Button, TextInput, TouchableOpacity, Pressable, Text } from 'react-native';
import AppStateDetector from './components/fingerPrintReader';
import Timer from './components/timer';
import styles from './styleSheet'
import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './redux/store';
export type TData= {
  key:number
  result: string
  time: string
}
export default function App() {
  // 开始时间
  const [start, setStart] = useState<number | undefined>()
  // 结束时间
  const [end, setEnd] = useState<number | undefined>()
  // gap
  const [gap, setGap] = useState<number>(100)
  const [modalPopTime, setModalPopTime] = useState<number>(1200)
  // 频率
  const [frequency, setFrequency] = useState<number>(2000)
  // 需执行次数
  const [count, setCount ] = useState<number>(10000)
  // 是否显示table
  const [displayTable, setDisplayTable] = useState<boolean>(false)
  // table数据
  const [data, setData] = useState<TData[]>([])

  function onStart(){
    console.log('start')
    setStart(pre=>{
      return pre && end ? pre + moment().valueOf()- end : moment().valueOf()
    })
    setEnd(undefined)
  }
  function onEnd(){
    console.log('end')
    setEnd(moment().valueOf())
  }
  function onDisplay(){
    console.log('onDisplay')
    setDisplayTable(!displayTable)
  }

  return (
    // <ReduxProvider store={store}>
      <View style={styles.container} collapsable={false}>
        <View style={styles.contentSection}>
          <Timer start={start} end={end}></Timer>
          <AppStateDetector start={start} end={end} frequency={frequency} count={count} show={displayTable} data={data} setData={setData} setEnd={setEnd} gap={gap} modalPopTime={modalPopTime}/>
        </View>
        <View style={styles.toolBoxSection}>
          <View style={styles.insertParamsSection}>
            <Text style={styles.title}>TOOLBAR</Text>
            <Button title='Start' onPress={onStart} />
            <Button title='End' onPress={onEnd} />
            <Button title='Display Detail' onPress={onDisplay}/>
            <Text style={styles.parameterTitle}>FREQUENCY</Text>
            <TextInput  style={styles.parameterValue}  onChangeText={(e)=>setFrequency(isNaN(parseInt(e)) ? 2000 : parseInt(e))} value={frequency?.toString()} placeholder="frequency" keyboardType="numeric"/>
            <Text style={styles.parameterTitle}>COUNT</Text>
            <TextInput style={styles.parameterValue} onChangeText={(e)=>setCount(isNaN(parseInt(e)) ? 10000 : parseInt(e))} value={count?.toString()} placeholder="count" keyboardType="numeric"/>
            <Text style={styles.parameterTitle}>GAP TIME</Text>
            <TextInput style={styles.parameterValue} onChangeText={(e)=>setGap(isNaN(parseInt(e)) ? 100 : parseInt(e))} value={gap.toString()} placeholder="gap" keyboardType="numeric"/>
            <Text style={styles.parameterTitle}>MODAL POP TIME</Text>
            <TextInput style={styles.parameterValue} onChangeText={(e)=>setModalPopTime(isNaN(parseInt(e)) ? 1200 : parseInt(e))} value={modalPopTime.toString()} placeholder="modalPopTime" keyboardType="numeric"/>
          </View>
          { data && data.length >0 && displayTable && 
            <View style={styles.infoSection}>
              <Text style={styles.title}>INFO SECTION</Text>
                <Text style={styles.parameterTitle}>Successes</Text>
                <Text style={styles.parameterValue}>{`${data.filter(e=>e.result === 'Success').length}(${data.filter(e=>e.result === 'Success').length/data.length})`}</Text>
                <Text style={styles.parameterTitle}>Failures</Text>
                <Text style={styles.parameterValue}>{`${data.filter(e=>e.result === 'Fail').length}(${data.filter(e=>e.result === 'Fail').length/data.length})`}</Text>
            </View>
          }
        </View>
      </View>
      // </ReduxProvider>
  );
}

