/**
 * Problem: https://leetcode.com/problems/plus-one/
 * Difficulty: Easy
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
  // BigInt literals：數字+小寫n(預設十進位)ex: 10n
  // 0b 二進位
  // 0o 八進位
  // 0x 十六進位

  // toString()方法用來將數字轉型成字串。
  // 語法：
  // toString([radix]) 
  // radix參數是介於2~36的整數，用來指定基數/進位，預設是10。

  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  console.log("aBin:", BigInt(aBin), "+ bBin:", BigInt(bBin), "=", sum, "=" ,sum.toString(2));
  return sum.toString(2);
}

addBinary("11", "1");