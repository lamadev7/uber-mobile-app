import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Map from './screens/Map';
import Home from './screens/Home';
import { store } from './redux/store';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -69 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name='Map'
                component={Map}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}