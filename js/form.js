'use strict';

(function () {
  // валидация формы

  var selectCapacity = window.form.querySelector('#capacity');

  var selectRooms = window.form.querySelector('#room_number');

  var isCapacityValid = function (capacityValue, roomsValue) {
    var selectedRoomsData = window.RoomsCapacity[roomsValue];
    var currentAllowedGuests = selectedRoomsData.allowedGuests;

    var isValid = currentAllowedGuests.some(function (el) {
      return el === parseInt(capacityValue, 10);
    });

    return isValid;
  };

  var validateCapacity = function () {
    var capacityValue = selectCapacity.value;
    var roomsValue = selectRooms.value;

    var isValid = isCapacityValid(capacityValue, roomsValue);

    var textValidation = isValid ? '' : 'неверное количество гостей';

    selectCapacity.setCustomValidity(textValidation);

    selectCapacity.reportValidity();
  };

  selectCapacity.addEventListener('change', validateCapacity);

  // функция синхронизации комнат и гостей функция которая наобработчике события
  // чендж для селекта румс при изменении селекта
  // румс должно изменятьсязначение селекта капасити если оно не правильное используется поле дефолт


  var syncRoomsWithCapacity = function () {
    var capacityValue = selectCapacity.value;
    var roomsValue = selectRooms.value;

    var isValid = isCapacityValid(capacityValue, roomsValue);

    if (!isValid) {

      var selectedRoomsData = window.RoomsCapacity[roomsValue];
      var currentDefolt = selectedRoomsData.default;

      selectCapacity.value = currentDefolt;
    }
  };

  selectRooms.addEventListener('change', syncRoomsWithCapacity);

  // валидация поля минимальная цена
  // создать объект соотношения типа жилья и минимальной цены

  var selectType = window.form.querySelector('#type');
  var inputPrice = window.form.querySelector('#price');


  var syncPrice = function () {

    var houseTypeValue = selectType.value;
    var selectMinPrice = window.MinHouseTypePrices[houseTypeValue];

    if (selectMinPrice !== undefined) {
      inputPrice.min = selectMinPrice;
      inputPrice.placeholder = String(selectMinPrice);
    }
  };

  selectType.addEventListener('change', syncPrice);

  // синхронизация поля даты вьезда и выезда

  var selectTimeIn = window.form.querySelector('#timein');
  var selectTimeOut = window.form.querySelector('#timeout');


  var syncTime = function (evt) {

    if (selectTimeIn.value !== evt.target.value) {
      selectTimeIn.value = evt.target.value;
    }
    if (selectTimeOut.value !== evt.target.value) {
      selectTimeOut.value = evt.target.value;
    }
  };

  selectTimeIn.addEventListener('change', syncTime);
  selectTimeOut.addEventListener('change', syncTime);

  // экспорт

})();
