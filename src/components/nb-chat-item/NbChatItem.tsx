import * as React from 'react';
import {ChatType} from '../../@types/chat.type';

import {TouchableOpacity, View, Text} from 'react-native';
import NbAvatar from '../nb-avatar/NbAvatar';

import {calculateReceiptTime} from '../../utils/data.utils';

type NbChatItemTypeProps = {
  chat: ChatType;
  navigation: any;
};

export const NbChatItem: React.FC<NbChatItemTypeProps> = ({
  chat,
  navigation,
}) => {
  const handleTime = (): string => {
    return calculateReceiptTime(chat.messages[0].createdAt.toDate());
  };

  const goToChat = () => {
    navigation.navigate('ChatModal', {chatId: chat.id});
  };

  return (
    <TouchableOpacity onPress={goToChat} style={{marginVertical: 5}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: 60,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <NbAvatar
            url={chat.targetUserData?.profilePhoto as string}
            size={50}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'column', flex: 5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
              paddingHorizontal: 5,
            }}>
            <Text>
              {chat.targetUserData?.name} {chat.targetUserData?.lastname}
            </Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10 / 2,
                backgroundColor: 'green',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 5,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{chat.messages[0].message}</Text>
            <Text>{handleTime()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NbChatItem;
