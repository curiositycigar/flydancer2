;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xunhuan-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M448.836 832.527l-52.642 0c-151.843-24.867-268.081-157.088-268.081-315.97 0-53.213 13.669-103.029 36.737-147.191l39.273 54.411c28.576 39.613 90.226 28.569 103.319-18.487l31.278-112.478 43.143-155.122c10.346-37.191-17.623-73.979-56.186-73.917l-152.09 0.211L58.399 64.152c-47.46 0.076-74.915 53.878-47.121 92.389l72.256 100.16C31.188 330.002 0.151 419.56 0.151 516.557c0 224.086 164.321 409.775 378.939 442.944 5.867 0.903 11.549 0.672 17.103-0.052l0 0.775 52.641 0c34.88 0 63.168-28.301 63.168-63.206l0-1.288C512.003 860.828 483.716 832.527 448.836 832.527zM1012.729 867.458l-72.264-100.142c52.348-73.313 83.384-162.885 83.384-259.869 0-224.085-164.308-409.782-378.938-442.957-5.861-0.904-11.55-0.667-17.104 0.07l0-0.788-52.636 0c-34.886 0-63.168 28.294-63.168 63.211l0 1.281c0 34.917 28.281 63.225 63.168 63.225l52.636 0c151.843 24.854 268.087 157.082 268.087 315.957 0 53.201-13.675 103.024-36.736 147.192l-39.268-54.437c-28.582-39.588-90.237-28.557-103.325 18.507l-31.278 112.472-43.149 155.147c-10.345 37.173 17.623 73.955 56.186 73.897l152.092-0.205 115.193-0.173C1013.068 959.777 1040.517 905.964 1012.729 867.458z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M449.024 832.512h-52.736c-152.064-25.088-268.288-157.184-268.288-315.904 0-53.248 13.824-102.912 36.864-146.944l39.424 54.272c28.672 39.424 90.112 28.672 103.424-18.432l31.232-112.64 43.008-155.136c10.24-37.376-17.408-73.728-56.32-73.728h-267.264c-47.616 0-74.752 53.76-47.104 92.16l72.192 100.352c-52.224 73.216-83.456 162.816-83.456 260.096 0 224.256 164.352 409.6 378.88 442.88 5.632 1.024 11.776 0.512 16.896 0v1.024h52.736c34.816 0 62.976-28.16 62.976-62.976v-1.536c0.512-35.328-27.648-63.488-62.464-63.488zM1012.736 867.328l-72.192-100.352C992.768 693.76 1024 604.16 1024 507.392c0-224.256-164.352-409.6-378.88-442.88-5.632-1.024-11.776-0.512-16.896 0v-1.024h-52.736c-34.816 0-62.976 28.16-62.976 62.976v1.536c0 34.816 28.16 62.976 62.976 62.976h52.736C779.776 216.064 896 348.672 896 507.392c0 53.248-13.824 102.912-36.864 146.944l-39.424-54.272c-28.672-39.424-90.112-28.672-103.424 18.432l-31.232 112.64-43.008 155.136c-10.24 37.376 17.408 73.728 56.32 73.728h267.264c47.616-0.512 74.752-54.272 47.104-92.672z" fill="" ></path>' +
    '' +
    '<path d="M554.496 349.184v263.168h-43.008v-211.456c-15.872 14.336-35.84 25.088-59.904 32.256v-43.008c11.776-3.072 24.576-8.192 37.376-15.36 13.312-8.192 24.576-16.384 33.28-25.6h32.256z" fill="" ></path>' +
    '' +
    '<path d="M590.336 648.192h-114.688v-185.344l-13.824 4.608-46.08 13.824v-118.784l26.624-7.168c9.216-2.56 18.944-6.144 28.16-11.776 11.776-7.168 19.968-13.312 25.6-19.456l10.752-11.264h83.456v335.36z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-brackets_random" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M788.878222 333.539556h66.161778v111.559111L1024 248.888889 855.096889 56.888889v127.374222h-66.161778c-189.44 0-313.002667 145.976889-407.381333 274.773333-84.707556 115.768889-158.037333 224.995556-276.195556 224.995556H0v149.333333h105.301333c189.44 0 296.334222-155.192889 390.769778-283.989333 84.707556-115.825778 174.364444-215.836444 292.807111-215.836444zM275.512889 418.929778l24.519111-33.223111c20.138667-27.363556 41.187556-56.376889 64.113778-85.162667-67.868444-65.820444-149.560889-114.403556-258.844445-114.403556H0v149.276445s28.387556-1.422222 105.301333 0c74.467556 1.649778 121.173333 33.28 170.211556 83.512889z m579.584 270.848h-66.161778c-72.135111 0-144.156444-41.813333-195.754667-97.28-5.063111 7.111111-10.296889 14.165333-15.587555 21.219555-22.641778 30.890667-46.933333 64.170667-73.728 96.938667 69.632 70.542222 170.552889 128.398222 285.070222 128.398222h66.161778V967.111111L1024 770.56l-168.903111-191.658667v110.876445z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)