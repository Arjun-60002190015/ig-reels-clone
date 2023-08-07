import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      
      <div className="app__top">
        <img className="app__logo"
        src="https://upload.wikimedia.org./wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
        alt="" 
        />
        <h1>Reels</h1>
        

      </div>

      <div className="app__videos">
        <VideoCard
        channel = ''
        avatarSrc = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Flandscape&psig=AOvVaw0Qawo8mmYiOlC_ckQ-os-_&ust=1691514533020000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODskuiEy4ADFQAAAAAdAAAAABAE'
        song='Test Song - Dinesh'
        likes={924}
        shares={30}
        />
         

      </div>
    </div>
  );
}

export default App;
