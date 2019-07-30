import Mock from 'mockjs'
import { getUserInfo } from './response/user'
// Mock.mock(/\/index\/getUserInfo/, { name: 'Gavin' })
Mock.mock('http://localhost:3000/index/getUserInfo', getUserInfo)

export default Mock
