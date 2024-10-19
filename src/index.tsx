import React from "react"
import ReactDOM from "react-dom"
import "./styles/common.less"
import App from "./app"
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<App />
	</ConfigProvider>,
	document.getElementById("jairwin")
)

serviceWorker.unregister()
