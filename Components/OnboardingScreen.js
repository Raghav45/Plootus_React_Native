import React, {Component} from 'react';
import {Text, View} from 'react-native';

import HomeScreenCarousel from './Carousel'
import Logo from './Logo';
import LoginButton from './OnboardingScreenButtons/LoginButton';
import JoinNowButton from './OnboardingScreenButtons/JoinNowButton';

class home extends Component {
    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };
    render() {
        return (
            <View>
                {/* UI */}

                <Logo />
                
                {/* Carousel */}
                <HomeScreenCarousel />

                {/* Buttons */}
                <JoinNowButton />
                <LoginButton />
            </View>
        );
    }
};

export default home;
