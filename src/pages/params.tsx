import React, { useState } from 'react'
import { useParams, useRouteMatch } from "react-router-dom"

interface RouterParams {
  id: string | undefined
}

export default () => {
  let match = useRouteMatch("/params/:id");
  console.log(match);
  
  let data = useParams<RouterParams>();
  console.log(data);
  console.log(data.id);
  return (
    <>页面参数：{data.id}</>
  )
}
