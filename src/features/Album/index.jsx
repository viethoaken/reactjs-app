import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from  './components/AlbumList'  

AlbumFeature.propTypes = {};

function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: 'Top 100 Nhac Tre',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg'
        },
        {
            id: 2,
            name: 'Top 100 Au My',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/8/5/5/b/855bb71b9bc9a577ea6627df65a2adeb.jpg'
        },
        {
            id: 3,
            name: 'Top 100 EDM',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg'
        },
    ]

    return (
        <div>
            <h2>Maybe you will like</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;