/*
create by YOU
*/
<template>
  <div class="wrapper">
    <div class="body">
      <div class="head">
        <div class="eyes">
          <div class="left-eye"></div>
          <div class="right-eye"></div>
        </div>
        <div class="ear"></div>
      </div>
      <div class="leg leg-1">
        <div class="foot"></div>
      </div>
      <div class="leg leg-2">
        <div class="foot"></div>
      </div>
      <div class="leg leg-3">
        <div class="foot"></div>
      </div>
      <div class="leg leg-4">
        <div class="foot"></div>
      </div>
      <div class="tail"></div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    beforeRouteEnter (to, from, next) {
      console.log(from)
      if (confirm('next?')) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  time = 2s 1.5s
  @keyframes body
    0%
      transform: translate(0, 5px)
    25%
      transform: translate(0, 0)
    50%
      transform: translate(0, 5px)
    75%
      transform: translate(0, 0)
    100%
      transform: translate(0, 5px)

  @keyframes leg-first
    0%
      transform: rotate(-20deg) translate(10px, -10px) scale(1, 0.9)
    25%
      transform: rotate(0deg) translate(0, 0) scale(1, 1)
    50%
      transform: rotate(20deg) translate(-10px, -3px) scale(1, 1.1)
    75%
      transform: rotate(0deg) translate(0, -16px) scale(1, 0.95)
    100%
      transform: rotate(-20deg) translate(10px, -10px) scale(1, 0.9)

  @keyframes leg-after
    0%
      transform: rotate(20deg) translate(-10px, -3px) scale(1, 1.1)
    25%
      transform: rotate(0deg) translate(0, -16px) scale(1, 0.95)
    50%
      transform: rotate(-20deg) translate(10px, -10px) scale(1, 0.9)
    75%
      transform: rotate(0deg) translate(0, 0) scale(1, 1)
    100%
      transform: rotate(20deg) translate(-10px, -3px) scale(1, 1.1)

  @keyframes foot-first
    0%
      transform: rotate(20deg) scale(1, 1.1)
    25%
      transform: rotate(0deg) scale(1, 0.9)
    50%
      transform: rotate(-20deg) scale(1, 0.9)
    75%
      transform: rotate(0deg) scale(1, 1.1)
    100%
      transform: rotate(20deg) scale(1, 1.1)

  @keyframes foot-after
    0%
      transform: rotate(-20deg) scale(1, 0.9)
    25%
      transform: rotate(0deg) scale(1, 1.1)
    50%
      transform: rotate(20deg) scale(1, 1.1)
    75%
      transform: rotate(0deg) scale(1, 0.9)
    100%
      transform: rotate(-20deg) scale(1, 0.9)

  .wrapper
    psoition: relative
    width: 600px
    height: 600px
    .body
      position: absolute
      left: 200px
      top: 300px
      width: 200px
      height: 100px
      border: solid 1px #ff9494
      border-radius: 80px 50px 50px 50px
      background: #ffefef
      animation: body time infinite
      &:after
        content: ''
        position: absolute
        left: -1px
        top: -1px
        width: 200px
        height: 100px
        border: solid 1px #ff9494
        border-radius: 80px 50px 50px 50px
        background: #ffefef
        z-index: 0
      .head
        position: absolute
        right: -40px
        top: -20px
        width: 80px
        height: 50px
        border: solid 1px #ff9494
        border-radius: 40px 80px 10px 50px
        background: #ffefef
        overflow: hidden
        z-index: 100
        .eyes
          position: absolute
          right: -6px
          top: 10px
          width: 46px
          height: 20px
          border-radius: 20px
          background: #dfdfdf
          .left-eye
            position: absolute
            right: 8px
            top: 2px
            width: 14px
            height: 14px
            border-radius: 7px
            background: #133131
          .right-eye
            position: absolute
            left: 8px
            top: 2px
            width: 14px
            height: 14px
            border-radius: 7px
            background: #133131
      .leg
        border-style: solid
        border-width: 0 1px 1px 1px
        border-color: #ff9494
        .foot
          position: absolute
          left: -5px
          bottom: -20px
          width: 40px
          height: 30px
          border: solid 1px #ff9494
          border-radius: 40px 60px 20px 20px
          background: #ffefef
      .leg-1
        position: absolute
        left: 10px
        top: 80px
        width: 30px
        height: 70px
        border-radius: 80px 50px 20px 20px
        background: #ffefef
        z-index: 100
        animation: leg-after time infinite
        .foot
          animation: foot-after time infinite
      .leg-2
        position: absolute
        left: 20px
        top: 70px
        width: 30px
        height: 70px
        border-radius: 80px 50px 20px 20px
        background: #ffefef
        z-index: -100
        animation: leg-first time infinite
        .foot
          animation: foot-first time infinite
      .leg-3
        position: absolute
        right: 10px
        top: 80px
        width: 30px
        height: 70px
        border-radius: 80px 50px 20px 20px
        background: #ffefef
        z-index: 100
        animation: leg-first time infinite
        .foot
          animation: foot-first time infinite
      .leg-4
        position: absolute
        right: 20px
        top: 70px
        width: 30px
        height: 70px
        border-radius: 80px 50px 20px 20px
        background: #ffefef
        z-index: -100
        animation: leg-after time infinite
        .foot
          animation: foot-after time infinite

</style>
