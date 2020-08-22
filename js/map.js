'use strict';

(function () {
  // константы
  var MIN_Y_COORD = 130;
  var MAX_Y_COORD = 630;

  var map = document.querySelector('.map');
  var filtersContainer = map.querySelector('.map__filters-container');
  var form = document.querySelector('.ad-form');

  var generateCardsAndPins = function (data) {
    var fragment = document.createDocumentFragment();
    var fragmentForCards = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      var pin = window.renderPin(obj);
      var card = window.renderCard(obj);
      fragment.appendChild(pin);
      fragmentForCards.appendChild(card);

      window.addShowCardHandler(pin, card);
    }

    map.appendChild(fragment);
    map.insertBefore(fragmentForCards, filtersContainer);
  };

  window.loadData(generateCardsAndPins);

  var toggleForm = function (isDisabled) {
    var fieldsets = form.querySelectorAll('fieldset');
    for (var i = 0; i < fieldsets.length; i++) {
      var fieldset = fieldsets[i];
      fieldset.disabled = isDisabled;

      var inputs = fieldset.querySelectorAll('input');
      for (var k = 0; k < inputs.length; k++) {
        var input = inputs[k];
        input.disabled = isDisabled;
      }
    }

    if (isDisabled) {
      form.classList.add('ad-form--disabled');
    } else {
      form.classList.remove('ad-form--disabled');
    }
  };

  toggleForm(true);

  // функция позиции пина

  var mainPin = map.querySelector('.map__pin--main');
  var findPinPosition = function () {
    var coordX = Math.round(mainPin.offsetLeft + window.PinSizes.WIDTH / 2);
    var coordY = Math.round(mainPin.offsetTop + window.PinSizes.HEIGHT);
    var addressInput = form.querySelector('#address');
    addressInput.value = coordX + ', ' + coordY;
  };

  // обработчик события активация карты

  var onMainPinMousedown = function () {
    map.classList.remove('map--faded');
    toggleForm(false);
    findPinPosition();

    var onMainPinMousemove = function (evt) {
      var pageWidth = document.querySelector('html').clientWidth;
      var mapWidth = map.clientWidth;
      var mapOffset = (pageWidth - mapWidth) / 2;
      var maxXCoord = mapWidth + mapOffset;

      mainPin.style.left = evt.pageX - mapOffset + 'px';
      mainPin.style.top = evt.pageY + 'px';

      if (evt.pageY < MIN_Y_COORD) {
        mainPin.style.top = MIN_Y_COORD + 'px';
      } else if (evt.pageY > MAX_Y_COORD) {
        mainPin.style.top = MAX_Y_COORD + 'px';
      }

      if (evt.pageX < mapOffset) {
        mainPin.style.left = '0';
      } else if (evt.pageX > maxXCoord) {
        mainPin.style.left = mapWidth - window.PinSizes.WIDTH + 'px';
      }

    };

    var onMainPinMouseup = function () {
      findPinPosition();
      document.removeEventListener('mouseup', onMainPinMouseup);
      document.removeEventListener('mousemove', onMainPinMousemove);
    };

    document.addEventListener('mousemove', onMainPinMousemove);
    document.addEventListener('mouseup', onMainPinMouseup);
  };

  var onMainPinEnterKeydown = function (evt) {
    if (evt.keyCode === window.KeyCodes.ENTER) {
      onMainPinMousedown();
    }
  };

  mainPin.addEventListener('mousedown', onMainPinMousedown);
  mainPin.addEventListener('keydown', onMainPinEnterKeydown);

  // экспорт

  window.form = form;
  window.map = map;

})();
