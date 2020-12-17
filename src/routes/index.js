import React from 'react'; 
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Alunos from '../screens/Alunos';
import Aluno from '../screens/Aluno';
import { Feather } from '@expo/vector-icons';
import { themes } from '../themes';

const Tab = createBottomTabNavigator();

export default function Routes() {  
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 0.1,
          height: 60,
          backgroundColor: themes.colors.background,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 1,
          width: 16,
          height: 16,
        },
        labelStyle: {
          fontFamily: themes.fonts.light,
          fontSize: 14,
        },
        activeTintColor: themes.colors.secondary,
        inactiveTintColor: themes.colors.light,
      }}
    >
      <Tab.Screen 
         options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="users" size={size} color={color} />
          )
        }}
        name="Alunos" 
        component={Alunos} 
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
        name="Aluno" 
        component={Aluno} 
      />
    </Tab.Navigator>
  );
}