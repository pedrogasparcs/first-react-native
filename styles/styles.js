import { StyleSheet, Platform } from 'react-native';

const baseFont = 'open-sans' //Platform.OS === 'android' ? 'Roboto' : 'San Francisco'

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 20,
    borderBottomColor: '#80CBC4',
    borderBottomWidth: 3,
    fontFamily: 'open-sans-bold',
  },
    textStyle: {
      fontSize: 26,
      textAlign: "center",
    },
    textRed: {
      color: "#F00",
    },
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    masterContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    modal: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalBtnsWrapper: {
      flexDirection: 'row',
    },
    modalBtn: {
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    modalBtnSubmit: {
      backgroundColor: '#00f',
    },
    modalBtnText: {
      fontFamily: 'open-sans-bold',
    },
    modalBtnTextSubmit: {
      color: '#fff',
    },
    addFormContainer: {
      borderTopColor: '#000',
      borderTopWidth: 2,
      borderBottomColor: '#000',
      borderBottomWidth: 2,
      backgroundColor: '#fff',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addFormWrapper: {
      flex: 1,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    FAB: {
      position: 'absolute',
      bottom: 10, 
      right: 10,
      backgroundColor: '#f00',
      borderRadius: 50,
      height: 60,
      width: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    FABText: {
      color: '#fff',
      fontSize: 40,
    },
    listSection: {
      flex: 1,
      paddingTop: 20,
    },
    todoList: {
      flex: 1,
    },
    todoList__container: {
      paddingTop: 10,
      paddingBottom: 90,
    },
    item__wrapper: {
      borderBottomWidth: 2,
      borderColor: '#9FA8DA',
      paddingVertical: 20,
    },
    item__text: {
      fontFamily: baseFont,
      fontSize: 20,
    },
    item__date: {
      fontFamily: baseFont,
      fontSize: 16,
    },
    swipeBtn__wrapper: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    swipeBtn__text: {
      color: '#fff',
      textAlign: 'center',

    },
  });

export default styles
export const version = 1;