'use strict';
var getData = function () {
  var dataArray = [
    {
      author: {
        avatar: 'img/avatars/user01.png',
      },
      offer: {
        title: 'Заголовок1',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 100,
        y: 400,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user02.png',
      },
      offer: {
        title: 'Заголовок2',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 300,
        y: 500,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user03.png',
      },
      offer: {
        title: 'Заголовок3',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 500,
        y: 600,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user04.png',
      },
      offer: {
        title: 'Заголовок4',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 150,
        y: 360,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user05.png',
      },
      offer: {
        title: 'Заголовок5',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 260,
        y: 333,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user06.png',
      },
      offer: {
        title: 'Заголовок6',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 500,
        y: 240,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user07.png',
      },
      offer: {
        title: 'Заголовок7',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 750,
        y: 330,
      },
    },
    {
      author: {
        avatar: 'img/avatars/user08.png',
      },
      offer: {
        title: 'Заголовок8',
        address: '400, 350',
        price: 5000,
        type: 'palace',
        rooms: 8,
        guests: 10,
        checkin: '14:00',
        checkout: '14:00',
        features: [
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner',
        ],
        description: 'Все хорошо',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
        ],
      },

      location: {
        x: 860,
        y: 310,
      },
    },
  ];

  return dataArray;
};

var HouseTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
};

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var renderPin = function (obj) {
  var template = document.querySelector('#pin');
  var content = template.content.querySelector('button');
  var pin = content.cloneNode(true);
  var img = pin.querySelector('img');

  img.src = obj.author.avatar;
  pin.style.left = obj.location.x + 'px';
  pin.style.top = obj.location.y + 'px';

  return pin;
};

var renderCard = function (obj) {
  var template = document.querySelector('#card');
  var content = template.content.querySelector('.map__card');
  var card = content.cloneNode(true);

  var img = card.querySelector('img');
  img.src = obj.author.avatar;

  var title = card.querySelector('.popup__title');
  title.textContent = obj.offer.title;

  var address = card.querySelector('.popup__text--address');
  address.textContent = obj.offer.address;

  var price = card.querySelector('.popup__text--price');
  price.innerHTML = obj.offer.price + ' &#x20bd;/ночь';

  var type = card.querySelector('.popup__type');
  type.textContent = HouseTypes[obj.offer.type];

  var capacity = card.querySelector('.popup__text--capacity');
  capacity.textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + 'гостей';

  var features = card.querySelector('.popup__features');
  features.innerHTML = '';
  for (var i = 0; i < obj.offer.features.length; i++) {
    var feature = obj.offer.features[i];
    var item = document.createElement('li');
    item.classList.add('popup__feature');
    item.classList.add('popup__feature--' + feature);
    features.appendChild(item);
  }
  return card;
};

var generatePins = function (data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var pin = renderPin(obj);
    var card = renderCard(obj);
    fragment.appendChild(pin);
    fragment.appendChild(card);
  }

  map.appendChild(fragment);
};

var data = getData();
generatePins(data);

