import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listSection: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  sectionHeading: {
    fontSize: 32,
    textAlign: 'center',
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
    addFormContainer: {
      borderTopColor: '#f00',
      borderTopWidth: 2,
      borderBottomColor: '#000',
      borderBottomWidth: 2,
      paddingVertical: 20,
      flexDirection: 'row',
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
    todoList: {
      flex: 1,
    }
  });

export default styles
export const version = 1;