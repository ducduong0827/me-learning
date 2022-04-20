import React from 'react';
import { TextInput } from 'react-native';
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
    Button,
    Image,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Account extends React.Component {
    state = { 
        photo : null 
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        }
    
    ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
            this.setState({photo: response})
            }
        })
    }
    render() {
        const { photo } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Thông tin tài khoản</Text>
                </View>
                
                { photo && (
                    <Image 
                        source= {{ uri: photo.uri }}
                        style={{ width: '100%', height: 200,  }}
                    />
                )}
                <TouchableOpacity style={styles.choosePic} onPress={this.handleChoosePhoto}>
                    <Text> Chọn ảnh </Text>
                </TouchableOpacity>
               

                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <View style={styles.buttonFlex}>
                            <FontAwesome name="pencil-square-o" size={20} color="#000"/>
                            <Text style={styles.button}>Chỉnh sửa profile</Text>
                        </View>    
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonFlex}>
                            <FontAwesome name="location-arrow" size={20} color="#000"/>
                            <Text style={styles.button}>Định vị lại vị trí</Text>
                        </View>    
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonFlex}>
                            <FontAwesome name="star-o" size={20} color="#000"/>
                            <Text style={styles.button}>Đánh giá</Text>
                        </View>    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.exitApp}>
                        <Text>Exit app</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFECF4'
    },
    header: {
        paddingTop: 14,
        paddingBottom: 12,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    buttonContainer: {
        marginLeft: 20,
    },
    buttonFlex: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        fontSize: 16,
    },
    choosePic: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Account