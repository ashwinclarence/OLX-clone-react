import Banner from '../Components/Banner/Banner'
import Category from '../Components/Category/Category'
import ProductRow from '../Components/ProductRow/ProductRow'
import ProductView from '../Components/ProductView/ProductView'

const HomePage = () => {
  return (
    <div>
      <Category />
      <ProductView/>
          <ProductRow/>
          <Banner />
    </div>
  )
}

export default HomePage
