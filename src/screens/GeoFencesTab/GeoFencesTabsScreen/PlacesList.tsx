import React from 'react';
import {FlatList, Image, RefreshControl, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

export const PlacesList = (): JSX.Element => {
  const places = [
    {
      id: '1',
      title: 'Parque Castillo',
      description:
        'Muchas personas visitan este lugar. Es muy bonito. Si buscas un lugar para relajarte, este es el lugar.',
      photoUrl:
        'https://media-cdn.tripadvisor.com/media/photo-s/01/ab/50/de/parque-castillo-y-catedral.jpg',
      photos: [
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
      ],
      tags: ['parque', 'relajarse', 'castillo', 'familia', 'amigos'],
      categories: [
        'familiar',
        'esparcimiento',
        'relajacion',
        'aire-libre',
        'area-abierta',
      ],
      peopleFlow: 'HIGHT',
    },
    {
      id: '2',
      title: 'Calle Madero',
      description:
        'Muchas personas visitan este lugar. Encontrarás muchos lugares para comer y comprar. Si buscas un lugar en dónde encontrar ropa, calzado, o un lugar para comer, este es el lugar.',
      photoUrl: 'https://mapio.net/images-p/71098227.jpg',
      photos: [
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
      ],
      tags: ['parque', 'relajarse', 'castillo', 'familia', 'amigos'],
      categories: [
        'familiar',
        'esparcimiento',
        'relajacion',
        'aire-libre',
        'area-abierta',
      ],
      peopleFlow: 'HIGHT',
    },
    {
      id: '3',
      title: 'Plaza de la Concordia',
      description:
        'Muchas personas visitan este lugar. Encontrarás muchos lugares para comer y comprar. Si buscas un lugar en dónde encontrar ropa, calzado, o un lugar para comer, este es el lugar.',
      photoUrl:
        'https://fastly.4sqi.net/img/general/width960/17WlqfToxCwgmS5rmLi49HuhAvWqjoVQAeTBCJRfyvk.jpg',
      photos: [
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
      ],
      tags: ['parque', 'relajarse', 'castillo', 'familia', 'amigos'],
      categories: [
        'familiar',
        'esparcimiento',
        'relajacion',
        'aire-libre',
        'area-abierta',
      ],
      peopleFlow: 'HIGHT',
    },
    {
      id: '4',
      title: 'Plaza O',
      description:
        'Muchas personas visitan este lugar. Encontrarás muchos lugares para comer y comprar. Si buscas un lugar en dónde encontrar ropa, calzado, o un lugar para comer, este es el lugar.',
      photoUrl:
        'https://lh3.googleusercontent.com/p/AF1QipMoXc_gxCR5spkUEbCd6zAdh4_Xl36dlyLWzeVP=w1080-h608-p-no-v0',
      photos: [
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
      ],
      tags: ['parque', 'relajarse', 'castillo', 'familia', 'amigos'],
      categories: [
        'familiar',
        'esparcimiento',
        'relajacion',
        'aire-libre',
        'area-abierta',
      ],
      peopleFlow: 'HIGHT',
    },
    {
      id: '5',
      title: 'Plza Vicentenario',
      description:
        'Muchas personas visitan este lugar. Es muy bonito. Si buscas un lugar para relajarte, este es el lugar.',
      photoUrl:
        'https://www.lugaresturisticosdeveracruz.com/wp-content/uploads/2021/10/Plaza-Bicentenario-669x446-1.jpg',
      photos: [
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
        {url: 'https://picsum.photos/700'},
      ],
      tags: ['parque', 'relajarse', 'castillo', 'familia', 'amigos'],
      categories: [
        'familiar',
        'esparcimiento',
        'relajacion',
        'aire-libre',
        'area-abierta',
      ],
      peopleFlow: 'HIGHT',
    },
  ];

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={false} />}
      showsVerticalScrollIndicator={false}
      data={places}
      style={{height: '100%'}}
      contentContainerStyle={{gap: 16, paddingBottom: 16}}
      keyExtractor={item => item.id}
      renderItem={({item: place}) => {
        return (
          <Card>
            <Card.Content>
              <View style={{flexDirection: 'row', gap: 16, height: 180}}>
                <View style={{flex: 1}}>
                  <Image
                    style={{
                      flex: 1,
                      borderRadius: 8,
                    }}
                    source={{
                      uri: place.photoUrl,
                    }}
                  />
                </View>
                <View style={{flex: 2}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {place.title}
                  </Text>
                  <Text>{place.description}</Text>
                  <View
                    style={{flexDirection: 'row', flexWrap: 'wrap', gap: 4}}>
                    {place.categories.map(category => {
                      return (
                        <View
                          key={category}
                          style={{
                            borderRadius: 8,
                            backgroundColor: '#e0e0e0',
                            padding: 4,
                            marginBottom: 4,
                            alignSelf: 'flex-start',
                          }}>
                          <Text style={{fontSize: 12}}>{category}</Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </Card.Content>
          </Card>
        );
      }}
    />
  );
};
