const BASE_URL = 'https://restcountries.eu/rest/v2/name/';
import { error } from '@pnotify/core';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}`)
    .then(response => {
      if (response.status === 404) {
        return error({
          text: 'Unfortunately the country name you entered is not correct!',
        });
      } if (response.ok) {
          return response.json();
      }
    })
}

export default { fetchCountries };
