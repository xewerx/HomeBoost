import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import home from '../screens/home';
import routerController from '../screens/routerController';
import computerController from '../screens/computerController';

const screens = {
    Home: {
        screen: home
    },
    RouterController: {
        screen: routerController
    },
    ComputerController: {
        screen: computerController
    }
}

const stack = createStackNavigator(screens);

export default createAppContainer(stack);