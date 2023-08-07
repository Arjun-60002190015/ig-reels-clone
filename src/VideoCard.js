import React, {useRef, useState} from "react";
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({url,likes, shares, channel, avatarSrc, song}){
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () =>{
      if(isVideoPlaying){
        videoRef.current.pause();
        setIsVideoPlaying(false)

      }else{
        videoRef.current.play();
        setIsVideoPlaying(true)

      }
    };
    return (
        <div
           className='videoCard'>
            <VideoHeader/>
            <video

                ref = {videoRef}
                onClick = {onVideoPress}
                className="videoCard__player"
                src={url}
                alt='IG reel video'
                loop
            />
            <VideoFooter
            channel = {channel}
            avatarSrc = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Flandscape&psig=AOvVaw0Qawo8mmYiOlC_ckQ-os-_&ust=1691514533020000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODskuiEy4ADFQAAAAAdAAAAABAE'
            song='Test Song - Dinesh'
            likes={924}
            shares={30}
            />

        </div>
    )
}

export default VideoCard