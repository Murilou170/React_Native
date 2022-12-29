import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Home() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Rodrigues</Text>
        <Text style={styles.textTitle}>Alernador de Botão</Text>
      </View>
      <View style={styles.spaceBottom}>
        <Button
          onPress={() => {
            console.log('clicado');
          }}
          title="Left"
        />
        <Button
          onPress={() => {
            console.log('clicado');
          }}
          title="Right"
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginHorizontal: 15,
    marginVertical: 30,
    justifyContent: 'space-between',
    // alignItems: '',
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 20,
  },
  spaceBottom: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
