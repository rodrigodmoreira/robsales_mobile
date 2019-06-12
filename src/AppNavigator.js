import * as React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginContainer from './containers/LoginContainer'
import MenuContainer from './containers/MenuContainer'

const auth = createStackNavigator({
  login: LoginContainer
}, {
  initialRouteKey: 'login',
  headerMode: 'none'
})

const app = createStackNavigator({
  menu: MenuContainer
}, {
  initialRouteKey: 'menu'
})

const Navigator = createSwitchNavigator({
  auth: auth,
  app: app
}, {
  initialRouteKey: 'auth'
})

const NavigatorContainer = createAppContainer(Navigator)

const AppNavigator = props => {
  return (
    <NavigatorContainer />
  )
}

export default AppNavigator
