import React from 'react'
import { Button } from 'antd'
import { useHistory, useLocation } from "react-router-dom"

export default () => {
  const history = useHistory()
  const location = useLocation()
  console.log(history);
  console.log(location);
  
  return (
    <>
      <Button onClick={() => history.goBack()}>使用useHistory返回</Button>
    </>
  )
}
