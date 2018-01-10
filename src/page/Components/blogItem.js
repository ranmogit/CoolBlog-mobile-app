import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    alert
} from 'react-native';
import GlobalStyles from '../../res/styles/GlobleStyles'

export default class BlogItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        title: 'test1',
        thumpreview: '',
        summary: '',
        blogid: '',
        updatetime: '',
        userid: ''
    }
    buttonHandle(blog) {
        alert('欢迎来到' + blog.blogid);
        //console.log();
        // this.handleUpOrder(shop.name)
    }

    render() {
        return (
            
            <View style={styles.cell}>
            
                <View style={styles.line}>
                <TouchableOpacity activeOpacity={0.3} >
                    <Text style={styles.title}>
                        {this.props.detail.title}
                    </Text>
                    <Text style={styles.summary}>
                        {this.props.detail.summary}
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <Image style={styles.preview} source={{ uri: this.props.detail.preview }} />
                </View>
            </View>
           


        )
    }
}

export const styles = StyleSheet.create({
    cell: {
        width: 400,
        flexDirection: 'row',
        borderColor: '#E2E9EB',
        borderWidth: 1,
        borderRadius: 0.5,
        alignItems: 'center',
        height: 150,
        padding: 5,
        backgroundColor: '#FFF'

    },
    line:{
        flex: 2,
        alignItems: 'flex-start'
        // justifyContent: 'center',
        
    },
    title: {
        fontSize: 18,
        color: '#212121'
    },
    preview: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    summary:{
        fontSize: 15,
        
    },
    right: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }

});

module.exports = BlogItem;