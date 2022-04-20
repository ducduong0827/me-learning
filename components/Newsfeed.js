import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    Image,
    TouchableOpacity,

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

posts = [
    {
        id: '1',
        name: 'lmao',
        timestamp: '12:34 05/04/2022',
        text: ' sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
        avatar: require('../assets/moe.png'),
        image: require('../assets/moe.png')
    },
    {
        id: '2',
        name: 'lmao',
        timestamp: '12:34 05/04/2022',
        text: ' sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
        avatar: require('../assets/longcat.png'),
        image: require('../assets/moe.png')
    },
    {
        id: '3',
        name: 'lmao',
        timestamp: '12:34 05/04/2022',
        text: ' sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
        avatar: require('../assets/ded.jpg'),
        image: require('../assets/ded.jpg')
    },
    {
        id: '4',
        name: 'lmao',
        timestamp: '12:34 05/04/2022',
        text: ' sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
        avatar: require('../assets/longcat.png'),
        image: require('../assets/uwucat.jpg')
    },
    {
        id: '5',
        name: 'lmao',
        timestamp: '12:34 05/04/2022',
        text: ' sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
        avatar: require('../assets/longcat.png'),
        image: require('../assets/smilecat.jpg')
    }
]

export default class Newsfeed extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image style={styles.avatar} source={post.avatar} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.name}>{post.name}</Text>
                        </TouchableOpacity>
                        <Text style={styles.timestamp}>{post.timestamp}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                        <TouchableOpacity>
                            <Image style={styles.dotmenu} source={require('../assets/dotmenu.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{}}>
                    <Text style={styles.text}>{post.text}</Text>
                    <TouchableOpacity>
                        <Image style={styles.image} source={post.image} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <FontAwesome name="comment-o" size={20} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="heart-o" size={20} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="retweet" size={20} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="share-alt" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Newsfeed</Text>
                </View>
                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
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
    headerText:{
        fontSize: 15,
    },
    feed: {
        marginHorizontal: 10,
    },
    feedItem: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 8,
        marginVertical: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16,
        marginTop: 5,
        marginLeft: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: '#454D65',
    },
    timestamp: {
        fontSize: 11,
        color: '#515359',
    },
    dotmenu: {
        width: 20,
        height: 20,
        opacity: 0.3,
        marginRight: 5,
    },
    text: {
        marginTop: 10,
        fontSize: 15,
        color: '#838899',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 5,
        marginVertical: 10,

    },

})
