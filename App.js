import { react } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <view style={styles.bloco}>
       <text style={styles.titulo}>previsão do tempo</text>
     </view>
     <view style={styles.bloco}>
       <text style={styles.label}>Cidade: </text>
       <TextInput
           placeholder='digite aqui a cidade ...'
           style={styles.input}
           />
     </view>
     <view style={styles.bloco}>
       <TouchableOpacity style={styles.botao}>
         <text>Buscar</text>
       </TouchableOpacity>
     </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
