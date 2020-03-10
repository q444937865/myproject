const gxr = {
  // 将obj中的key列成数组
  getObjKeys: obj => {
    let a = [];
    for (a[a.length] in obj);
    return a;
  },
  // 随机数组 默认0-1
  randomArr: (len = 10, min = 0, max = 1, dot = 1) => {
    return Array.from({ length: len }).map((t, i) =>
      Number((Math.random() * (max - min + 1) + min).toFixed(dot))
    );
  },
  // 生成1-10
  orderArr: (interval = 1, start = 1, len = 10) => {
    return Array.from({ length: len }).map((t, i) => i * interval + start);
  },
  sum: (a, b) => {
    return (a * 1e10 + b * 1e10) / 1e10;
  },
  // 获取?后url参数
  getUrlParams() {
    let url = window.location.href;
    if (url) {
      let search = url.split("?");
      if (search[1]) {
        let params = search[1].split("&");
        let data = {};
        params.forEach(item => {
          let list = item.split("=");
          data[list[0]] = list[1];
        });
        return data;
      }
    }
  },
  // 数组对象排序
  // arr.sort(compair('age'))
  compair(propertyName, type = 1) {
    return function(obj1, obj2) {
      var value1 = obj1[propertyName];
      var value2 = obj2[propertyName];
      if (value2 > value1) {
        return -1 * type;
      } else if (value2 < value1) {
        return 1 * type;
      } else {
        return 0;
      }
    };
  },
  // moment时间转成0点
  momentSetTime(date) {
    date.set({
      month: 0,
      date: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return date;
  },
  deepClone(target) {
    // 定义一个变量
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === "object") {
      // 如果是一个数组的话
      if (Array.isArray(target)) {
        result = []; // 将result赋值为一个数组，并且执行遍历
        for (let i in target) {
          // 递归克隆数组中的每一项
          result.push(deepClone(target[i]));
        }
        // 判断如果当前的值是null的话；直接赋值为null
      } else if (target === null) {
        result = null;
        // 判断如果当前的值是一个RegExp对象的话，直接赋值
      } else if (target.constructor === RegExp) {
        result = target;
      } else {
        // 否则是普通对象，直接for in循环，递归赋值对象的所有值
        result = {};
        for (let i in target) {
          result[i] = deepClone(target[i]);
        }
      }
      // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
      result = target;
    }
    // 返回最终结果
    return result;
  }
};

export default gxr;
