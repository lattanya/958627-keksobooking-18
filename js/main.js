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
var filtersContainer = map.querySelector('.map__filters-container');


var form = document.querySelector('.ad-form');
var toggleForm = function(isDisabled){
  var fieldsets = form.querySelectorAll('fieldset');
  for (var i = 0; i  < fieldsets.length; i++) {
    var fieldset = fieldsets[i];
    fieldset.disabled = isDisabled;

    var inputs = fieldset.querySelectorAll('input');
    for (var k = 0; k  < inputs.length; k++) {
      var input = inputs[k];
      input.disabled = isDisabled;
    }
  }
};

toggleForm(true);

//функция позиции пина
var PIN_WIDTH = 65;
var PIN_HEIGHT = 87;

var mainPin = map.querySelector('.map__pin--main');
var findPinPosition = function(){
  var coordX = Math.round(mainPin.offsetLeft + PIN_WIDTH / 2);
  var coordY = Math.round(mainPin.offsetTop + PIN_HEIGHT);
  var addressInput = form.querySelector('#address');
  addressInput.value = coordX + ', ' + coordY;
}


// обработчик события


var ENTER_KEY_CODE = 13;


var onPinMousedown = function(){
  map.classList.remove('map--faded');
  toggleForm(false);
  findPinPosition();
};

var onPinEnterKeydown = function(evt){
  if (evt.keyCode === ENTER_KEY_CODE) {
    onPinMousedown();
  }
};


mainPin.addEventListener('mousedown', onPinMousedown);
mainPin.addEventListener('keydown', onPinEnterKeydown);



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
  capacity.textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';

  var time = card.querySelector('.popup__text--time');
  time.textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;

  var features = card.querySelector('.popup__features');
  features.innerHTML = '';
  for (var i = 0; i < obj.offer.features.length; i++) {
    var feature = obj.offer.features[i];
    var item = document.createElement('li');
    item.classList.add('popup__feature');
    item.classList.add('popup__feature--' + feature);
    features.appendChild(item);
  }

  var description = card.querySelector('.popup__description');
  description.textContent = obj.offer.description;

  var photosWrapper = card.querySelector('.popup__photos');
  var photo = photosWrapper.querySelector('.popup__photo');
  photosWrapper.innerHTML = '';
  for (var i = 0; i < obj.offer.photos.length; i++) {
    var photoSrc = obj.offer.photos[i];
    var imgCopy = photo.cloneNode();
    imgCopy.src = photoSrc;
    photosWrapper.appendChild(imgCopy);
  }

  return card;
};

var generatePins = function (data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var pin = renderPin(obj);
    fragment.appendChild(pin);
  }

  map.appendChild(fragment);
};

var generateCards = function (data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var card = renderCard(obj);
    fragment.appendChild(card);
  }

  map.insertBefore(fragment, filtersContainer);
};

var data = getData();
generatePins(data);
generateCards(data);

//валидация формы

var HouseCapacity = {
  ONE_GUEST: 1,
  TWO_GUESTS: 2,
  THREE_GUESTS: 3,
  NO_GUESTS: 0,
};

var RoomsAmount = {
  ONE_ROOM: 1,
  TWO_ROOMS: 2,
  THREE_ROOMS: 3,
  HUNDRED_ROOMS: 100,
}

var RoomsCapacity = {
  [RoomsAmount.ONE_ROOM]: {
    allowedGuests: [HouseCapacity.ONE_GUEST],
    default: HouseCapacity.ONE_GUEST,
  },

  [RoomsAmount.TWO_ROOMS]: {
    allowedGuests: [HouseCapacity.ONE_GUEST, HouseCapacity.TWO_GUESTS],
    default: HouseCapacity.TWO_GUESTS,
  },

  [RoomsAmount.THREE_ROOMS]: {
    allowedGuests: [HouseCapacity.ONE_GUEST, HouseCapacity.TWO_GUESTS, HouseCapacity.THREE_GUESTS],
    default: HouseCapacity.THREE_GUESTS,
  },

  [RoomsAmount.HUNDRED_ROOMS]: {
    allowedGuests: [HouseCapacity.NO_GUESTS],
    default: HouseCapacity.NO_GUESTS,
  },
};

var selectCapacity = form.querySelector('#capacity');

var selectRooms = form.querySelector('#room_number');

var validateCapacity = function() {
  var capacityValue = selectCapacity.value;
  var roomsValue = selectRooms.value;

console.log(capacityValue);

  var selectedRoomsData = RoomsCapacity[roomsValue];
  var currentAllowedGuests = selectedRoomsData.allowedGuests;

  var isValid =  currentAllowedGuests.some(function(el){
    return el === parseInt(capacityValue, 10);
  });

  var textValidation = isValid ? '' : 'неверное количество гостей';

    selectCapacity.setCustomValidity(textValidation);

    selectCapacity.reportValidity();
}

selectCapacity.addEventListener('change', validateCapacity);

//функция синхронизации комнат и гостей функция которая наобработчике события
// чендж для селекта румс при изменении селекта
// румс должно изменятьсязначение селекта капасити если оно не правильное используется поле дефолт




