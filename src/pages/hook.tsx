import React, { useState, useEffect, useRef, useReducer } from 'react'
import { Link } from "react-router-dom"
import Number from '../components/number'
import useWinSize from '../hook/use-win-size'
import CreateContext from '../hook/create-context'
import { Button, Divider, Card, Space, Typography, Input, Tabs } from 'antd'
const { TabPane } = Tabs;
const { Title, Text } = Typography;
interface Hook {
  id: string | undefined,
  text: `useState` | `useEffect` | `useContext` | `useRef` | `useReducer` | `Custom Hook`
}

interface State {
  age: number,
  name: string,
  englishName: string,
  sex: 0 | 1 | 2,
  description: string
}

const hookList: Hook[] = [
  {
    id: '1',
    text: `useState`
  },
  {
    id: '2',
    text: `useEffect`
  },
  {
    id: '3',
    text: `useContext`
  },
  {
    id: '4',
    text: `useRef`
  },
  {
    id: '5',
    text: `useReducer`
  },
  {
    id: '6',
    text: `Custom Hook`
  }
]

export default () => {
  const size = useWinSize()
  let [number, setNumber] = useState<number>(1)
  let [activeKey, setActiveKey] = useState<string>('1')
  let [state, setState] = useState<State>({
    age: 18,
    name: 'React',
    englishName: 'Jairwin',
    sex: 1,
    description: '一名前端开发者'
  })
  const { age, name, englishName, sex, description } = state
  const onAddNumber = () => setNumber(number += 1)
  const onMinusNumber = () => setNumber(number -= 1)
  const [text, setText] = useState('')
  const inputRef = useRef<any>(null)
  const [count, dispatch] = useReducer((state: number, action: `add` | `minus`) => {
    console.log(state);
    console.log(action);
    switch (action) {
      case 'add':
        return state + 1
      case 'minus':
        return state - 1
      default:
        return state
    }
  }, 0)
  const onButtonClick = () => {
    inputRef.current.value = "Hello，useRef"
    setText(inputRef.current.value)
    console.log(inputRef)
  }
  const [list, setList] = useState<Hook[]>(hookList)
  useEffect(() => {
    // message.success(`数据请求成功：${number}`);
    // console.log(`数据请求成功：${number}`);
    // return () => console.log(`等于componentWillUnMount：卸载当前组件`);
  }, [])
  return (
    <>
      <Title level={1}>Hook：React 16.8 的新增特性，它可以让你在不编写class的情况下使用state以及其他的React特性。</Title>
      {
        hookList.map((item: Hook) => <Text key={item.id} code strong={true}>{item.text}</Text>)
      }
      <Tabs defaultActiveKey={activeKey} onChange={(val) => setActiveKey(val)}>
        {
          hookList.map((item: Hook) => <TabPane key={item.id} tab={item.text}></TabPane>)
        }
      </Tabs>
      {activeKey === '1' &&
        <>
          <Card>
            <ul>
              <li>姓名：{name}</li>
              <li>英文名字：{englishName}</li>
              <li>性别：{sex === 1 ? `男` : `女`}</li>
              <li>男：{age}</li>
              <li>描述：{description}</li>
            </ul>
            <p>Number加减：{number}</p>
          </Card>
          <Space>
            <Button type="primary" disabled={number < 10 ? false : true} onClick={() => setNumber(number += 1)}>加一</Button>
            <Button type="primary" disabled={number <= 0 ? true : false} onClick={() => setNumber(number -= 1)}>减一</Button>
          </Space>
          <Divider></Divider>
          <Space>
            <Button type="primary" disabled={number < 10 ? false : true} onClick={onAddNumber}>加一</Button>
            <Button type="primary" disabled={number <= 0 ? true : false} onClick={onMinusNumber}>减一</Button>
          </Space>
        </>
      }
      {activeKey === '2' &&
        <Card>
          <p>useEffect相当于类组件的componentDidMount，它主要是靠副作用<Text code strong={true}>[]</Text>里面的值去监听数据变化，比如：分页</p>
          <ul>
            <li></li>
          </ul>
          <Link to={`demo`}>Demo页面</Link>
          <br/>
          <Link to={`params/1`}>带参数的页面</Link>
        </Card>
      }
      {activeKey === '3' &&
        <Card>
          <Button type="primary" disabled={number < 10 ? false : true} onClick={() => setNumber(number += 1)}>加一</Button>
          <Button type="primary" disabled={number <= 0 ? true : false} onClick={() => setNumber(number -= 1)}>减一</Button>
          <CreateContext.Provider value={{ number, list }}>
            <Number />
          </CreateContext.Provider>
        </Card>
      }
      {activeKey === '4' &&
        <>
          <Input ref={inputRef} value={text} />
          <Button onClick={onButtonClick}>显示Input组件的内容</Button>
        </>
      }
      {activeKey === '5' &&
        <>
          <Card>{count}</Card>
          <Button onClick={() => dispatch('add')}>Increment</Button>
          <Button onClick={() => dispatch('minus')}>Decrement</Button>
        </>
      }
      {activeKey === '6' && <Title level={2}>页面大小：{size.width} X {size.height} px</Title>}
    </>
  )
}
