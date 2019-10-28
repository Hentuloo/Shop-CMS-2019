export default {
    PATHS: {
        root: {
            path: '/',
            title: 'Home',
        },
        dashboard: {
            path: '/',
            title: 'Home',
        },
        orders: {
            path: '/orders',
            title: 'Orders',
        },
        products: {
            path: '/products',
            title: 'Products',
        },
        blog: {
            path: '/blog',
            title: 'Blog',
        },
        comments: {
            path: '/comments',
            title: 'Comments',
        },
        cmsSettings: {
            path: '/dashboard-settings',
            title: 'Settings',
        },
    },
    DEFAULTS: {
        img: 'https://unsplash.it/300/300',
    },
    ALERTS: {
        checkProductsInOrdersTab: {
            type: 'warning',
            text: `That product is ordered check orders list and remove in "delivered" tab`,
        },
    },
};
