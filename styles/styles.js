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
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
    },
    addFormWrapper: {

      alignSelf: 'stretch',
      backgroundColor: '#f6f6f6',
      borderTopColor: '#f00',
      borderTopWidth: 2,
      padding: 20,
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
    }
  });

export default styles
export const version = 1;