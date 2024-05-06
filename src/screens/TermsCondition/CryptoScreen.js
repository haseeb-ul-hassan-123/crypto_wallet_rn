import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import colors from '../../styles/color';
import stylefile from '../common/commonstyles';
import BuyToolbar from '../../components/BuyToolbar';
import {useNavigation} from '@react-navigation/native';
import {coinList, coinOne, popularCryptos} from './data';

const CryptoScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const backto = () => {
    navigation.goBack();
  };
  const filteredCoinList = coinList.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const filteredCoinOne = coinOne.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <SafeAreaView style={stylefile.maincontainer}>
      <View style={{flex: 1, backgroundColor: colors.black}}>
        <BuyToolbar title="Buy" onPressBack={backto} />
        <View style={{paddingHorizontal: 18}}>
          <View style={stylefile.SearchBar}>
            <Icon name="search" size={35} color="#7E7E7E" />
            <TextInput
              style={{
                width: '80%',
                fontSize: 16,
                fontWeight: '600',
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="Search crypto"
              placeholderTextColor="#7E7E7E"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <Text
            style={{
              color: colors.white,
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
            }}>
            Popular crypto
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 17,
            paddingHorizontal: 17,
          }}>
          <ScrollView horizontal={true}>
            {popularCryptos.map((crypto, index) => (
              <TouchableOpacity key={index} style={stylefile.cryptoText}>
                <Text style={{color: '#C6C6C6', fontWeight: '600'}}>
                  {crypto}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView style={{paddingHorizontal: 17}}>
          <View style={{marginTop: 15}}>
            <Text
              style={{
                marginBottom: 10,
                color: '#56514D',
                fontSize: 18,
              }}>
              1
            </Text>
            {filteredCoinOne.map((coin1, index) => (
              <TouchableOpacity key={index} style={stylefile.CoinText}>
                <Image
                  source={coin1.image}
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    borderRadius: 100,
                    backgroundColor: 'white',
                  }}
                />
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                  <Text style={{color: colors.whiteone, fontWeight: '600'}}>
                    {coin1.name}
                  </Text>
                  <Text style={{color: '#5E5E5E'}}>{coin1.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={stylefile.borderbackground} />
          <View style={{marginTop: 25}}>
            <Text
              style={{
                marginBottom: 20,
                color: '#56514D',
                fontSize: 18,
              }}>
              A
            </Text>
            {filteredCoinList.map((coin, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 25,
                }}>
                <Image
                  source={coin.image}
                  style={{
                    width: 33,
                    height: 33,
                    marginRight: 10,
                    borderRadius: 100,
                    backgroundColor: 'white',
                  }}
                />
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                  <Text style={{color: colors.whiteone, fontWeight: '600'}}>
                    {coin.name}
                  </Text>
                  <Text style={{color: '#5E5E5E'}}>{coin.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CryptoScreen;
