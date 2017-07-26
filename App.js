import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Icon,
  Body,
  Button,
  Text,
  Fab,
  Grid,
  Col,
} from 'native-base';
import {
  View
} from 'react-native';
import {
  Font
} from 'expo';
const timer = require('react-native-timer');


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      bgColor: '#5067FF',
    };

    this.changeColor = () => {
      var r = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
      var g = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
      var b = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
      this.setState({
        'bgColor': `#${r}${g}${b}`
      })
    }
  }

  async componentDidMount() {
    console.log("Will")
    timer.clearTimeout(this);
    timer.setInterval('changeColor', this.changeColor, 2000)
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({
      fontLoaded: true
    });
  }
render() {
      if (this.state.fontLoaded) {
        return (
        <Container style={{flex:1,justifyContent: 'center',paddingTop: Expo.Constants.statusBarHeight}}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Timer</Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={{flex: 1}} style={{ backgroundColor: this.state.bgColor }}>
            <Grid style={{alignItems: 'center'}}>
              <Col>
                 <Text style={{fontSize:60, textAlign: "center" }}>{this.state.bgColor}</Text>
              </Col>
            </Grid>
          </Content>
          <Fab onPress={()=>{
            this.changeColor()
          }}
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight">
            <Icon name="add" />
          </Fab>
        </Container>
        )
      } else {
        return (
          <Container>
          </Container>
        )
      }
    }

}