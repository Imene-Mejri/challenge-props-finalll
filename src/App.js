




import './App.css';
import Listitem from './components/listitem';


const product = [

  {
    image: '/images/iphone.jpg',
    type: ' iphone',
    price: 4.499,
  },

  {
    image: '/images/iphonexr.jpg',
    type: 'sumsung',
    price: 597.90,
  },

  {
    image: '/images/sumsung.jpg',
    type: 'Apple iPhone XR',
    price: 7597.90,
  },


]


const alert=(type)=>alert(`this is the name: ${product.type}`);
  

function App() {
  return (
    <div className="App">
         <h1>Our Products</h1>
          <h3> <Listitem product={product}/>   </h3>
         
    </div>
    
  );
}


export default App;
