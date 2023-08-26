import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, IconButton} from '@react-native-material/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: any) => {
    // Aquí puedes agregar la lógica para manejar los clics de los elementos del menú
    // console.log('Clic en el elemento:', item);
    // ... realiza las acciones que necesites
    toggleMenu(); // Cierra el menú después de hacer clic en un elemento
  };

  return (
    <View style={{flex: 1, zIndex: 9999, position: 'relative'}}>
      <IconButton
        onPress={toggleMenu}
        icon={() => (
          <MaterialCommunityIcons
            name="dots-vertical"
            color={'black'}
            size={30}
          />
        )}
      />

      {isOpen && (
        <View
          style={{
            position: 'absolute',
            top: 30,
            right: 0,
            backgroundColor: '#fff',
            padding: 10,
            zIndex: 9999,
          }}>
          <TouchableOpacity onPress={() => handleMenuItemClick('Elemento 1')}>
            <Text>Elemento 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemClick('Elemento 2')}>
            <Text>Elemento 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemClick('Elemento 3')}>
            <Text>Elemento 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DropdownMenu;
