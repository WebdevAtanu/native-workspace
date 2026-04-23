import { CustomText } from '@/components/custom-text';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <CustomText type="title">This is a modal</CustomText>
      <Link href="/(tabs)/index" dismissTo style={styles.link}>
        <CustomText type="link">Go to home screen</CustomText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
