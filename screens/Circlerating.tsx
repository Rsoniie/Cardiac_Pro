import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircleRating = ({rating, onChange } : any) => {
  const circles = [1, 2, 3, 4, 5]; // Adjust the number of circles as needed

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      {circles.map((item) => (
        <TouchableOpacity key={item} onPress={() => onChange(item)}>
          <Svg height="30" width="30" viewBox="0 0 24 24">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke="black"
              strokeWidth="2"
              fill={item <= rating ? '#DDDDDD' : 'white'}
            />
          </Svg>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CircleRating;
