//实现简单vue3的响应式
const data = { // 基础数据
  text: 'hello world'
}

const bucket = new Set() // 存储副作用函数的Set结构

const obj = new Proxy(data, { // 代理基础数据对象
  get(target, key) { // 拦截读取
    debugger
    bucket.add(effect)
    return target[key]
  },
  set(target, key, newValue) { // 拦截设置
    debugger
    target[key] = newValue
    bucket.forEach(fn => fn())
    return true
  }
})

function effect() { // 副作用函数
  document.body.innerText = obj.text
}

effect()

setTimeout(() => {
  obj.text = 'hello vue'
}, 2000)