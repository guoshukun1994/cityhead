import Axios from './index';

//验证token是否有效
export const checkToken = (token) => {
  return Axios({
    url:
      'https://health.hangzhou.gov.cn/health2/user//api/v1/oauth2/checkToken',
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'user-token': token,
    },
    // data,
  });
};

//更新token  暂时没用到
export const refresh = (token) => {
  return Axios({
    url:
      'https://health.hangzhou.gov.cn/health2/user/api/v1/oauth2/token/refresh',
    method: 'post',
    headers: {
      'content-type': 'application/json',
      'user-token': token,
    },
    // data,
  });
};
