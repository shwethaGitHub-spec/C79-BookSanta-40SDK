import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen'
 import {AppTabNavigator} from './Components/AppTabNavigator'
import {LogBox} from 'react-native'

//LogBox.ignoreLogs(["setting a timer"])
export default class App extends  React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen : WelcomeScreen},
  BottomTab: { screen: AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)