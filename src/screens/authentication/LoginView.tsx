
const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', username, password);
  };

  const handleSignUp = () => {
    // Logic to handle user sign-up or navigation to sign-up screen
    console.log('Navigating to sign-up screen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
      <Text style={styles.accountLabel}>Create new account?</Text>
      <Button
        title="SignUp"
        onPress={handleSignUp}
        color="blue"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  accountLabel: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginView;
