const appId = '617e410f';
const apiBaseUrl = 'https://api.justgiving.com';

const fetchConfig = {
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
};

export const getDetails = (charityId) => {
  const url = `${apiBaseUrl}/${appId}/v1/charity/${charityId}`;
  return fetch(url, fetchConfig).then(response => {
    return response.json().then(json => {
      return { response, data: json };
    });
  });
};

export const getDonations = (charityId) => {
  const url = `${apiBaseUrl}/${appId}/v1/charity/${charityId}/donations`;
  return fetch(url, fetchConfig).then(response => {
    return response.json().then(json => {
      return { response, data: json };
    });
  });
};
