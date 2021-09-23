const products = [
  {
    id: 1,
    title: 'Dog-lead',
    photo: 'https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: 5,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2015/09/06/00/55/dog-926785_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/12/17/01/31/dog-1912727_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2018/03/11/20/55/woman-3218052_1280.jpg',
    countInStock: 15,
  },
  {
    id: 2,
    title: 'Bowl',
    photo: 'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '35',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/3198050/pexels-photo-3198050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/8434670/pexels-photo-8434670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 25,
  },
  {
    id: 3,
    title: 'Outfit',
    photo: 'https://images.pexels.com/photos/5732465/pexels-photo-5732465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '25',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/5732460/pexels-photo-5732460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/5731804/pexels-photo-5731804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/5732451/pexels-photo-5732451.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    countInStock: 16,
  },
  {
    id: 4,
    title: 'Food',
    photo: 'https://images.pexels.com/photos/7310128/pexels-photo-7310128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '10',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/3198050/pexels-photo-3198050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/8434670/pexels-photo-8434670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 22,
  },
  {
    id: 5,
    title: 'Toy',
    photo: 'https://images.pexels.com/photos/5732454/pexels-photo-5732454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '50',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/3155894/pexels-photo-3155894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/3013467/pexels-photo-3013467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    addPhoto3: 'https://images.pexels.com/photos/6864673/pexels-photo-6864673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    countInStock: 13,
  },
  {
    id: 6,
    title: 'Dog-lead',
    photo: 'https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '5',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2015/09/06/00/55/dog-926785_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/12/17/01/31/dog-1912727_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2018/03/11/20/55/woman-3218052_1280.jpg',
    countInStock: 19,
  },
  {
    id: 7,
    title: 'Dog-lead',
    photo: 'https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '5',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`,
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`, 
    addPhoto1: 'https://cdn.pixabay.com/photo/2015/09/06/00/55/dog-926785_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/12/17/01/31/dog-1912727_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2018/03/11/20/55/woman-3218052_1280.jpg',
    countInStock: 23,
  },
  {
    id: 8,
    title: 'Bowl',
    photo: 'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '35',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/3198050/pexels-photo-3198050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/8434670/pexels-photo-8434670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 24,
  },
  {
    id: 9,
    title: 'Outfit',
    photo: 'https://images.pexels.com/photos/5732465/pexels-photo-5732465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '25',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/5732460/pexels-photo-5732460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/5731804/pexels-photo-5731804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/5732451/pexels-photo-5732451.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    countInStock: 23,
  },
  {
    id: 10,
    title: 'Food',
    photo: 'https://images.pexels.com/photos/7310128/pexels-photo-7310128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '10',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/3198050/pexels-photo-3198050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/8434670/pexels-photo-8434670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto3: 'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    countInStock: 8,
  },
  {
    id: 11,
    title: 'Toy',
    photo: 'https://images.pexels.com/photos/5732454/pexels-photo-5732454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '50',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://images.pexels.com/photos/3155894/pexels-photo-3155894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    addPhoto2: 'https://images.pexels.com/photos/3013467/pexels-photo-3013467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    addPhoto3: 'https://images.pexels.com/photos/6864673/pexels-photo-6864673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    countInStock: 19,
  },
  {
    id: 12,
    title: 'Dog-lead',
    photo: 'https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    price: '5',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra. 
        Nunc sed id semper risus in. Elit at imperdiet dui accumsan sit amet. Cursus in hac habitasse platea dictumst 
        quisque sagittis purus sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis. 
        Maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.
        Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc 
        faucibus a pellentesque sit. Nisi lacus sed viverra tellus. Lectus proin nibh nisl condimentum id. Nibh sed pulvinar proin gravida.
        Hac habitasse platea dictumst vestibulum rhoncus. Sagittis nisl rhoncus mattis rhoncus urna neque. 
        Egestas fringilla phasellus faucibus scelerisque eleifend. Urna porttitor rhoncus dolor purus non enim praesent. 
        Turpis massa tincidunt dui ut. Tristique senectus et netus et malesuada fames. Semper risus in hendrerit gravida rutrum. 
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit egestas dui 
        id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. 
        Vivamus arcu felis bibendum ut tristique. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.`, 
    shortDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Vivamus arcu felis bibendum ut tristique et egestas. Morbi tincidunt ornare massa eget egestas purus. 
        Neque volutpat ac tincidunt vitae semper. Dictum sit amet justo donec enim diam vulputate ut pharetra.`,
    addPhoto1: 'https://cdn.pixabay.com/photo/2015/09/06/00/55/dog-926785_1280.jpg',
    addPhoto2: 'https://cdn.pixabay.com/photo/2016/12/17/01/31/dog-1912727_1280.jpg',
    addPhoto3: 'https://cdn.pixabay.com/photo/2018/03/11/20/55/woman-3218052_1280.jpg',
    countInStock: 5,
  },
];

module.exports = products;
  