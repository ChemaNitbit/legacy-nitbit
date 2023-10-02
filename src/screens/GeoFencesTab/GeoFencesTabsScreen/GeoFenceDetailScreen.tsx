import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Card, PaperProvider, Text} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import {Layout} from '../../../components/layout';
import {FlatList} from 'react-native';

export const GeoFenceDetailScreen = (): JSX.Element => {
  const width = Dimensions.get('window').width - 32;

  const zone = {
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
  };

  const placesInZone = [
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
    <PaperProvider>
      <Layout.NbContainer>
        <View style={{alignItems: 'center'}}>
          <Carousel
            loop
            width={width}
            height={width / 1.5}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            renderItem={({index}) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  borderRadius: 8,
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    flex: 1,
                    borderRadius: 8,
                  }}
                  source={{
                    uri: 'https://fastly.4sqi.net/img/general/width960/17WlqfToxCwgmS5rmLi49HuhAvWqjoVQAeTBCJRfyvk.jpg',
                  }}
                />
              </View>
            )}
          />
        </View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>
          {zone.title}
        </Text>
        <Text style={{marginBottom: 16}}>{zone.description}</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            marginBottom: 16,
          }}>
          {zone.categories.map(category => {
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
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginRight: 8,
            }}>
            Afluencia:
          </Text>
          <Text>{zone.peopleFlow}</Text>
        </View>
        <View style={{marginBottom: 16}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginRight: 8,
            }}>
            Lugares de esta zona:
          </Text>
        </View>
        <FlatList
          data={placesInZone}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item: place}) => {
            return (
              <Card
                style={{
                  margin: 8,
                  padding: 16,
                  flexDirection: 'row',
                  marginBottom: 16,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    marginRight: 8,
                  }}
                  source={{
                    uri: place.photoUrl,
                  }}
                />
                <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {place.title}
                  </Text>
                  <Text>{(place.description || '').slice(0, 31)}-</Text>
                  <Text>{(place.description || '').slice(31, 60)}...</Text>
                </View>
              </Card>
            );
          }}
        />
      </Layout.NbContainer>
    </PaperProvider>
  );
};
