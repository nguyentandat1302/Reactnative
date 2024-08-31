import React from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = [
  {
    name: {
      title: "Ms",
      first: "Maeva",
      last: "Scott",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëlle",
      last: "Henry",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëlle",
      last: "Henry",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëlles",
      last: "Henryr",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëlgle",
      last: "Henrty",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëalle",
      last: "Henrjy",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëllle",
      last: "Henroy",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëllbe",
      last: "Henbry",
    },
  },
];

const Project8 = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ height: 100, backgroundColor: "white", justifyContent: "center" }}>
        <Text> {item.name.first + " " + item.name.last}</Text>
      </View>
    );  
  };

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default Project8;
