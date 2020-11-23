import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Text,
  CheckBox,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import HeaderButton from '../../components/UI/HeaderButton';
import {Avatar} from 'react-native-elements';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import Toolbar from '../../components/Toolbar';
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const [isSelected, setSelection] = useState(false);
  const [icon, setIcon] = useState('md-pencil-sharp');
  const [isEditable, setisEditable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [value, setValue] = useState('male');
  const [imageSource, setImageSource] = useState(null);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: '',
    },
    inputValidities: {
      name: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: false,
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        // ADD THIS
        setImageSource(response);
      }
    });
  }

  /* changeIcon = async () => {
    icon !== 'md-brush'
      ? (seIcon('md-pencil-sharp'), isEditable(false))
      : (seIcon('md-checkmark-outline'), isEditable(true));
  };*/
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );
  // if (isLoading) {
  //   return (
  //     <View style={styles.centered}>
  //       <ActivityIndicator size="large" color={Colors.primary} />
  //     </View>
  //   );
  // }

  // if (!isLoading && Profiles.length === 0) {
  //   return (
  //     <View style={styles.centered}>
  //       <Text>No products found. Maybe start adding some!</Text>
  //     </View>
  //   );
  // }
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={10} style={styles.screen}>
      <Toolbar
        name={'Profile'}
        menu={'ios-menu'}
        card={'ios-card'}
        openDrawer={() => {
          props.navigation.openDrawer();
        }}
        onSelect={() => {
          props.navigation.navigate('Cart');
        }}
      />
      <ScrollView>
        <View style={styles.gradient}>
          <Card style={styles.authContainer}>
            <ScrollView>
              <View style={styles.logo}>
                <View>
                  {imageSource === null ? (
                    <Avatar
                      rounded
                      size="xlarge"
                      resizeMode="contain"
                      source={{
                        uri:
                          'http://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg',
                      }}
                    />
                  ) : (
                    <Avatar
                      rounded
                      size="xlarge"
                      resizeMode="contain"
                      source={{uri: imageSource.uri}}
                      resizeMode="contain"
                    />
                  )}

                  <TouchableOpacity
                    onPress={selectImage}
                    style={{
                      position: 'absolute',
                      right: 0,
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                      shadowRadius: 8,
                      elevation: 5,
                      backgroundColor: '#FFF',
                      borderColor: 'white',
                      shadowColor: 'black',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                    }}>
                    <Icon name="camera" size={25} color={'black'} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{marginTop: 10, fontSize: 20}}>Basic Info</Text>
              <View>
                <Input
                  id="name"
                  label="Full Name"
                  required
                  placeholder="Kapil Vidua"
                  autoCapitalize="none"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
                <Input
                  id="Email"
                  label="Email"
                  placeholder="Kapilvidua001@gmail.com"
                  required
                  editable={false}
                  selectTextOnFocus={false}
                  autoCapitalize="none"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
                <Input
                  id="Mobile"
                  label="Mobile"
                  required
                  placeholder="9111606923"
                  editable={false}
                  selectTextOnFocus={false}
                  autoCapitalize="none"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
                <RadioButton.Group
                  onValueChange={(value) => setValue(value)}
                  value={value}>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{flexDirection: 'row', marginRight: 10}}>
                      <Text style={{marginTop: 5}}>Male</Text>
                      <RadioButton
                        color={'black'}
                        uncheckedColor={'black'}
                        value="male"
                      />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginTop: 5}}>Female</Text>
                      <RadioButton
                        color={'black'}
                        uncheckedColor={'black'}
                        value="female"
                      />
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
            </ScrollView>
          </Card>
          <TouchableOpacity
            style={{
              width: '90%',
              height: '8%',
              backgroundColor: 'black',
              justifyContent: 'center',
              marginTop: 20,
              borderRadius: 10,
              alignItems: 'center',
              marginBottom: 100,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Profile',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          iconSize={30}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradient: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  authContainer: {
    width: '90%',
    maxWidth: 400,
    maxHeight: '100%',
    padding: 20,
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: '#999',
    fontSize: 13,
  },
  headerStyle: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
  },
  containerSideMenu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default AuthScreen;
