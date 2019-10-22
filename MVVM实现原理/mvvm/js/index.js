const em = new EventEmitter()

function Vue (options) {
  const data = options.data
  const rootEl = document.querySelector(options.el)

  // 你怎么知道数据中有 message？
  // this.message = data.message

  // 将参数 data 中的数据添加到实例中
  for (let key in data) {
    // this[key] = data[key]
    Object.defineProperty(this, key, {
      get () {
        console.log(key, '被访问了')
        return data[key]
      },
      set (value) {
        console.log(key, '被修改了')
        // 更新视图
        // 更新所有绑定了 key 的 DOM
        data[key] = value

        em.emit(key)
      }
    })
  }

  // 将 methods 中的成员挂载到 Vue 实例中
  for (let key in options.methods) {
    this[key] = options.methods[key]
  }

  // Object.defineProperty(this, 'message', {
  //   get () {},
  //   set () {}
  // })

  // Object.defineProperty(this, 'foo', {
  //   get () {},
  //   set () {}
  // })

  // Object.defineProperty(this, 'count', {
  //   get () {},
  //   set () {}
  // })

  const _this = this

  compile(rootEl.childNodes)

  function compile (childNodes) {
    // 遍历子节点
    childNodes.forEach(node => {
      if (node.nodeType === 3) {
        // 如果是文本节点，解析处理 {{}}
        // console.dir(node)

        // node.textContent = 

        const content = node.textContent

        const reg = /\{\{(.+)\}\}/
        const matches = reg.exec(content)

        if (matches) {
          const key = matches[1].trim()
          const value = _this[key]
          node.textContent = value

          // 订阅 key 的变化
          em.on(key, () => {
            console.log(`收到${key}改变的通知了`)

            // 更新 DOM
            node.textContent = _this[key]
          })
        }
        
        // if (文本内容使用了 {{}}) {
          // 把 {{ 数据名称 }} 替换为具体的数据
        // }
      } else {
        // 如果是元素节点，解析处理 v-xxx
        // Array.from 可以把一个伪数组装换为一个数组
        Array.from(node.attributes).forEach(attr => {
          if (attr.name === 'v-model') {
            node.value = _this[attr.value]
            // 订阅数据的变化
            em.on(attr.value, () => {
              node.value = _this[attr.value]
            })

            node.oninput = function () {
              _this[attr.value] = node.value
            }
          } else if (attr.name == 'v-if') {
          } else if (attr.name === 'v-show') {
          } else if (attr.name.startsWith('@')) {
            // startsWith：判断一个字符串是否是以指定字符串开头的，返回布尔值
            // node.onclick
            // node.oninput
            const eventName = attr.name.substr(1)
            node['on' + eventName] = function () {
              // 调用绑定的处理函数
              // _this.test()
              _this[attr.value]()
            }
          }
        })

        // 递归
        compile(node.childNodes)
      }
    })
  }
}

function EventEmitter () {
  this.callbackList = {}
}

EventEmitter.prototype.on = function (eventName, callback) {
  // 注册处理函数
  // on('a', 函数)
  // on('a', 函数)
  // on('b', 函数)

  // 如果没有a，就创建一个 a ，值是一个数组
  if (!this.callbackList[eventName]) {
    this.callbackList[eventName] = []
  }

  this.callbackList[eventName].push(callback)
}

EventEmitter.prototype.emit = function (eventName) {
  const list = this.callbackList[eventName]

  if (list) {
    list.forEach(callback => {
      callback()
    })
  }
}
