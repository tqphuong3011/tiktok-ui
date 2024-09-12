import * as request from '~/utils/httpRequest';

// XMLHttpRequest call API

// eslint-disable-next-line
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

export const getUsers = async (q, type = 'less') => {
     try {
          const res = await request.get('users/search', {
               params: {
                    q: characters.charAt(Math.floor(Math.random() * charactersLength)),
                    type,
               },
          });
          return res.data;
     } catch (err) {
          console.error(err);
     }
};
