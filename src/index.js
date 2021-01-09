import debounce from '../node_modules/lodash.debounce';

import { defaults, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/BrightTheme.css';
defaults.delay = 1000;

import './main.scss';

const refs = {
  input: document.querySelector('#searchCountry'),
  container: document.querySelector('.containerCountry'),
  country: '',
};

function onlyCountry(data) {
  const cardCountry = data.map(element => {
    const textContent = `<h2 data-description="name">${element.name}</h2><div class="content"><div class="textcontent"><p data-description="capital"><span>Capital: </span>${element.capital}</p><p data-description="population"><span>Population: </span>${element.population}</p><ul data-description="languages"><span>Languages: </span></ul></div> <img src="${element.flag}"></div>`;
    refs.container.insertAdjacentHTML('afterbegin', textContent);

    const listLang = element.languages.forEach(language => {
      const item = document.createElement('li');
      item.textContent = language.name;
      refs.container
        .querySelector('[data-description ="languages"]')
        .append(item);
    });
  });
}
function listCountries(data) {
  const list = document.createElement('ul');
  const items = data.map(element => {
    const item = document.createElement('li');
    item.textContent = element.name;
    list.append(item);
  });
  refs.container.append(list);
}

function searchCountry() {
  refs.container.innerHTML = '';
  refs.country = refs.input.value;
  fetch(`https://restcountries.eu/rest/v2/name/${refs.country}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 1) {
        onlyCountry(data);
        success({
          text: ' Your query is correct!',
        });
      }
      if (data.length > 2 && data.length <= 10) {
        listCountries(data);
        info({
          text: ' For more detailed information please specify the query!',
        });
      }
      if (data.length > 10) {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      }
    });
}

refs.input.addEventListener('input', debounce(searchCountry, 500));
