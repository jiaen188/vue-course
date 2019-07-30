import Mock from 'mockjs'

// export const getUserInfo = (options) => {
//   console.log('mock options', options)
//   return { name: 'Gavin' }
// }

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'Gavin',
    'name|5': 'gavin',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true, // true的概率 min/ (min+max)
    'obj|2': { a: 'aa', b: 'bb', c: 'cc' },
    'obj2|1-2': { a: 'aa', b: 'bb', c: 'cc' },
    'arr|2-4': [1, 2, 3],
    'arr2|2': [1, 2, 3],
    'func': () => 'this is created by funciton',
    'reg': /[1-9][a-z]/
  }
  let i = 3
  let arr = []
  while (i--) {
    arr.push(template)
  }
  return Mock.mock(arr)
}
