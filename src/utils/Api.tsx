import { startLoader, stopLoader } from "@/features/loader-redux/loader.r";
import { store } from "@/features/store";
import { toast } from 'react-hot-toast';

/*eslint no-unused-vars: ["error", { "args": "none" }]*/
const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'DOWNLOAD';


export function useApi() {
    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE'),
        patch: request('PATCH'),
        download: request('DOWNLOAD'),
    };

    // handling api response for all status codes
    async function handleResponse(res: any) {
        let response = await res.then((result: any) => result);
        if ([200, 201]?.includes(response.statusCode) && response.message) {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
        store.dispatch(stopLoader());
        return response;
    }

    function request(method: methodType) {
        return async (url: any, body?: any, header: any = {}) => {
            let auth: any = {};

            // if (!AUTH_URL_VALIDATE(url)) {
            //     auth = await authHeader(authData);
            // }
            const requestOptions: any = {
                method,
                ...(method === 'DOWNLOAD' && { method: 'GET' }),
                headers: {
                    ...auth,
                    ...header,
                    // 'x-api-key': process.env.REACT_APP_X_API_KEY,
                },
            };

            requestOptions.headers['Content-Type'] = 'application/json';
            if (body) {
                requestOptions.body = JSON.stringify(body);
            }
            try {
                store.dispatch(startLoader());
                return fetch(`${baseUrl}/${url}`, requestOptions)
                    .then(res => {

                        // if (res.status === HTTP_STATUS.NOT_AUTHORIZED) {
                        //     if (url.includes(AUTHENTICATION.LOGIN_API)) {
                        //         return handleResponse(res.json());
                        //     }
                        //     localStorage.removeItem('persist:root');

                        // } else {
                        //     if (method === 'DOWNLOAD') {
                        //         return res.blob();
                        //     }

                        return handleResponse(res.json());
                        // }
                    })
                    .catch(err => {
                        store.dispatch(stopLoader());
                        console.log(err);
                    });
            } catch (e) {
                console.log('e', e);
            }
        };
    }
    async function authHeader() {
        return {
            // Authorization: await validateTokenExpiryAndGetToken(authData, request),
            Authorization: true,
        };
    }
}
