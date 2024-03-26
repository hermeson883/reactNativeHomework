import { DATA } from '../FakeDB';
import { Text, View, SafeAreaView, SectionList } from 'react-native';
import {sectionList} from "../style"

export default function Sobre({ navigation }) {
  return (
    <SafeAreaView style={sectionList.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={sectionList.item}>
            <Text style={sectionList.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={sectionList.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
