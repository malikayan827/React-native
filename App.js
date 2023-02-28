import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import owl from './assets/owl.jpg'

export default function LoginPage() {
    return (
        <View style={styles.container} >
            <View style={styles.logo_div}><Image style={styles.logo_img} source={owl}></Image></View>
            <View style={styles.input_div}>
                <TextInput style={styles.InputFields} placeholder="Enter Your Name"></TextInput>
                <TextInput secureTextEntry={true} style={styles.InputFields} placeholder="Enter password"></TextInput>
               
            </View>
            <View style={styles.btn_div}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: -30
                }}>
                    <TouchableOpacity style={styles.BTN}><Text style={styles.BTN_text}>Login</Text></TouchableOpacity>
                   </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',


    },
    logo_div: {
        flex: .25,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input_div: {
        flex: .45,
       
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btn_div: {
        flex: .3,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"

    },
    logo_img: {
        paddingTop: 10,
        width: 150,
        height: 150,
        marginTop:50
    },
    InputFields: {
        width: 260,
        height: 50,
        marginBottom: 30,
        fontSize: 18,
        
        backgroundColor: "#fff",
        paddingLeft: 10,
        borderRadius: 5
    },
   
    BTN: {
        width: 100,
        height: 50,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 40,
        borderRadius: 10
    },
    BTN_text: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold"
    }
});