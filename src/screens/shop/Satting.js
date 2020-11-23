import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  RefreshControl,
  Dimensions,
  SectionList,
} from 'react-native';
import Toolbar from '../../components/Toolbar';
const Satting = () => {
  return (
    <View style={{flex: 1}}>
      <Toolbar
        name={'Setting'}

           menu={'ios-menu'}
        card={'ios-card'}
        openDrawer={() => {
          props.navigation.openDrawer();
        }}
        onSelect={() => {
          props.navigation.navigate('Cart');
        }}
      />

      <View style={styles.padding}>
        <Text style={styles.lable}>Free Cancellation</Text>
        <Text style={styles.textStyle}>
          One click canncellation available within 30 days of purchase{' '}
        </Text>
      </View>
      <View style={styles.padding}>
        <Text style={styles.lable}>How to cancel</Text>
      </View>
      <View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Mondays</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Tuesday</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Wednesday</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Thursday</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Friday</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Saturday</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
        <View style={styles.Calander}>
          <Text style={styles.Calandertext}>Sunday</Text>
          <Text style={styles.CalanderTime}>10.00 AM - 08.00 Am</Text>
        </View>
      </View>
      <View style={styles.padding}>
        <Text style={styles.lable}>Use this within </Text>
        <Text style={styles.textStyle}>30 days of purchase</Text>
      </View>
      <View style={styles.padding}>
        <Text style={styles.lable}>How to use the offers</Text>
        <View style={styles.point}>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 8,
              backgroundColor: 'gray',
              marginRight: 10,
              marginTop: 12,
            }}
          />
          <Text style={styles.pointText}>
            Carry your email voucher on phone or access it under the 'purchase'
            selection of the app
          </Text>
        </View>
        <View style={styles.point}>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 8,
              backgroundColor: 'gray',
              marginRight: 10,
              marginTop: 12,
            }}
          />
          <Text style={styles.pointText}>
            Make porior reservation before you visit the merchant
          </Text>
        </View>
      </View>
      <View style={styles.padding}>
        <Text style={styles.lable}>Things to remember </Text>
        <View style={styles.point}>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 8,
              backgroundColor: 'gray',
              marginRight: 10,
              marginTop: 12,
            }}
          />
          <Text style={styles.pointText}>Prior reservation is mandatory</Text>
        </View>
        <View style={styles.point}>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 8,
              backgroundColor: 'gray',
              marginRight: 10,
              marginTop: 12,
            }}
          />
          <Text style={styles.pointText}>
            All offers are inclusive of all application taxes and service change
          </Text>
        </View>
        <View style={styles.point}>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 8,
              backgroundColor: 'gray',
              marginRight: 10,
              marginTop: 12,
            }}
          />
          <Text style={styles.pointText}>Right of admission reservaed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lable: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#999',
    marginTop: 5,
  },
  padding: {
    padding: 10,
  },
  Calander: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  Calandertext: {
    color: '#999',
    fontWeight: 'bold',
  },
  CalanderTime: {
    color: '#999',
  },
  point: {
    flexDirection: 'row',
  },
  pointText: {
    color: '#999',
    fontSize: 13,
    marginTop: 5,
  },
});

export default Satting;
