let doc = document

function $id (id) {
  return doc.getElementById(id)
}

function $class (name) {
  return doc.getElementsByClassName(name)
}

function loop (begin, length, fuc) {
  for (let i = begin; i < length; i++) {
    if (fuc(i)) break
  }
}

function on (action, selector, callback) {
  doc.addEventListener(action, function (e) {
    if (selector === e.target.tagName.toLowerCase() || selector === e.target.className || selector === e.target.id) {
      callback(e)
    }
  })
}

export class Multipicker {
  constructor (config) {
    this.input = config.input
    this.container = config.container
    this.jsonData = config.jsonData
    this.success = config.success
    this.confirmText = config.confirmText || 'Submit'
    this.cancelText = config.cancelText || 'Cancel'
    this.ulCount = 0 // 记录上一次的
    this.ulIdx = 0 // ul下标计数器,前一次的计数器
    this.ulDomArr = [] // ul的dom元素,【a】
    this.idxArr = [] // 更新后的ul的下标 【a】
    this.jsonArr = [] // 用来存储每个ul的li中显示的arr【a】
    this.liHeight = 40
    this.maxHeight = [] // 每个ul的最大高度【a】
    this.distance = [] // transition的移动位置【a】
    this.start = {
      Y: 0,
      time: ''
    }
    this.move = {
      Y: 0,
      speed: []
    }
    this.end = {
      Y: 0,
      status: true
    }
    this.resultArr = []
    this.initDomFuc()
    this.initReady(0, this.jsonData[0])
    this.initBinding()
  }

  generateArrData (targetArr) {
    let tempArr = []
    loop(0, targetArr.length, function (i) {
      tempArr.push({
        'id': targetArr[i].id,
        'value': targetArr[i].value
      })
    })
    return tempArr
  }

  checkArrDeep (parent) { // 需要改变
    let _this = this
    if ('child' in parent && parent.child.length > 0) {
      // 初始化jsonArr。每一个ul对应的数组并迭代
      _this.jsonArr.push(_this.generateArrData(parent.child))
      _this.checkArrDeep(parent.child[0])
    }
    _this.idxArr.push(this.ulIdx++)
  }

  insertLiArr (targetUl, arr) {
    let html = ''
    let nullObj = {
      id: '-99',
      value: ''
    }
    arr.unshift(nullObj, nullObj)
    arr.push(nullObj, nullObj)
    loop(0, arr.length, function (i) {
      html += '<li data-id="' + arr[i].id + '">' + arr[i].value + '</li>'
    })
    targetUl.innerHTML = html
  }

  initDomFuc () {
    let _this = this
    let html = ''
    html += `
      <div class="multi-picker-bg" id="multi-picker-bg-${_this.container}">
        <div class="multi-picker-container" id="multi-picker-container-${_this.container}">
          <div class="multi-picker-btn-box">
            <div class="multi-picker-btn" id="multi-picker-btn-cancel">${_this.cancelText}</div>
            <div class="multi-picker-btn" id="multi-picker-btn-save-${_this.container}">${_this.confirmText}</div>
          </div>
          <div class="multi-picker-content">
            <div class="multi-picker-up-shadow"></div>
            <div class="multi-picker-down-shadow"></div>
            <div class="multi-picker-line"></div>
          </div>
        </div>
      </div>`
    $id(_this.container).innerHTML = html
    _this.jsonArr.push(_this.generateArrData(_this.jsonData))
  }

  initReady (idx, target) {
    let _this = this
    this.ulIdx = 0
    this.idxArr.length = idx
    _this.jsonArr.length = idx + 1
    _this.checkArrDeep(target) // 查看某【对象】的深度
    // 取到class='multi-picker-content',可以在里面插入ul
    let parentNode = $id('multi-picker-container-' + _this.container).children[1]
    let tempMax = _this.ulCount <= _this.idxArr.length ? _this.ulCount : _this.idxArr.length
    loop(idx + 1, tempMax, function (i) {
      let $picker = $id('multi-picker-' + _this.container + '-' + i)
      _this.insertLiArr($picker, _this.jsonArr[i])
      _this.distance[i] = 0
      $picker.style.transform = 'translate3d(0, 0, 0)'
      $picker.style.webkitTransform = 'translate3d(0, 0, 0)'
    })

    if (_this.ulCount <= _this.idxArr.length) {
      // 如果不足,则插入ul,从0开始计数
      loop(_this.ulCount, _this.idxArr.length, function (i) {
        let newPickerDiv = document.createElement('div')
        newPickerDiv.setAttribute('class', 'multi-picker')
        newPickerDiv.innerHTML = '<ul id="multi-picker-' + _this.container + '-' + i + '"></ul>'
        parentNode.insertBefore(newPickerDiv, parentNode.children[parentNode.children.length - 3])
        let tempDomUl = $id('multi-picker-' + _this.container + '-' + i)
        _this.ulDomArr.push(tempDomUl)
        _this.distance.push(0)
        // 插入li
        _this.insertLiArr(tempDomUl, _this.jsonArr[i])
        // 绑定事件
        let tempArray = _this.jsonArr[i]
        tempDomUl.addEventListener('touchstart', function (event) {
          _this.touch(event, _this, tempDomUl, tempArray, i)
        }, false)
        tempDomUl.addEventListener('touchmove', function (event) {
          _this.touch(event, _this, tempDomUl, tempArray, i)
        }, false)
        tempDomUl.addEventListener('touchend', function (event) {
          _this.touch(event, _this, tempDomUl, tempArray, i)
        }, false)
      })
    } else { // 当上一次的ulCount 比当前ul的总数来的大的时候要清除子dom
      for (let j = _this.ulCount - 1; j > _this.idxArr.length - 1; j--) {
        let oldPicker = $class('multi-picker')[j]
        oldPicker.parentNode.removeChild(oldPicker)
        _this.ulDomArr.pop()
        _this.distance.pop()
      }
    }
    // 统一重新设置宽度和ul的maxHeight
    _this.maxHeight.length = 0
    _this.resultArr.length = 0
    loop(0, _this.idxArr.length, function (i) {
      $class('multi-picker')[i].style.width = 100 / _this.idxArr.length + '%'
      _this.maxHeight.push($id('multi-picker-' + _this.container + '-' + i).offsetHeight)
      _this.resultArr.push({
        'id': _this.jsonArr[i][_this.distance[i] / _this.liHeight + 2].id,
        'value': _this.jsonArr[i][_this.distance[i] / _this.liHeight + 2].value
      })
    })
    _this.ulCount = _this.idxArr.length
  }

  initBinding () {
    let _this = this
    let bg = $id('multi-picker-bg-' + _this.container)
    let container = $id('multi-picker-container-' + _this.container)
    let body = doc.body
    on('touchstart', _this.input, function () {
      bg.classList.add('multi-picker-bg-up')
      container.classList.add('multi-picker-container-up')
      body.classList.add('multi-picker-locked')
    }, false)
    on('touchstart', 'multi-picker-btn-save-' + _this.container, function () {
      _this.success(_this.resultArr)
      bg.classList.remove('multi-picker-bg-up')
      container.classList.remove('multi-picker-container-up')
      body.classList.remove('multi-picker-locked')
    }, false)
    on('touchstart', 'multi-picker-bg-' + _this.container, function () {
      bg.classList.remove('multi-picker-bg-up')
      container.classList.remove('multi-picker-container-up')
      body.classList.remove('multi-picker-locked')
    }, false)
    on('touchstart', 'multi-picker-btn-cancel', function () {
      bg.classList.remove('multi-picker-bg-up')
      container.classList.remove('multi-picker-container-up')
      body.classList.remove('multi-picker-locked')
    }, false)
  }

  checkRange (idx) {
    let _this = this
    let tempObj = _this.jsonData
    let targetIdx = 0
    loop(0, idx + 1, function (i) {
      targetIdx = _this.distance[i] / _this.liHeight
      tempObj = i === 0 ? tempObj[targetIdx] : tempObj.child[targetIdx]
    })
    _this.initReady(idx, tempObj)
  }

  initPosition (dis, max, idx) {
    dis = dis < 0 ? 0 : dis
    dis = dis > max ? max : dis
    let sub = dis % this.liHeight
    if (sub < this.liHeight / 2) {
      this.distance[idx] = dis - sub
    } else {
      this.distance[idx] = dis + (this.liHeight - sub)
    }
    return this
  }

  initSpeed (arr, dir, max, idx) {
    let letiance = 0 // 求方差
    let sum = 0
    let rate = 0
    for (let i in arr) {
      sum += arr[i] - 0
    }
    for (let j in arr) {
      letiance += (arr[j] - (sum / arr.length)) * (arr[j] - (sum / arr.length))
    }
    if ((letiance / arr.length).toFixed(2) > 0.1) { // 如果方差的结果大于.1 用来控制速度变化幅度
      rate = max > this.liHeight * 15 ? dir * 2 : 0 // 如果数组长度是大于15的才会有加速度出现
      this.initPosition(this.distance[idx] + rate, max - this.liHeight * 5, idx)
      this.move.speed[0] = 0.2
    } else {
      this.initPosition(this.distance[idx], max, idx)
      this.move.speed[0] = this.move.speed[0] > 0.2 ? 0.2 : this.move.speed[0]
    }
  }

  touch (event, that, $picker, array, idx) {
    event = event || window.event
    event.preventDefault()
    switch (event.type) {
      case 'touchstart':
        if (that.end.status) {
          that.end.status = !that.end.status
          event.preventDefault()
          that.move.speed = []
          that.start.Y = event.touches[0].clientY
          that.start.time = Date.now()
        }
        break
      case 'touchend':
        that.end.Y = Math.abs(event.changedTouches[0].clientY)
        let tempDis = that.distance[idx] + (that.start.Y - that.end.Y)
        let temp = that.distance[idx]
        that.distance[idx] = tempDis < 0 ? 0 : (tempDis < that.maxHeight[idx] - this.liHeight * 5 ? tempDis : that.maxHeight[idx] - this.liHeight * 5)
        that.initSpeed(that.move.speed, that.start.Y - that.end.Y, that.maxHeight[idx], idx)
        $picker.style.transform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)'
        $picker.style.webkitTransform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)'
        $picker.style.transition = 'transform ' + that.move.speed[0] + 's ease-out'
        $picker.style.webkitTransition = '-webkit-transform ' + that.move.speed[0] + 's ease-out'
        // 设置后续ul
        if (temp !== that.distance[idx]) that.checkRange(idx)
        setTimeout(function () {
          that.end.status = true
        }, that.move.speed[0] * 1000)
        break
      case 'touchmove':
        event.preventDefault()
        that.move.Y = event.touches[0].clientY
        let offset = that.start.Y - that.move.Y
        if (that.distance[idx] === 0 && offset < 0) { // 如果滑动move在顶部
          $picker.style.transform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)'
          $picker.style.webkitTransform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)'
          $picker.style.transition = 'transform 0.2s ease-out'
          $picker.style.webkitTransition = '-webkit-transform 0.2s ease-out'
        } else {
          $picker.style.transform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)'
          $picker.style.webkitTransform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)'
        }
        if (Math.abs(offset).toFixed(0) % 5 === 0) {
          let time = Date.now()
          that.move.speed.push((Math.abs(offset) / (time - that.start.time)).toFixed(2))
        }
        break
    }
  }
}
