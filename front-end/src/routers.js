import { createRouter, createWebHashHistory} from "vue-router"
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

const routes = [
  {
    name: 'Cart',
    path: '/cart',
    component: ShoppingCartPage,
  },
  {
    name: 'Products',
    path: '/products',
    component: ProductsPage,
  },
  {
    name: 'Details',
    path: '/products/:productId',
    component: ProductDetailPage,
  },
]

const router = createRouter (
  { history: createWebHashHistory(), routes }
)

export default router