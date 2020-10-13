import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings140795Navigator from '../features/Settings140795/navigator';
import Settings140787Navigator from '../features/Settings140787/navigator';
import UserProfile140785Navigator from '../features/UserProfile140785/navigator';
import Settings140746Navigator from '../features/Settings140746/navigator';
import BlankScreen1140743Navigator from '../features/BlankScreen1140743/navigator';
import BlankScreen0140742Navigator from '../features/BlankScreen0140742/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings140795: { screen: Settings140795Navigator },
Settings140787: { screen: Settings140787Navigator },
UserProfile140785: { screen: UserProfile140785Navigator },
Settings140746: { screen: Settings140746Navigator },
BlankScreen1140743: { screen: BlankScreen1140743Navigator },
BlankScreen0140742: { screen: BlankScreen0140742Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
