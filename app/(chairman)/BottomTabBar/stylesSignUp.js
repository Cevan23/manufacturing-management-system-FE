import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#161622',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginBottom: 150
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Add margin for spacing between header and dropdown
  },
  header: {
    color: '#FFA500',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    marginRight: 10,
  },
  dropdownContainer: {
    flex: 1,
    alignItems: 'flex-start', // Align dropdown to the left
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  cardContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    borderColor: '#fff'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  acceptButton: {
    backgroundColor: '#4CAF50', // Green color
  },
  denyButton: {
    backgroundColor: '#F44336', // Red color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { styles };
