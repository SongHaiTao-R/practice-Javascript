// 手写new实例化的过程
function Person(name, age) {
  this.name = name
  this.age = age
  this.getName = function() {
    return this.name
  }
}
Person.prototype.getColor = () => {
  return this.age
}
new Person('Tom', 11)

/**
 * new的过程做了什么事？
 * 1 生成了一个新对象
 * 2 将函数内this指向新创建的对象
 * 3 将person对象的__proto__属性指向Person的prototype属性
 */

// 实现
function createNew(Fun, name, age) {
  const result = {}
  Fun.apply(result, [name, age])
  result.__proto__ = Fun.prototype
  return result
}

const person1 = createNew(Person, 'Tom', 11)
const person2 = createNew(Person, 'Mary', 13)
console.log('person1', person1)
console.log('person2', person2)