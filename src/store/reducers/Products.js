import { productActions } from '../actions/productActions';

const initialState = {
  fetched: true,
  errorMessage: null,
  products: [
    {
      amount: '1',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
      images: [
        {
          src: 'https://source.unsplash.com/300x300/?camera',
          title: 'Your dream camera',
        },
      ],
      index: '32',
      name: 'Your dream camera',
      price: '9999',
      id: 'DVvjKoZWSYb1YhPbB1eg',
    },
    {
      amount: '1',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      id: 'EBTiso3ozgmIKOuzmHr1',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=1o-WrZbJnHCX-rosj5uIJ76-rmi5bPxT4',
          title: 'Camera lamp',
        },
      ],
      index: '12',
      name: 'Professional lamp ',
      price: '80',
    },
    {
      amount: '24',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      id: 'J8GCUAkPqCtyufMeMkcu',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=1BhdMW6XqqdQrx1yU42mHPfV3dEW4pW06',
          title: 'Camera rico',
        },
      ],
      index: '23',
      name: 'Camera ricoh',
      price: '45',
    },
    {
      amount: '1',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      id: 'QN49SS18V8noujE1Fz5c',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=1dEsK9sveDiPj5e05Xwz0lr8fv9-0BuH4',
          title: 'Sony',
        },
        {
          src:
            'https://drive.google.com/uc?id=1A7h_5YGqB_4GzOw5HlHOSV5-j3xT6hrz',
          title: 'Sony old',
        },
      ],
      index: '555',
      name: 'Sony camera',
      price: '140',
    },
    {
      amount: '6',
      details:
        'Small and lightweight 3.8x zoom capability with focal range of 40-150mm (80-300mm) Fast f3.5-4.5 lens enabling telephoto effects such as shallow depth of field Multi-coated to minimise ghosting and flaring Robust metal lens-mount for reliable use with all camera bodies adhering to the FourThirds Standard',
      id: 'U2ZRL0S9qONCfuNNHf7R',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=1D5p3upzmOBc4Q3IxBPW08ocrYgWuoMTW',
          title: 'camera lens',
        },
        {
          src:
            'https://drive.google.com/uc?id=1tfLJeIBkp0IrHkP4FpLEa7jlv9mdvetv',
          title: 'camera lens photo',
        },
        {
          src:
            'https://drive.google.com/uc?id=1ohg8ZoDgZJ96cVEVrtDg2lxCFLZ5m1dq',
          title: 'photo created by this camera',
        },
      ],
      index: '14',
      name: 'Olympus 40-150mm F4-5.6 R M.Zuiko',
      price: '1200',
    },
    {
      amount: 0,
      details:
        '24.2MP DX-Format Sensor and EXPEED 4 Processor. SnapBridge Bluetooth. Connectivity. Multi-CAM 1000 Autofocus Sensor. Full HD Movie Recording. Rear 3.0" 921k-dot LCD',
      id: 'XYbbBtw1lSd5bS3xQKCV',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=1EtDj_sfuiKPf4557WgmVFLAvJD9_fIzl',
          title: 'Nikon d20',
        },
        {
          src:
            'https://drive.google.com/uc?id=10UZ3VNWZNICoPqATOJtt7ZdEWNvrFP47',
          title: 'nikon image',
        },
        {
          src:
            'https://drive.google.com/uc?id=1j0F5h_7I4OUpanVQQepsOpz-cBPtde0G',
          title: 'Nikon camera',
        },
      ],
      index: '21',
      name: 'Nikon d20',
      price: '1200',
    },
    {
      amount: '2',
      details:
        'Canon EOS 4000D + Free Battery (Black Friday) + Pro SLR Case + CamPro 256GB Super Rapid SDXC Card (Class 10) + LP-E10 Battery',
      id: 'btZu5LfWiM6C48cooHJP',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=1-4EiA5PlDO0A9hIokZViBdVyJruDGx31',
          title: 'Camera',
        },
        {
          src:
            'https://drive.google.com/uc?id=1sIAB9Srg2Ic1anqWRzb-qsunE5a5vffX',
          title: 'camera presentation',
        },
        {
          src:
            'https://drive.google.com/uc?id=1vYPhkkRW9MkeHbSEVMKkN5-CQI94XxiC',
          title: 'photo by canon',
        },
        {
          src:
            'https://drive.google.com/uc?id=1gnKFmbXS2PFC3QR37wuySOaTFRJME1Z_',
          title: 'canon photographer',
        },
      ],
      index: '42',
      name: 'Camera stand',
      price: '292',
    },
    {
      amount: '4',
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
      id: 'dnQZcpUz8UxUJMmvY61x',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=12cjqHj5921gNalnYvub4jgXrcYadRu2E',
          title: 'Camera',
        },
        {
          src:
            'https://drive.google.com/uc?id=1UYue_kLmn-hhW88Mh-rJlbDGHH_FMTvx',
          title: 'Accessories BIG-package',
        },
        {
          src:
            'https://drive.google.com/uc?id=1-Uumd6YvGewpRx239p3KMX5b9f4RYCYt',
          title: 'Accessories BIG-package',
        },
        {
          src:
            'https://drive.google.com/uc?id=1SdePYxVcjmJnooGP5t0i7JnOJkz2_Jjh',
          title: 'Camera',
        },
        {
          src:
            'https://drive.google.com/uc?id=1uUOyNi6TjM9ukyy8warcX5u_3eo-HFAt',
          title: 'Package in work',
        },
      ],
      index: '32',
      name: 'Accessories BIG-package',
      price: '6020',
    },
    {
      amount: '4',
      details:
        'small and lightweight 3.8x zoom capability with focal range of 40-150mm (80-300mm) Fast f3.5-4.5 lens enabling telephoto effects such as shallo',
      id: 'xFheMB1W0NaxWWNlB240',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=180w27JCyCLTqx8rzd7P7-zke9cBbMjcU',
          title: 'The flash lamp',
        },
      ],
      index: '',
      name: 'The flash lamp hero-21d',
      price: '30',
    },
    {
      amount: '8',
      details:
        'The Olympus 14-42mm f/3.5-5.6 Zuiko ED Zoom Lens is a very compact and lightweight lens which offers a 3x zoom range with coverage from medium wide-angle to classical telephoto portrait. It is the ideal lens for general every-day use',
      id: 'zKcJL1jTTdkuLgagZ3f1',
      images: [
        {
          src:
            'https://drive.google.com/uc?id=18Dv9mWFwQOsZsJjqx8q1c56W6vO2DevO',
          title: 'Lens',
        },
        {
          src:
            'https://drive.google.com/uc?id=1yDOPLgvdTGEFanVYffuomD0R1TKmP1-v',
          title: 'Lens photo',
        },
        {
          src:
            'https://drive.google.com/uc?id=1BfNs3irZnoAx5SRMqHASa7KqNPxDV0dD',
          title: 'Lenst photo2',
        },
        {
          src:
            'https://drive.google.com/uc?id=1O33sc1JsJ3cdaxlSD4s7zCztYFaU67c4',
          title: 'photo created by lens',
        },
      ],
      index: '5',
      name: 'Lens: EOS 5d',
      price: '120',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productActions.FETCH_PRODUCTS: {
      return state;
    }
    case productActions.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        fetched: true,
        errorMessage: null,
      };
    }
    case productActions.CREATE_PRODUCT: {
      return state;
    }
    case productActions.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: [...state.products, action.payload],
      };
    }

    case productActions.EDIT_PRODUCT: {
      return state;
    }
    case productActions.EDIT_PRODUCT_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };
    }
    case productActions.DELETE_PRODUCT: {
      return state;
    }
    case productActions.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
        products: state.products.filter(
          product => product.id !== action.payload.id,
        ),
      };
    }
    case productActions.CREATE_PRODUCT_FAILURE:
    case productActions.FETCH_PRODUCTS_FAILURE:
    case productActions.EDIT_PRODUCT_FAILURE:
    case productActions.DELETE_PRODUCT_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.message,
        initialFetchStatus: true,
      };
    }
    default:
      return state;
  }
};
