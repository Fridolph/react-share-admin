export default {
  formatDate(timestamp) {
    if (!timestamp) return ''
    let date = new Date(timestamp)

    return `${date.getFullYear()}-${pad0(date.getMonth() + 1)}-${pad0(date.getDate())} ${pad0(date.getHours())}:${pad0(date.getMinutes())}:${pad0(date.getSeconds())}`
  }
}

function pad0(num) {
  if (num < 10) {
    return '0' + num
  }
  return num
}
