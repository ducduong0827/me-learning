import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';


class History extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lala: 5,
            data: [],
            isLoading: true
        };
    }

    async getMovies() {
        
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
        
    }

    componentDidMount() {
        console.log('did mount')
    }
    UNSAFE_componentWillMount() {
        console.log('will mount')
    }
    UNSAFE_componentWillReceiveProps() {
        console.log('will receiveProp')
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('will unmount')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
       return true
        
    }
    plus(){
        this.setState({lala : this.state.lala + 1})
    }
    minus(){
        this.setState({lala : this.state.lala - 1})
    }
    
    render() {
        const { data, isLoading } = this.state;
        console.log('render data',this.state.data)
        return (
            <View style={{flex: 1,}}>

                <Text style={{fontSize:24}}>{this.state.lala}</Text>
                
                <Button title='change' onPress={() => {this.getMovies()}} />
                <Button title='plus' onPress={() => {this.plus()}} />
                <Button title='minus' onPress={() => {this.minus()}} />
                
            <View style={{ flex: 1, padding: 24 }}> 
                {
                    isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <Text>{item.title}, {item.releaseYear}</Text>
                            )}
                        />
                    )}

                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({

})
export default History