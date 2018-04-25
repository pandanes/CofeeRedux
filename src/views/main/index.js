import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { connect } from 'react-redux'

import { mainActions } from '../../redux/modules/main'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 50
      },
      text: {
        fontSize: 28
      },
      row: {
        justifyContent: 'space-between'
      },
      firstRow: {
        flex: 1,
        flexDirection: 'row'
      },
      secondRow: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
       // flexDirection: 'row'
      },
      thirdRow: {
        flex: 0.5,
        paddingBottom: 200,
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        alignItems: 'center',
        width: 100,
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderWidth: 1,
        borderColor: '#494949'
      },
      buttonText: {
        fontSize: 20
      },
      buttonQty: {
        width: 150,
        padding: 10,
        margin: 50
      }
    })

//GET STATE; mapstatetoprops = bawaan redux, dr connect
const mapStateToProps = state => ({ main: state.main })

//DISPATCH ACTIONS
const mapDispatchToProps = dispatch => ({
  tambahQty: () => dispatch(mainActions.tambahQty()),
  kurangQty: () => dispatch(mainActions.kurangQty()),
  hitungTotal: () => dispatch(mainActions.hitungTotal()),
  hitungDiscount: () => dispatch(mainActions.hitungDiscount()),
  hitungTotalPrice: () => dispatch(mainActions.hitungTotalPrice()),
})

const Main = ({ main, tambahQty, kurangQty, hitungTotal, hitungDiscount, hitungTotalPrice }) => ( //example, increment, decrement
    <View style={styles.container}>
    <View style={[styles.firstRow, styles.row]}>
      <Button onPress={kurangQty} style={styles.buttonQty} title="-" />
      <Text style={styles.text}>{main.qty}</Text>
      <Button onPress={tambahQty} style={styles.buttonQty} title="+" />
    </View>
    <View style={styles.secondRow}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>Price</Text>
        <Text style={styles.text}>$ {main.price}</Text>
      </View>
      <View style={{flexDirection:'row'}}> 
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>$ {main.total}</Text></View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>Disc</Text>
        <Text style={styles.text}>$ {main.discount}</Text></View>
    </View>
    <View style={styles.thirdRow}>
      <TouchableOpacity onPress={hitungTotalPrice} style={styles.button}><Text style={styles.buttonText}>ORDER</Text></TouchableOpacity>
      <Text style={[styles.text, {marginTop:50}]}>Total Price:</Text><Text style={styles.text}>$ {main.totalPrice}</Text>
    </View>
      <Text style={styles.text}>Thanks for shopping! ☕️</Text>
  </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
