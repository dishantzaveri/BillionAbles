import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Alert, Picker,Item, Input, Button, List, ListItem,  } from 'react-native';
import { Container, View, Header, Content, Text, Left, Right, Body, Title, Item, Input, Button, List, ListItem, } from "native-base";
import Communications from 'react-native-communications';
export default class Donors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false,
      name: null,
      mobile: null,
      group: null,
      donors: [],
      grouptoBeFiltered: null,
    };
  }

  componentDidMount() {
    this.timer=setInterval(() =>this.getDonor(), 1000);
  }
  
  async getDonor() {     
        return fetch(`https://blood-donors-db.firebaseio.com/donors.json`)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            donors: Object.values(responseJson),
          });
        })
        .catch((error) => {
          console.error(error);
        });   
  }

  addDonor = (name, mobile, group) => {
    if(this.state.name != null && this.state.mobile != null && this.state.group != null){ 
      fetch('https://blood-donors-db.firebaseio.com/donors.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "mobile": mobile,
          "group": group,
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
              if(responseData.name != null ){
                this.setState({
                    name: null,
                    mobile: null,
                    group: null,
                    isSubmited: true,
                  })              
              }
              else{
              Alert.alert(
                'Oops !',
                'Something went wrong',
                [
                  {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
            }

      })
      .done();
    }
      else{
        Alert.alert(
          'Oops !',
          'You forgot some field. Please fill it before submitting',
          [
            {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )        
      }
    
  };

  onValueChange(value) {
    this.setState({
      group: value
    });
  }

    onValueChange2(value) {
      this.setState({
        grouptoBeFiltered: value
      });
    }

    _toggleDonorPost(){
        this.setState({
            isSubmited: false
        })
    }

  render() {
    return (
      <Container>

        <Header androidStatusBarColor="#af1313" style={{ backgroundColor: '#d11919' }}>
          <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title>BLOOD DONORS</Title>
          </Body>
        </Header>

        <Content style = {{ marginLeft: 10, marginRight:10 }}>
          <View style = {{ backgroundColor:"#f2eded", marginTop: 10 }}>
          {this.state.isSubmited
          ? 
            <TouchableOpacity onPress = { () => this._toggleDonorPost()}>
              <Text style = {{ fontSize:20, color:'#770707' }}>Add more donors</Text>
            </TouchableOpacity>
          :
            <View style = {{ paddingLeft: 20, paddingRight: 20, paddingBottom: 40  }}>

              <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
                <Text style = {{ fontSize:15, fontWeight: 'bold', color:'#e89494', }}>DONATE YOUR BLOOD</Text>
              </View>

              <Item rounded style = {{ marginBottom: 20, marginTop:20 }}>
                <Input placeholder="Name" 
                onChangeText={input => this.setState({ name: input })} 
                />
              </Item>

              <Item rounded style = {{ marginBottom: 20, marginTop:20 }}>
                <Input placeholder="Mobile" 
                onChangeText={input => this.setState({ mobile: input })} 
                keyboardType = { "phone-pad" }
                />
              </Item>

              <View style = { styles.picker }>
                <Picker
                    selectedValue={ (this.state.group && this.state.pickerValue) || 'a'}
                    onValueChange={this.onValueChange.bind(this)}>
                    <Picker.Item label="Blood Group" value="null" />
                      <Picker.Item label="A+" value="A+" />
                      <Picker.Item label="A-" value="A-" />
                      <Picker.Item label="B+" value="B+" />
                      <Picker.Item label="B-" value="B-" />
                      <Picker.Item label="AB+" value="AB+" />
                      <Picker.Item label="AB-" value="AB-" />
                      <Picker.Item label="O+" value="O+" />
                      <Picker.Item label="O-" value="O-" />
                </Picker>
              </View>

              <Button block light onPress={ () => this.addDonor(this.state.name, this.state.mobile, this.state.group) } style = {{ marginLeft: 30, marginRight:30 }}>
                  <Text>Submit</Text>
              </Button>
            </View>
          }
        </View>

        <View>
          <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:20, marginBottom: 10 }}>
            <Text style = {{ fontSize:15, fontWeight: 'bold', color:'#e89494', }}>DONORS</Text>
          </View>
          
          <View style = { styles.picker }>
            <Picker
                selectedValue={ (this.state.grouptoBeFiltered && this.state.pickerValue) || 'a'}
                onValueChange={this.onValueChange2.bind(this)}>
                <Picker.Item label="Blood Group" value="null" />
                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="A-" value="A-" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B-" value="B-" />
                  <Picker.Item label="AB+" value="AB+" />
                  <Picker.Item label="AB-" value="AB-" />
                  <Picker.Item label="O+" value="O+" />
                  <Picker.Item label="O-" value="O-" />
            </Picker>
          </View>

        </View>
        {this.state.grouptoBeFiltered == null
        ?
        null
        :
        <View>
                {this.state.donors.filter( element => element.group ==this.state.grouptoBeFiltered).map((item, index) => (
                <List>
                  <ListItem thumbnail>
                    <Left>
                    </Left>
                    <Body>
                      <Text>{item.name} ({item.group})</Text>
                      <Text note numberOfLines={1}>Mob: {item.mobile}</Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={() => Communications.phonecall(`${item.mobile}`, true)}>
                        <Text>Call</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>       
                ))}
        </View>
      }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
picker: {
  borderWidth:1,
  borderColor: '#848484',
  marginLeft: 60,
  marginRight: 60,
  marginBottom: 10,
}
});
