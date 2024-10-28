const addZero = (num) => {
  return num < 10 ? '0' + num : num
}

export const getDate = () => {
    const date = new Date();
    let year = date.getFullYear();
    let month = addZero(date.getMonth() + 1);
    let day = addZero(date.getDate());

    return `${year}年${month}月${day}日`
}

export const getTime = () => {
    const date = new Date();
    let hour = addZero(date.getHours());
    let minute = addZero(date.getMinutes());
    let second = addZero(date.getSeconds());

    return `${hour}:${minute}:${second}`
}