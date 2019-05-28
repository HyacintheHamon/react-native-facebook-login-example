/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';


import Login from './components/Login';
import LoginMock from'./components/LoginMock';

const RootStack = createBottomTabNavigator({
    Login: Login,

},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const App = createAppContainer(RootStack);

AppRegistry.registerComponent(appName, () => App);