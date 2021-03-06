import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Image,
  View, TouchableOpacity
} from 'react-native';

import { Container, Header, Content, Icon, Drawer } from 'native-base';

import { DrawerActions, NavigationActions, createStackNavigator } from 'react-navigation';
// import IOSIcon from "react-native-vector-icons/Ionicons";
import Calendar from "./Calendar";
import Event from "./Event";
import EventSecondPage from "../Components/EventSecondPage";
import Settings from './Settings';
import Messages from "./Messages";
import Users from "./Users";
import User from "./User";
import Expenses from "./Expenses";
import Contacts from "./Contacts";
import HelpPage from "../Components/HelpPage";
import Reminder from "./Reminder";
import Chat from "./Chat";

const stackNav = createStackNavigator({

  Main: {
    screen: Calendar,
    navigationOptions: ({ navigation }) => ({
      title: "Calendar",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'white', marginLeft: 30 }} />
        </TouchableOpacity>
      ),
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: "settings",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  Users: {
    screen: Users,
    navigationOptions: ({ navigation }) => ({
      title: "Users",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
      action: NavigationActions.navigate({ routeName: 'User' }),
    })
  },
  User: {
    screen: User,
    navigationOptions: ({ navigation }) => ({
      title: "User",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  
  Expenses: {
    screen: Expenses,
    navigationOptions: ({ navigation }) => ({
      title: "Expenses",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: ({ navigation }) => ({
      title: "Contacts",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  Event: {
    screen: Event,
    navigationOptions: ({ navigation }) => ({
      title: "Event",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  EventSecondPage: {
    screen: EventSecondPage,
    navigationOptions: ({ navigation }) => ({
      title: "Repitition",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },
  Help: {
    screen: HelpPage,
    navigationOptions: ({ navigation }) => ({
      title: "Help",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },

  Reminder: {
    screen: Reminder,
    navigationOptions: ({ navigation }) => ({
      title: "Reminder",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  },

  Chat : {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: "Chat",
      headerStyle: {
        backgroundColor: '#185956',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      headerRight: (
        <>
          <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
        </>
      ),
    })
  }
});

export default stackNav;










// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text, Image,
//   View, TouchableOpacity
// } from 'react-native';

// import { Container, Header, Content, Icon, Drawer } from 'native-base';

// import { DrawerActions, NavigationActions, createStackNavigator } from 'react-navigation';
// // import IOSIcon from "react-native-vector-icons/Ionicons";
// import Calendar from "./Calendar";
// import Event from "./Event";
// import Settings from './Settings';
// import Messages from "../Components/Messages";
// import Users from "./Users";
// import User from "./User";
// import Expenses from "./Expenses";
// import SideMenu from "../Components/SideMenu";
// import Contacts from "./Contacts";
// import HelpPage from "../Components/HelpPage"

// const HeaderWrapper = (navigation, name) => {
//     return {
//       title: name,
//       headerStyle: {
//         backgroundColor: '#185956',
//       },
//       headerTitleStyle: {
//         color: 'white'
//       },
//       headerLeft: (
//         <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
//           <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 40, color: 'white', marginLeft: 30 }} />
//         </TouchableOpacity>
//       ),
//       headerRight: (
//         <>
//           <Image source={require('../images/ordo_logo.png')} style={{ width: 65, height: 50, marginRight: 20 }} />
//         </>
//       ),
//     }
//   }

// const stackNav = createStackNavigator({

//   Main: {
//     screen: Calendar,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Calendar"))
//   },
//   Settings: {
//     screen: Settings,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "settings"))
//   },
//   Messages: {
//     screen: Messages,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Messages"))
//   },
//   Users: {
//     screen: Users,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Users"))
//   },
//   User: {
//     screen: User,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "User"))
//   },
  
//   Expenses: {
//     screen: Expenses,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Expenses"))
//   },
//   Contacts: {
//     screen: Contacts,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Contacts"))
//   },
//   Event: {
//     screen: Event,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Event"))
//   },
//   Help: {
//     screen: HelpPage,
//     navigationOptions: ({ navigation }) => (HeaderWrapper(navigation, "Help"))
//   }
// });

// export default stackNav;