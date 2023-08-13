export type Role = 'Admin' | 'Agent' | 'New';

export type Location = {
  address: string;
  coordinates: number[];
  country: string;
  place: string;
  placeName: string;
  postCode: number;
  region: string;
};

export type Feature = {
  roomCount: number;
  bathroomCount: number;
  propertyArea: number;
};

export type Image = {
  public_id: string;
  url: string;
};

export type Listing = {
  amenities?: string[];
  categories: string[];
  description: string;
  features: Feature;
  images: Image[];
  location: Location;
  price: string;
  rating: number;
  title: string;
  userId: User;
};

export type User = {
  email: string | null;
  favoriteIds: string[];
  hashedPassword: string;
  image: string | null;
  name: string | null;
  phone: string | null;
  role: Role;
};

export const listings: Listing[] = [
  {
    title: 'Buckingham Palace',
    description:
      'Fames tincidunt volutpat elit malesuada senectus. Interdum purus, iaculis feugiat duis nunc aliquam. Feugiat diam quam augue vel pharetra adipiscing. Ultricies ridiculus venenatis non erat nunc volutpat, odio a, ante. Volutpat pharetra rhoncus cras malesuada a ipsum. Phasellus a, arcu, amet purus phasellus tristique.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2013/07/18/20/24/mansion-164866_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/02/24/12/24/bathroom-2094733_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389258_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2021/11/08/00/30/living-room-6778197_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'security_box',
      'security_camera',
      'tv',
    ],
    categories: ['Residential'],
    features: {
      bathroomCount: 4,
      propertyArea: 530,
      roomCount: 8,
    },
    location: {
      address: 'Allen Lane',
      coordinates: [2.2137, 46.2276],
      country: 'United States',
      region: 'Washington',
      postCode: 98847,
      place: 'Peshastin',
      placeName: 'Peshastin',
    },
    userId: {
      email: 'user1@example.com',
      favoriteIds: [],
      image: 'assets/images/agent.jpg',
      name: 'Camila Herrera',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.1,
    price: '270,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/11/11/22/54/bedroom-527645_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/living-room-389264_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2013/09/25/18/02/porch-186402_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940168_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Apartment'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Canyon Street',
      coordinates: [12.5674, 41.8719],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.2,
    price: '320,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/02/07/18/16/living-room-2046668_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/06/05/22/13/home-1438305_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/08/00/kitchen-1940177_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Villa'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'E Government Avenue N',
      coordinates: [14.5501, 47.5162],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.3,
    price: '430,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2013/02/20/17/26/house-83931_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Townhouse'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Memorial Street',
      coordinates: [19.1451, 51.9194],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.4,
    price: '670,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2023/04/09/00/48/master-bedroom-7910422_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Townhouse'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'W Newel Avenue N',
      coordinates: [10.4515, 51.1657],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.5,
    price: '515,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940175_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940168_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/12/27/14/42/furniture-3042835_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Bungalow'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'N Willow Street W',
      coordinates: [4.4699, 50.5039],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.6,
    price: '632,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['House'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Pinion Street',
      coordinates: [2.3522, 48.8566],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.7,
    price: '745,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Bungalow'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Nibbelink Road',
      coordinates: [27.9534, 53.7098],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.8,
    price: '700,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Bungalow'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Saunders Road',
      coordinates: [24.9668, 45.9432],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 1.9,
    price: '260,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/04/18/08/58/new-england-1336173_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940168_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/12/27/14/42/furniture-3042835_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/02/24/12/24/bathroom-2094733_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Condominium'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Stewart Ranch Road',
      coordinates: [15.2, 45.1],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 2,
    price: '380,000',
  },
  {
    title: 'Zion EcoCabin: jacuzzi privado, vistas al cañón de Zion',
    description:
      'Tortor consectetur et pharetra dui interdum gravida. Ullamcorper sit mollis tincidunt ultrices. Consectetur facilisis ac cursus at faucibus. Pellentesque ullamcorper aliquam at donec eu bibendum viverra diam accumsan. Magna lectus id non in aliquam purus, sed luctus eu. Eu eu sit est egestas est sed netus.',
    images: [
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg',
      },
      {
        public_id: '',
        url: 'https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_1280.jpg',
      },
    ],
    amenities: [
      'air_conditioner',
      'fridge',
      'garage',
      'gym',
      'security_box',
      'security_camera',
      'tv',
      'washing_machine',
    ],
    categories: ['Building'],
    features: {
      roomCount: 3,
      bathroomCount: 2,
      propertyArea: 320,
    },
    location: {
      address: 'Old Blewett Pass Highway',
      coordinates: [13.4065, 52.51],
      country: 'United States',
      region: 'Utah',
      postCode: 84784,
      place: 'Hildale',
      placeName: 'Hildale',
    },
    userId: {
      email: 'user2@example.com',
      favoriteIds: [],
      image: 'assets/images/placeholder.jpg',
      name: 'Brenda Flores',
      hashedPassword: '',
      phone: '1234567890',
      role: 'Agent',
    },
    rating: 2.1,
    price: '180,000',
  },
];
