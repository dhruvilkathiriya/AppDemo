import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {fontSize, hp, wp} from '../../helper/constants';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../navigation/Routes';
import {icons} from '../../helper/imageConstants';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    GetProductList();
  }, []);

  const GetProductList = () => {
    setError('');
    fetch('https://dummyjson.com/products', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        console.log('API response:', res);
        setProducts(res.products);
        setIsRefreshing(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch data. Please try again.');
      });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => {
          navigation.navigate(routes.ProductDetailsScreen, {product: item});
        }}>
        <Image source={{uri: item?.thumbnail}} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.productPrice}>Price: ${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    if (isRefreshing) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: wp(5)}}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Product List</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CartScreen');
              }}>
              <Image
                resizeMode={'contain'}
                source={icons.cartIcon}
                style={{height: hp(6), width: wp(6)}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={GetProductList}
            disabled={isRefreshing}>
            <Text style={styles.refreshButtonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            refreshing={isRefreshing}
            onRefresh={GetProductList}
            ListFooterComponent={renderFooter}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: fontSize(21),
    fontWeight: '700',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  productImage: {
    width: hp(10),
    height: hp(10),
    marginRight: wp(4),
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: fontSize(15),
    fontWeight: '500',
    marginBottom: hp(0.5),
  },
  productPrice: {
    fontSize: fontSize(14),
    color: 'green',
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  refreshButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSize(16),
  },
  refreshButton: {
    backgroundColor: '#43632E',
    padding: hp(1),
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    marginBottom: hp(2),
  },
});

export default ProductListScreen;
