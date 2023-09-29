import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NbTextInput} from '../../../../components/nb-text-input';
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
    <NbTextInput
      placeholder="Nombre o teléfono"
      onChangeText={onSearchQueryChange}
      rightAction={
        <TouchableOpacity onPress={onActionPress}>
          <MaterialCommunityIcons
            style={{marginRight: 20}}
            name={shouldUseExtraAction ? extraAction?.icon : 'magnify'}
            size={24}
          />
        </TouchableOpacity>
      }
    />
  );
};
