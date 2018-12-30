import React from 'react';

const likeButton = (props) => {

    const icon = props.liked ? 'glyphicon-heart' : 'glyphicon-heart-empty';

    return <span className={'glyphicon ' + icon} onClick={props.onClick}></span>
}

export default likeButton;
