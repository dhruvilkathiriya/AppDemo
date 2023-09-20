import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {icons} from '../../helper/imageConstants';
import {fontSize, hp, wp} from '../../helper/constants';
import Swiper from 'react-native-swiper';
import {addToCart} from '../../actions/cartActions';
import {useDispatch} from 'react-redux';

const ProductDetailsScreen = ({route}) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Your item is added to cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'white',
          marginBottom: hp(1),
          marginHorizontal: wp(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={icons.backArrow}
            style={{height: hp(2), width: hp(2)}}
          />
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
      </TouchableOpacity>
      <View style={{height: hp(45)}}>
        <Swiper
          style={styles.sliderContainer}
          showsButtons={false}
          autoplay={true}>
          {product.images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{uri: image}} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={{marginHorizontal: wp(5)}}>
        <Text style={styles.infoItem}>Brand: {product.brand}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}> ${product.price}</Text>
      </View>
      <TouchableOpacity style={styles.viewCartButton} onPress={handleAddToCart}>
        <Text style={styles.viewCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
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
    fontWeight: 'bold',
    marginBottom: hp(1.2),
    marginTop: hp(1.2),
  },
  description: {
    fontSize: fontSize(14),
    marginBottom: hp(1.2),
  },
  price: {
    fontSize: fontSize(30),
    color: 'green',
    marginBottom: hp(1.2),
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoItem: {
    fontSize: fontSize(14),
    marginTop: hp(1.2),
    color: 'green',
  },
  viewCartButton: {
    backgroundColor: '#43632E',
    padding: hp(1),
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    marginTop: hp(2),
  },
  viewCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSize(16),
  },
});
export default ProductDetailsScreen;
