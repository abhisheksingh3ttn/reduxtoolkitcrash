import {React, lazy, Suspense} from 'react';
import Loading from '../components/Loading';

const ProductPreview = lazy(() => import('../components/Products'));
const Home = () => {
  return (
    <div>
        <h2>Welcome to Redux toolkit product store!</h2>
        <section>
            <h3>Products</h3>
            <Suspense fallback={<Loading />}>
                <ProductPreview />
            </Suspense>
            
        </section>
    </div>
  )
}

export default Home