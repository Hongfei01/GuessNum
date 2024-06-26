import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Button from '../components/Button/Button';
const StartScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType='number-pad'
          />
          <Button>Reset</Button>
          <Button>Confirm</Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    width: 50,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
