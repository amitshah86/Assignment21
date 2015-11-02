import $ from 'jquery';

const APP_ID = 'rcLTV7TMX02c3JCZnkXCX6j9kQ0J7KwwFomXIrBN';
const API_KEY = 'NBL5CBxO87KFB0QkMuMmNpmG1piAqwG3qrjXgI2O';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});