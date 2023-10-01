import React, {useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NbTextInput} from '../../../../components/nb-text-input';
import {debounce} from '../../../../shared/application/utils/debounce';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface NbSearchBarProps {
  placeholder?: string;
  onSearchChange?: (text: string) => any;
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
  onSearchChange,
  placeholder = 'Buscar',
}: NbSearchBarProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const shouldUseExtraAction = useMemo(() => {
    return extraAction?.visible && searchQuery.length > 0;
  }, [extraAction, searchQuery]);

  const onActionPress = () => {
    extraAction?.onPress && extraAction.onPress();
  };

  const onSearchQueryChange = (text: string) => {
    setSearchQuery(text);
    onSearchChange && onSearchChange(text);
    performSearch && debounce(performSearch(text), 300);
  };

  return (
    <NbTextInput
      placeholder={placeholder}
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
