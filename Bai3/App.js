import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Thông tin sản phẩm */}
      <View style={styles.FirstContainer}>
        <View style={styles.productInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80x100' }} // Đường dẫn tới hình sản phẩm
          style={styles.productImage}
        />
        
        <View style={styles.Fist}>
          <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm, Tích phân và Ứng dụng</Text>
          <Text style={styles.productSupplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productOriginalPrice}>141.800 đ</Text>
        </View>

          <View style={styles.MuaSau}>
            <View style={styles.quantitySection}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
         </View >
             <TouchableOpacity style={styles.Muasau} onPress={increaseQuantity}>
                <Text style={styles.text}>Mua sau</Text>
            </TouchableOpacity>
          </View>

      </View>

    
    
      </View>

{/* Mã giảm giá */}
      <View style={styles.discountSection}>
        <View style={styles.MaGiamGia}>
          <Text style={styles.Ma}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity  onPress={increaseQuantity}>
                <Text style={styles.text}>Xem tại đây</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.discountS}>
        <TextInput
          placeholder="Mã giảm giá"
          style={styles.discountInput}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
        </View>

      </View>
      </View>
    
    

   

      

     
      {/* Tạm tính */}
      <View>
       <View style={styles.MaGiamGia}>
          <Text style={styles.Ma}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <TouchableOpacity  onPress={increaseQuantity}>
                <Text style={styles.text}>Nhập tại đây?</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.summarySection}>
      
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.summaryAmount}>{141800 * quantity} đ</Text>
      </View>

      {/* Thành tiền */}
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalAmount}>{141800 * quantity} đ</Text>
      </View>

      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  productInfo: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  productImage: {
    width: 104,
    height: 155,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productSupplier: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  productOriginalPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'flex-start',
    marginBottom: 16,
    right:30
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  discountSection: {
   flex:1,
  
  },
  discountS:{
     flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 60,
  }
  ,
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  savedCoupons: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  savedCouponsText: {
    color: '#FFCC00',
    fontWeight: 'bold',
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
    color: '#555',
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  orderButton: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  Fist:{
    
    
   
  },
  MuaSau:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  Muasau:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  text:{
    flex:2,
    color:'#134FEC',
    fontWeight:600

  },
  FirstContainer:{
    flex:1,
    

  },
  MaGiamGia:{
    flex:1,
    flexDirection:'row',
    
    marginTop:-35
   

  },
  Ma:{
    flex:2,
    left:20
  }
});

export default ProductScreen;
