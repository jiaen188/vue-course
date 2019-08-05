import Mock from 'mockjs'

// export const getUserInfo = (options) => {
//   console.log('mock options', options)
//   return { name: 'Gavin' }
// }

const Random = Mock.Random

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
    'reg': /[1-9][a-z]/,
    email: Random.email(),
    email2: Mock.mock('@email'), // 占位符
    range: Random.range(3, 11, 2),
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm:ss'),
    dateTime: Random.datetime('yyyy-MM-dd hh:mm:ss'),
    now: Random.now('hour', 'yyyy-MM-dd hh:mm:ss'),
    img: Random.image('100x200', '#00ff00', '#fff', 'png', 'jiaen'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('短发范德萨发', 2, 5),
    cname: Random.cname(),
    email3: Random.email('gavin.com'),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip(),
    upperFirstletter: Random.capitalize('gavin'),
    pick: Random.pick(1, 2, 3, 4),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    fruit: Random.fruit(),
    fruit2: '@fruit'
  }
  let i = 3
  let arr = []
  while (i--) {
    arr.push(template)
  }
  return Mock.mock(arr)
}
