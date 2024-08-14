//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Pressable, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text> Pagina de tareas.</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal se cerró.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tareas</Text>
            
            <Pressable
              style={[styles.boton, styles.botoncerrar]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar nueva tarea</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    <Pressable onPress={() => setModalVisible(true)}>
        <Text>Agregar nueva tarea!</Text>
      </Pressable>{/*
      <View> style={styles.lista}
          <text> Tarea pendiente</text>
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  lista: {
    flex: 2,
    alignItems: 'flex-start',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  boton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  botoncerrar: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
