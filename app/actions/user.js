import * as TYPES from './types'
/*
 * 其它的常量
 */
export const Names = {
  BOY: 'Joe',
  GIRL: 'Jenny',
}

/*
 * action 创建函数
 */
export function changeName(text){
  return {
    type: TYPES.CHANGE_NAME,
    text: text,
  }
}