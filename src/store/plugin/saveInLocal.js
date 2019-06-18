export default store => {
  console.log('store init')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    // 提交了mutation后出发，动态出则module不会触发
    console.log('store subscribe')
    localStorage.state = JSON.stringify(state)
  })
}
