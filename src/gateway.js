import moment from 'moment';
const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';

export const fetchFlights = (date) => {
  const formattedDate = moment(new Date(date)).format('DD-MM-YYYY')
  return fetch(`${baseUrl}/${formattedDate}`).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Can\'t display flights');
});
}