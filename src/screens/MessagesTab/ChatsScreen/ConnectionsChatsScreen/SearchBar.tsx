import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {debounce} from '../../../../shared/application/utils/debounce';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface NbSearchBarProps {
  performSearch?: (query: string) => any;
  extraAction?: {
    icon: any;
    onPress: () => any;
    visible?: boolean;
  };
}

export const NbSearchBar = ({
  performSearch,
  extraAction,
}: NbSearchBarProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const shouldUseExtraAction = extraAction?.visible && searchQuery.length > 0;

  const onActionPress = () => {
    extraAction?.onPress && extraAction.onPress();
  };

  const onSearchQueryChange = (text: string) => {
    setSearchQuery(text);
    performSearch && debounce(performSearch(text), 300);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre o teléfono"
        style={{...styles.input, backgroundColor: '#F0F0F0'}}
        value={searchQuery}
        onChangeText={onSearchQueryChange}
      />
      <TouchableOpacity onPress={onActionPress}>
        <MaterialCommunityIcons
          name={shouldUseExtraAction ? extraAction?.icon : 'magnify'}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F0F0F0',
  },
  input: {
    height: 40,
    fontSize: 16,
    flex: 1,
  },
});
