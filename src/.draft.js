function calculateHanoi(disksNumber, turnsSpeed) {
  let countMovers = 2 ** disksNumber - 1;
  let allTime = countMovers / turnsSpeed  * 3600;
  return {turns: countMovers, seconds:Math.floor(allTime)} ;
}
console.log(calculateHanoi(5, 4074));


/**
 * 1) вернуть минимальное количество ходов для решение
 * 
 * disksNumber - количество дисков
 * turnSpeed - скорость перемещения дисков (оборотов в час)
 * 2^n − 1 - формула подсчета движений
 * 
 */