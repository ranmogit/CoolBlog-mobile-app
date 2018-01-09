import React, { Component, PropTypes  } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../../res/styles/GlobleStyles'

export default class BlogItem extends Component {
    constructor(props)
    {
        super(props);
    }
    static defaultProps = {
        title: 'test1',
        thumpreview:'',
        summary:'',
        blogid:'',
        updatetime:'',
        userid:''
    }
    buttonHandle(blog)
    {
        alert('欢迎来到'+blog.blogid);
        //console.log();
        // this.handleUpOrder(shop.name)
    }

    render () {
        return (
            <TouchableOpacity onPress={()=>this.buttonHandle(this.props)}>
                <View style={styles.cell}>
                {this.props.detail.title}
                    <View style ={styles.line}>
                        {this.props.detail.thumpreview}
                        <Text style={styles.line}>
          hello 丁建
        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export const styles = StyleSheet.create({
 cell:{
     width:GlobalStyles.screenWidth,
     flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    padding:5,
    backgroundColor:'#adadad'

 },
 line:{

 }

})
// module.exports = blogItem;