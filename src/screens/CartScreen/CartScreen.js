import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../helper/imageConstants';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../../actions/cartActions';

const CartScreen = ({cart}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cartData = useSelector(state => state.cart.cartItems);
  console.log('mmmmmmggggffffcccv', cartData);

  const handleRemoveItem = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'white',
          marginBottom: hp(1),
          //   marginHorizontal: wp(0),
        }}>
        <Image source={icons.backArrow} style={{height: hp(2), width: hp(2)}} />
      </TouchableOpacity>
      <Text style={styles.title}>Cart Items</Text>
      <FlatList
        data={cartData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.cartItem}>
              <Image
                source={{uri: item.thumbnail}}
                style={styles.productImage}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <View>
                  <Text style={styles.itemName}>{item.title}</Text>
                  <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                  <Image
                    resizeMode="contain"
                    source={icons.deleteIcon}
                    style={{height: hp(3), width: hp(3)}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  productImage: {
    width: hp(10),
    height: hp(10),
    marginRight: wp(4),
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
});
export default CartScreen;
