import React from "react"
import ReactDOM from "react-dom"
import "./styles/common.less"
import App from "./app"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <App />,
  document.getElementById("jairwin")
)

serviceWorker.unregister()
