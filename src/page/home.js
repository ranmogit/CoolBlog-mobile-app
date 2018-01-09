import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
// import fetch from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/node-fetch';
import BlogItem from './Components/blogItem'

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      blogs: []
    })
  }
  componentWillMount() {
    this.handleBlog()
  }
  handleBlog() {
    fetch('http://106.15.205.155:8088/blogs', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        // console.log(response)
        if (response.status === 200) {
          console.log(response)
          return response.json()
        }
      })
      .then(resJson => {
        console.log(resJson);
        let list = resJson.blog.list
        this.state.blogs = list
        list.map((value) => console.log(value));
        console.log(this.state.blogs)
      })
      .catch((error) => { console.error(error); });

  }
  _renderItem(blog,i) {
    return <BlogItem key ={i} detail={blog} />
  }

  render() {
    // let renderItem = this.state.blogs.map((value) =>
    //   <blogItem 
    //   key = {value.blogid}  
    //   blogid={value.blogid}
    //     thumpreview={value.thumpreview}
    //     title={value.title}
    //     summary={value.summary}
    //     updatetime={value.updatetime}
    //     userid={value.userid}
    //   />);
    return (
      <View style={styles.container}>
          {
            this.state.blogs.map((blog,i) => this._renderItem(blog,i))
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
