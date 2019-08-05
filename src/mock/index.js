import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

// Mock.mock(/\/index\/getUserInfo/, { name: 'Gavin' })
Mock.mock('http://localhost:3000/index/getUserInfo', getUserInfo)

Mock.setup({
  timeout: 500
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'banner']
    return this.pick(fruit)
  }
})

export default Mock
