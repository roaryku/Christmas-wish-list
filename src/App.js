import './App.css';
import image from './christmas.jpg';
import imageTwo from './santa.jpg';
import { WishList } from './WishList';

function App() {
  return (
    <div className='app'>
      <div className="container">
     <img src = {imageTwo} className="imageTwo" width="300px" alt="Santa check list"/>
     </div>
     <div className="container">
     <h1>Christmas Wish List</h1>
     </div>
     <WishList/>
     <div className="container">
     <img src = {image} className="image" width="300px" alt="Merry Christmas"/>
     </div>
    </div>
  );
}

export default App;
