import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import storage from '../store/index';

import Swiper from 'react-native-swiper';
// import {checkToken, refresh} from '../api/api';
import {Dialog} from 'beeshell';

export default class GuideScreen extends Component {
  constructor(p) {
    super(p);
    this.state = {
      activeIndex: 0,
    };
  }
  componentDidMount() {
    //openFlag 是判断之前引导图是否
    storage
      .load({key: 'openFlag'})
      .then((openFlag) => {
        if(openFlag){
          this.props.navigation.push('WebView',{title:'企业登录',url:"https://qinqing.hangzhou.gov.cn/qqent/"})
          SplashScreen.hide();
        }
      })
      .catch((e) => {
        SplashScreen.hide();
      });
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <Dialog
          ref={(c) => {
            this._dialog = c;
          }}
          cancelable={true}
          title="用户隐私政策"
          body={
            <ScrollView style={{height: '70%', paddingHorizontal: 10}}>
              <Text style={styles.privateText}>一，总则</Text>
              <Text>
                杭州城市大脑产品的所有权和运营权归浙江通得科技股份有限公司所有。用户在使用杭州城市大脑的服务之前，应当仔细阅读本协议，并同意遵守本协议后方可成为杭州城市大脑产品用户。一旦用户注册成功，则用户和杭州城市大脑产品之间自动形成协议关系，用户应当受本协议的约束。
              </Text>
              <Text>
                本协议的修改归浙江通得科技股份有限公司所有，对用户不承担通知义务。用户应当随时关注本协议的修改，并决定是否继续使用杭州城市大脑提供的各项服务。
              </Text>
              <Text style={styles.privateText}>二，服务内容</Text>
              <Text>
                杭州城市大脑服务具体内容由杭州城市大脑根据实际情况提供，例如杭州城市大脑等。除非本使用协议另有其他明确规定，增加或加强目前本服务的任何新功能，包括所推出的新产品，均受到本使用协议之规范。
              </Text>
              <Text>
                您了解并同意，本服务仅依其当前所呈现的状况提供，对于任何用户信息或者个人设定之时效，删除，传递错误，未予存储或其他任何问题，杭州城市大脑均不承担任何责任。杭州城市大脑保留不经事先通知为维修保养升级或其他目的的暂停本服务任何部分的权利。
              </Text>
              <Text style={styles.privateText}> 三，遵守法律</Text>
              <Text>
                您同意遵守中华人民共和国相关法律法规的所有规定并对任何方式使用您的密码和您的账号使用本服务的任何行为及结果承担全部责任。如您的行为违反国家法律法规的任何规定，有可能构成犯罪的，并由您承担全部法律责任，如果只要有理由认为您的行为，包括不限于您的任何言论和其他行为违反或者可能违反国家法律和法规的任何规定，只要可在任何时候不经任何事先通知终止向您提供服务。
              </Text>
              <Text style={styles.privateText}>四，您的注册义务</Text>
              <Text>
                为了能使用本服务，您同意以下事项：依本服务注册提示填写正确的手机号和密码若您提供任何违法，不道德或者质押认为不合适在杭州城市大脑上展示的资料;或者杭州城市大脑有理由怀疑您的资料属于程序或恶意操作，杭州城市大脑有权暂停或终止您的账号，并拒绝您于现在和未来使用本服务之全部或任何部分。
              </Text>
              <Text>
                杭州城市大脑无须对任何用户的任何登记资料承担任何责任，包括但不限于鉴别，核实任何登记资料的真实性，正确性，完整性，适用性及是否为最新资料的责任。
              </Text>
              <Text style={styles.privateText}>五，隐私保护</Text>
              <Text>
                杭州城市大脑不对外公开或第三方提供单个用户的注册资料及用户在使用网络服务时存储在杭州城市大脑的非公开内容，但下列情况除外：
                1.事先获得用户的明确授权 2.根据有关法律法规要求
                3.按照相关政府主管部门的要求
                4.该第三方同意承担与杭州城市大脑同等保护用户隐私的责任
              </Text>
              <Text style={styles.privateText}>六，附则</Text>
              <Text>
                本协议的订立，执行和解释及争议的解决均应适用中华人民共和国法律
                如本协议中的任何条款无论因何种原因完全或者部分无效或不具有执行力
                本协议的其余条款仍应有效并且具有约束力
                本协议解释权及修订归浙江通得科技股份有限公司所有
              </Text>
            </ScrollView>
          }
          confirmLabelText="同意并继续"
          cancelLabelText="不同意"
          confirmCallback={() => {
            this._dialog.close().then(() => {
              storage.save({
                key: 'openFlag',
                data: true,
              });
              navigation.push('WebView',{title:'企业登录',url:"https://qinqing.hangzhou.gov.cn/qqent/"})
            });
          }}
        />
        <Swiper
          showsButtons={true}
          showsPagination={true}
          showsButtons={false}
          loop={false}
          paginationStyle={
            {bottom: 10}
            // 主要分成三屏，三个View
          }>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 288,height: 276, marginTop: 66}}
              source={require('../assets/guideImg1.png')}
            />
            <Image
              style={{width: 109, height: 62}}
              source={require('../assets/guideText1.png')}
            />
            <Image
              style={{width: 124, height: 27.5, marginBottom: 30}}
              source={require('../assets/logo.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 288,height: 276, marginTop: 66}}
              source={require('../assets/guideImg2.png')}
            />
            <Image
              style={{width: 216, height: 65}}
              source={require('../assets/guideText2.png')}
            />
            <Image
              style={{height: 27.5, width: 124, marginBottom: 30}}
              source={require('../assets/logo.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 288,height: 276, marginTop: 73}}
              source={require('../assets/guideImg3.png')}
            />
            <TouchableOpacity
              onPress={() => {
                // 点击立即使用,判断openFlag，如果为true直接进入企业登录
                storage
                    .load({key: 'openFlag'})
                    .then((openFlag) => {
                      console.log('then '+openFlag)
                      // SplashScreen.hide()
                      navigation.push('WebView',{title:'企业登录',url:"https://qinqing.hangzhou.gov.cn/qqent/"})
                    })
                    .catch((e) => {
                      console.log('catch '+e)
                      this._dialog.open();
                      // SplashScreen.hide()
                    });
              }}>
              <Image
                style={{width: 182, height: 44}}
                source={require('../assets/guideText3.png')}
              />
            </TouchableOpacity>

            <Image
              style={{height: 27.5, width: 124, marginBottom: 30}}
              source={require('../assets/logo.png')}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  privateText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
