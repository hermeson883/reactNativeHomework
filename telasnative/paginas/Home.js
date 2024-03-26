import { View, Text, Button, VirtualizedList } from 'react-native';
import { style } from '../style';

export default function Home({navigation}) {
  const DATA = [];

  const getItems = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  const getItemsCount = (data) => 5;

  const Item = ({ title }) => (
    <View>
      <Text style={style.item}>{title}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} />}
          keyextractor={(item) => item.key}
          getItemCount={getItemsCount}
          getItem={getItems}
        />
      </View>
      <Button
        title="Ir para pagina sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
}
