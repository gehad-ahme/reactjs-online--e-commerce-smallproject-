import Productcard from "./components/productcard";
import { productList } from "./components/data";
const App=() => {
  const renderProductList=productList.map(product=><Productcard key={product.id} product={product}/>)
    return (
        <main className="container">
          <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5 p-3 rounded-md  ">
            {renderProductList}

          </div> 
        </main>
    );

};

export default App;
