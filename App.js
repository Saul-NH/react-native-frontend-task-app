import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={({ navigation }) => ({
                        title: 'Task App',
                        headerStyle: { backgroundColor: '#222f3e' },
                        headerTitleStyle: { color: '#fff' },
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('TaskFormScreen')
                                }
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        marginRight: 30,
                                        fontSize: 15,
                                    }}
                                >
                                    NEW
                                </Text>
                            </TouchableOpacity>
                        ),
                    })}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="TaskFormScreen"
                    component={TaskFormScreen}
                    options={{
                        title: 'Create a new task',
                        headerStyle: { backgroundColor: '#222f3e' },
                        headerTitleStyle: { color: '#fff' },
                        headerTintColor: '#fff'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
