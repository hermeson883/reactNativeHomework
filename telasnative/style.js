import { StatusBar } from "react-native"

export const style = {
  janela: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  item: {
    backgroundColor: 'black',
    height: 50,
    color:'white',
    marginVertical: 8,
    marginHorizontal: 10,
    justifyContent: "center",
    padding: 20
  }
}

export const sectionList = {
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
};
