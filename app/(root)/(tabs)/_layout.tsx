import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '@/constant';
import TabIcon from '@/components/TabIcon';

export default function Layout() {
    return (
        <Tabs
            initialRouteName='index'
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    paddingBottom: 0,
                    overflow: 'hidden',
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 78,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    position: 'absolute'
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />
                }}
            />
            <Tabs.Screen
                name="ride"
                options={{
                    title: "Rides",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chats",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />
                }}
            />
        </Tabs>
    )
}
