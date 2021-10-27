const products = [
  {
    title: 'Tomatoes',
    photo: 'https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 5,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://images.pexels.com/photos/53588/tomatoes-vegetables-food-frisch-53588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/373019/pexels-photo-373019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 15,
  },
  {
    title: 'Carrots',
    photo: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 8,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 25,
  },
  {
    title: 'Mashrooms',
    photo: 'https://cdn.pixabay.com/photo/2018/04/03/08/37/mushroom-3286258_1280.jpg',
    price: 7,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2017/08/28/17/35/mushrooms-2690529_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2014/02/12/22/43/mushrooms-264966_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2017/06/20/19/57/kitchen-2424510_1280.jpg',
    countInStock: 16,
  },
  {
    title: 'Potatoes',
    photo: 'https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg',
    price: 8,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/08/11/08/49/potatoes-1585075_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2014/11/24/14/39/potatoes-544073_1280.jpg',
    countInStock: 22,
  },
  {
    title: 'Basil',
    photo: 'https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.jpg',
    price: 5,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2014/12/30/11/12/basil-583816_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2018/05/16/10/38/basil-3405405_1280.jpg',
    countInStock: 13,
  },
  {
    title: 'Pepper',
    photo: 'https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 6,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2018/01/06/10/48/bell-pepper-3064734_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2019/03/09/12/09/paprika-4044059_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2014/04/09/15/31/paprika-320138_1280.jpg',
    countInStock: 19,
  },
  {
    title: 'Berries',
    photo: 'https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberries-1326154_1280.jpg',
    price: 7,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2018/06/07/16/38/blueberries-3460423_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2015/03/26/09/40/blueberries-690072_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_1280.jpg',
    countInStock: 23,
  },
  {
    title: 'Raspberries',
    photo: 'https://cdn.pixabay.com/photo/2018/06/04/23/42/raspberries-3454504_1280.jpg',
    price: 6,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2014/08/21/09/25/raspberries-423194_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/07/03/23/18/raspberries-1495713_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2016/07/08/10/34/raspberry-1503998_1280.jpg',
    countInStock: 24,
  },
  {
    title: 'Cherries',
    photo: 'https://cdn.pixabay.com/photo/2016/06/18/22/36/cherries-1465801_1280.jpg',
    price: 6,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/03/05/21/47/berry-1239092_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2017/06/14/15/18/cherries-2402449_1280.jpg',
    countInStock: 23,
  },
  {
    title: 'Apple',
    photo: 'https://images.pexels.com/photos/4187483/pexels-photo-4187483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 5,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://images.pexels.com/photos/7333131/pexels-photo-7333131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/4399942/pexels-photo-4399942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/1131079/pexels-photo-1131079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 8,
  },
  {
    title: 'Orange',
    photo: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 9,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/2090902/pexels-photo-2090902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 19,
  },
  {
    title: 'Watermelon',
    photo: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    price: 5,
    description: `Our shop is a symbol of good health and well-being not only to our customers but also to the community at large. We believe that the quality of our products is exceptional. We offer highest quality products, taking into consideration every detail of the process so our client could be sure while choosing our products they’re choosing the best!`,
    addPhoto1: 'https://images.pexels.com/photos/7543206/pexels-photo-7543206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/260426/pexels-photo-260426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/3429784/pexels-photo-3429784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 5,
  },
];

module.exports = products;
  