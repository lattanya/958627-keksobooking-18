'use strict';

(function () {

  var KeyCodes = {
    ENTER: 13,
    ESC: 27,
  };

  var PinSizes = {
    WIDTH: 65,
    HEIGHT: 87,
  };

  var HouseTypes = {
    palace: 'Дворец',
    flat: 'Квартира',
  };

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
  };

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

  var MinHouseTypePrices = {
    "bungalo": 0,
    "flat": 1000,
    "house": 5000,
    "palace": 10000,
  };

   // экспорт
   window.KeyCodes = KeyCodes;
   window.PinSizes = PinSizes;
   window.HouseTypes = HouseTypes;
   window.HouseCapacity = HouseCapacity;
   window.RoomsAmount = RoomsAmount;
   window.RoomsCapacity = RoomsCapacity;
   window.MinHouseTypePrices = MinHouseTypePrices;

})();


