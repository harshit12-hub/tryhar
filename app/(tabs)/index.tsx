import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HolidayList from '../(tabs)/HolidayList'; // Adjust the path as necessary
import AddEmployee from '../(tabs)/AddEmployee'; 
import Home from "../(tabs)/CBbuilder";
import Leave from "../(tabs)/Leave";
import Notice from "../(tabs)/Notice";
import EmpStatus from "../(tabs)/EmpStatus";
import Profile from "../(tabs)/Profile";
import Login from '../(tabs)/Login';
import ListEmp from '../(tabs)/ListEmp';
import ViewAtt from '../(tabs)/ViewAtt';
import AddHolidayScreen from '../(tabs)/AddHolidayScreen';
import AddNoticeScreen from '../(tabs)/AddNoticeScreen';
import site from '../(tabs)/site';// Adjust the import path as needed
import addsite from '../(tabs)/addsite'; // Adjust the import path as needed
import List from '../(tabs)/List';
import NoticeDetailsScreen from '../(tabs)/NoticeDetailsScreen';
import ConfirmedEmployee from '../(tabs)/ConfirmedEmployee';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="HolidayList" component={HolidayList} options={{ title: 'Public Holidays' }} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} options={{ title: 'Add Employee' }} />
        <Stack.Screen name='Leave' component={Leave} options={{ title: 'Leave' }} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="EmpStatus" component={EmpStatus} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ListEmp' component={ListEmp} />
        <Stack.Screen name='ViewAtt' component={ViewAtt} />
        <Stack.Screen name="AddHolidayScreen" component={AddHolidayScreen} options={{ title: 'Add Holiday' }} />
        <Stack.Screen name="AddNoticeScreen" component={AddNoticeScreen} />
        <Stack.Screen name="addsite" component={addsite} />
        <Stack.Screen name="site" component={site} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="NoticeDetailsScreen" component={NoticeDetailsScreen} />
        <Stack.Screen name="ConfirmedEmployee" component={ConfirmedEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
