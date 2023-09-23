import React, {useMemo} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Action {
  iconName: string;
  onPress: () => any;
}

interface NbTextInputProps {
  leftAction?: Action | React.ReactElement;
  rightAction?: Action | React.ReactElement;
  onChangeText?: (text: string) => any;
  placeholder?: string;
}

export const NbTextInput = (props: NbTextInputProps): JSX.Element => {
  const renderAction = (action: Action | React.ReactElement) => {
    if (React.isValidElement(action)) {
      return action;
    }

    return (
      <View style={{padding: 10}}>
        <TouchableOpacity onPress={(action as Action).onPress}>
          <MaterialCommunityIcons
            name={(action as Action).iconName}
            size={24}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const leftElement = useMemo(() => {
    return props.leftAction && renderAction(props.leftAction);
  }, [props.leftAction]);

  const rightElement = useMemo(() => {
    return props.rightAction && renderAction(props.rightAction);
  }, [props.rightAction]);

  return (
    <View
      style={{
        ...styles.container,
        paddingLeft: leftElement ? 0 : 20,
        paddingRight: rightElement ? 0 : 20,
      }}>
      {leftElement}
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      {rightElement}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingRight: 20,
    backgroundColor: '#F0F0F0',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});
