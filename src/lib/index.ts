import { promisifyApi} from 'kait-common';

export interface I[CLASSNAME]Option extends ApiParams {
    /* 提示标题 */
    title?: string;
}

function kait[CLASSNAME](params: I[CLASSNAME]Option, callback?: any) {
    Kait.callHandler('KN.Window.[CLASSNAME]', params, function (response: IResponseData) {
        console.log('[CLASSNAME] - JS got response: ' + JSON.stringify(response));
        if (callback) {
            callback(response);
        }
    })
}

export const [FNNAME] = promisifyApi(kait[CLASSNAME])
