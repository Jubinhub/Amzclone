import { products } from './data.js'
import './HomePage.css'
import Nav from './Nav'
import Banner from './Banner.js'
import Product from './Product';
function HomePage() {
  return (
    <div className="homepage">
      <Nav />
      <div className='banerpage'>
        <Banner/>
      </div>
      {/* <Link to='' */}
      <div className='productPage'>
        {products.map((item)=>{
          return (
          <Product key={item.id} item = {item}/>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage