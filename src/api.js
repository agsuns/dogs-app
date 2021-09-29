export const API_URL = 'https://dogsapi.origamid.dev/json';
export const TOKEN_POST = (body) => {
  return {
    endpoint: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const GET_USER = (token) => {
  return {
    endpoint: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};
