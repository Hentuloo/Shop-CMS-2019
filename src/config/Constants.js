export default {
    en: {
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
        TEXT: {
            close: 'Close',
            //orders
            today: 'Today: ',
            ordersNumber: 'Number of orders',
            toSent: 'To sent',
            toSentWaiting: 'Orders awaiting shipment:',
            sented: 'Sented',
            pending: 'Pending confirmation:',
            pendingConfirmation: 'Orders pending confirmation (delivered)',
            delivered: 'Delivered',
            goToOrdersButton: 'Go to orders',

            //orders-table
            collProductList: 'P. List',
            collOrderDate: 'Order date',
            collSendDetails: 'Send details',

            //orderDetails
            pieces: 'Pieces',
            clientComment: 'Client comment: ',
            preference: 'Preference',

            //products
            productStatus: 'Products status',
            editItem: 'Edit this item',
            newItem: 'Add new item',
            emptyStatus: 'Empty',
            lastStatus: 'Last',
            twoLastStatus: '2-last',
            newProduct: 'Add new product',

            //products-table
            collImage: 'Image',
            collName: 'Name',
            collAmount: 'Amount',
            collDescription: 'Description',
            collOperations: 'Operations',

            //productsDetails
            index: 'index:',
            name: 'Name:',
            Amount: 'Amount:',
            Details: 'Details:',
            imgHref: 'img(href):',
            imgTitle: 'img(title):',
            buttonEdit: 'Edit this product',
            buttonNew: 'Create product',

            //comments
            lastComments: 'Last comments:',
            readMore: 'Read more...',
        },
    },
};
