import * as request from '~/utils/httpRequest';

// XMLHttpRequest call API

// eslint-disable-next-line
export const search = async (q, type = 'less') => {
     try {
          const res = await request.get('users/search', {
               params: {
                    q,
                    type,
               },
          });
          return res.data;
     } catch (err) {
          console.error(err);
     }
};
