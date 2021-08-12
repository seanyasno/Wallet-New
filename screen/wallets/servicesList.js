import React from 'react';

export const ServicesList = () => {
  const [services, setServices] = useState([]);
  // const services = [
  //   {
  //     key: {
  //       title: 'test service',
  //       description: 'This is a small description about this thing',
  //       image: 'http://155.138.221.92:8000/icons/Hero%20Wallet%20Icon%20Black.png',
  //       link: 'https://www.google.com',
  //     }
  //   },
  // ];

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('https://api.jsonbin.io/b/61144d4ae1b0604017adaa89/2', {
  //         headers: {
  //           'Secret-Key': '$2b$10$Fh8TMR6T2FMboZlixjHwZ.icJuaarXOZN9FVgwHWaPbwc0dxpyY3e'
  //         }
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       setServices(data);
  //     } catch (error) {

  //     }
  //   })();
  // }, []);

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 26, fontWeight: 'bold', marginBottom: 8}}>Services</Text>
      <FlatList 
        data={services}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => {
            Linking.openURL(item.key.link);
          }}>
            <View style={{display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingTop: 10}}>
              <Image style={{height: 60, width: 60}} source={{uri: item.key.image}}/>
              <View style={{paddingLeft: 10, justifyContent: 'center'}}>
                <Text style={{color: colors.foregroundColor, fontWeight: 'bold', fontSize: 20}}>{item.key.title}</Text>
                <Text style={{color: '#a8a8a8'}}>{item.key.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
}