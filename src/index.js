import debounce from '../node_modules/lodash.debounce';

import { defaults, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/BrightTheme.css';
import './main.scss';
defaults.delay = 3000;


const input = document.querySelector('#searchCountry');
const container = document.querySelector('.containerCountry');

let country = '';

function searchCountry() {
  container.innerHTML = '';
  country = input.value;
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 1) {
        const oneCountry = data.map(element => {
          const cardCountry = `<h2 data-description="name">${element.name}</h2><div class="content"><div class="textcontent"><p data-description="capital"><span>Capital: </span>${element.capital}</p><p data-description="population"><span>Population: </span>${element.population}</p><ul data-description="languages"><span>Languages: </span></ul></div> <img src="${element.flag}"></div>`;
          container.insertAdjacentHTML('afterbegin', cardCountry);

          const addLang = element.languages.forEach(lang => {
            const point = document.createElement('li');
            point.textContent = lang.name;
            container
              .querySelector('[data-description ="languages"]')
              .append(point);
          });
        });
      }
      if (data.length > 2 && data.length <= 10) {
        const list = document.createElement('ul');
        const listCountries = data.map(element => {
          const item = document.createElement('li');
          item.textContent = element.name;
          list.append(item);
        });
        container.append(list);
      }
      if (data.length > 10) {
        const myError = error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      }
    });
}

input.addEventListener('input', debounce(searchCountry, 500));
