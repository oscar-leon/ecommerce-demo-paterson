import { Checkout, Showcase } from "../containers"

const routes = [
    {
        id: 'home',
        path: '/',
        exact: true,
        component: Showcase
    },
    {
        id: 'checkout',
        path: '/checkout',
        component: Checkout
    }
]

export default routes;