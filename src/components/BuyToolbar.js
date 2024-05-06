import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import toolbarStyles from '../screens/common/commonstyles';

const Toolbar = ({title, onPressBack}) => {
  return (
    <View style={toolbarStyles.toolbar}>
      <TouchableOpacity
        style={toolbarStyles.backbtn}
        activeOpacity={1}
        onPress={onPressBack}>
        <View style={toolbarStyles.topBar}>
          <Icons name="left" size={15} color="#FFFFFF" />
        </View>
      </TouchableOpacity>

      <Text style={toolbarStyles.tooltxt}>{title}</Text>

      <TouchableOpacity
        style={toolbarStyles.backbtn}
        activeOpacity={1}
        onPress={onPressBack}>
        <View style={toolbarStyles.topLeft}>
          <Text style={toolbarStyles.topLeftText}>All</Text>
          <Icons name="down" size={15} color="#56514D" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
