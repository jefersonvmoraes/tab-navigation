import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if(route.name === "Home"){
                        iconName = "home";
                    } else if (route.name === "Settings"){
                        iconName = "ios-settings";
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                headerShown: false,
                tabBarActiveTintColor: '#ff0044',
                tabBarInactiveTintColor: '#bbb',
                tabBarShowLabel: false,
            })}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Settings" component={Settings}/>
                <Tab.Screen name="Feed" component={Settings}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="alarm" size={size} color={color}/>
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}