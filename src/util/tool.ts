interface IObj {
  [key: string]: any
}

type Tobj2str = (obj: IObj) => string

type IGetActions = (obj: IObj) => Array<string>

/**
 * 把对象转化为字符串的形式进行表示
 * @param obj ： 需要进行转换的对象参数
 */
export const obj2str: Tobj2str = (obj: IObj) => {
  const keys = Object.keys(obj)
  const result: any[] = []
  keys.forEach(key => {
    result.push(`${key}=${obj[key]}`)
  })
  return result.join('&')
}

/**
 * 抽离出action的列表数据
 * @param obj : 需要进行转换的对象参数
 */
export const getActions: IGetActions = (obj: IObj) => {
  const keys = Object.keys(obj)
  const result: string[] = []
  keys.forEach(key => {
    result.push(obj[key])
  })
  return result
}