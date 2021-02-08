function getTime() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  const tgl = date.getDate();
  const mon = date.getMonth();
  if (hour <= 9) {
    hour = '0' + hour;
  }
  if (min <= 9) {
    min = '0' + min;
  }
  if (sec <= 9) {
    sec = '0' + sec;
  }

  return `${hour}:${min}:${sec} - ${tgl} ${months[mon]}`;
}

module.exports = {
  getTime,
}