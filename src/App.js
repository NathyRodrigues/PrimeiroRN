import React from 'react';
import {
    View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking
} from 'react-native';

const colorGitHub = '#010409';
const colorDarkFontGitHub = '#4F55E';
const colorFontGitHub = '#C9D1D9';

const imageProfile = 'https://avatars.githubusercontent.com/u/105884810?v=4';
const urlMyGitHub = 'https://github.com/NathyRodrigues';

const App = () => {
    const handlePressGoToGitHub = async () => {
        const res = await Linking.canOpenURL(urlMyGitHub);
    if (res) {
      await Linking.openURL(urlMyGitHub);
    }};

return (
    <SafeAreaView style={style.container}>
    <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
    <View style={style.content}>
    <Image style={style.avatar} source={{uri: imageProfile}}/>

<Text style = {[style.defaultText, style.name]}>Nathália Rodrigues </Text>
<Text style = {[style.defaultText, style.nickname]}>nathyrodrigues </Text>
<Text style = {[style.defaultText, style.description]}>Profissional em transição de Carreira </Text>

<Pressable onPress = {handlePressGoToGitHub}>
    <View style={style.button}>
    <Text style = {[style.defaultText, style.textButton]}> Open in GitHub </Text>
    </View>
</Pressable>
    </View>
    </SafeAreaView>
    )};

export default App;

const style = StyleSheet.create ({
    container:{
        backgroundColor: colorGitHub,
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',},

content: {
    alignItems: 'center',
    padding: 20,},

avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderwidth: 20,},

defaultText: {
    color: colorFontGitHub,},

name: {
    fontWeight: 'bold',
    fontSize: 18,},

nickname: {
    fontSize: 18,
    color: colorFontGitHub,},

description: {
    fontWeight: 'bold',
    fontSize: 14,},
    
button: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,},

textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'},

});