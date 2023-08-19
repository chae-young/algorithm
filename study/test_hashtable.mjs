import { HashTable } from "./HashTable.mjs";

let hashtable = new HashTable();

hashtable.set(1,'이운재1')
hashtable.set(4,'이운재2')
hashtable.set(20,'이운재3')
hashtable.set(6,'이운재4')
hashtable.set(22,'이운재5')
hashtable.set(21,'이운재6')
hashtable.set(5,'이운재7')
hashtable.set(10,'이운재8')
hashtable.set(8,'이운재9')
hashtable.set(9,'이운재10')
hashtable.set(14,'이운재11')

console.log(`1: ${hashtable.get(1)}`)
hashtable.remove(1)
console.log(`1: ${hashtable.get(1)}`)
console.log(`1: ${hashtable.get(21)}`)