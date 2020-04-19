import { obj2str } from './tool'

type HttpMethods = 'get' | 'GET' | 'post' | 'POST'

type FunType = (api: string, method: HttpMethods, data?: any) => Promise<any>

interface IResponse {
  status: 1 | 2,
  data: any,
  message: string,
  [key: string]: any
}

/**
 * 获取数据的工具类方法
 * @param url : 路由名称
 * @param httpParams : 请求参数
 */
const fetchData: FunType = (url: string, method: HttpMethods, httpParams?: any) => {
  return new Promise((resolve, reject) => {
    let data: any;
    if (method.toLowerCase() === 'get') {
      data = { method: 'GET' }
      httpParams && (url = `${url}?${obj2str(httpParams)}`)
    } else { // POST类请求
      data = {
        method: 'POST',
        body: JSON.stringify(httpParams),
        headers: { 'content-type': 'application/json', },
      }
    }
    fetch(url, data).then(res => res.json())
      .then((response: IResponse) => {
        if (response.status === 1) {
          resolve(response.data)
        } else {
          alert('出错了')
        }
      }).catch(err => {
        alert('出错了')
        reject(err)
      })
  })
}

export default fetchData