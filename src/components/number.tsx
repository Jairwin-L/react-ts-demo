import React, { useContext } from 'react';
import CreateContext from '../hook/create-context'

export default () => {
  const data = useContext(CreateContext)
  const { number } = data
  console.log(data);
  console.log(number);

  return (
    <>我是Number：{number}</>
  )
}