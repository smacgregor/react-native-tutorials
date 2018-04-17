import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( {album } ) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url,
    } = album;

    const {
        thumbnailContainerStyle,
        thumbnailStyle,
        textContainer,
        headerTextStyle,
        albumImageStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                      style={thumbnailStyle} 
                      source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={textContainer}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                  style={albumImageStyle}
                  source={{ uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    textContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};

export default AlbumDetail;
