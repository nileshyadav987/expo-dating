import * as React from 'react';
import { Text, View } from 'react-native';

function HomeTab() {
  const [token, setToken] = React.useState(null);
  React.useEffect(()=> {
    
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!s</Text>
    </View>
  );
}
export default HomeTab;