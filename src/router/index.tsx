import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '../util/loadable'
import 'animate.css'

// const Main = loadable(() => import('../pages'))
const Table = loadable(() => import('../pages/table'))
const Hook = loadable(() => import('../pages/hook'))
const Demo = loadable(() => import('../pages/demo'))
const Params = loadable(() => import('../pages/params'))

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Table} />
				<Route path='/demo' exact component={Demo} />
				{/* <Route path='/hook' exact component={Hook} />
        <Route path='/params/:id' exact component={Params} /> */}
				<Redirect to='/' />
			</Switch>
		</BrowserRouter>
	)
}

export default Router
