;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M713 106.3c78.6 38.3 146.1 100 191.1 175.1 6.9 11.5 13.3 23.4 19.2 35.5 4.3 8.9 14.6 13 23.7 9 9.3-4.1 13.7-15.1 9.2-24.2-6.4-13.3-13.4-26.3-21-38.9-49.5-82.5-120.7-147.7-206.8-189.3-9.2-4.4-20.3-0.1-24.4 9.2-3.9 9 0.1 19.3 9 23.6zM986.5 496c-10 0-18.1 8.1-18.1 18.1 0 249.9-203.3 453.3-453.3 453.3S61.7 764.1 61.7 514.2 265.1 60.9 515 60.9c10 0 18.1-8.1 18.1-18.1S525 24.7 515 24.7c-269.9 0-489.6 219.6-489.6 489.6S245 1003.9 515 1003.9s489.6-219.6 489.6-489.6c0-10.1-8.1-18.3-18.1-18.3z" fill="#1E1B1B" ></path>' +
    '' +
    '<path d="M623.8 60.9m-18.1 0a18.1 18.1 0 1 0 36.2 0 18.1 18.1 0 1 0-36.2 0Z" fill="#1E1B1B" ></path>' +
    '' +
    '<path d="M968.3 405.4m-18.1 0a18.1 18.1 0 1 0 36.2 0 18.1 18.1 0 1 0-36.2 0Z" fill="#1E1B1B" ></path>' +
    '' +
    '<path d="M433 337.9c-9.8 0-19.6 2.6-28.5 7.7C386.6 356 376 374.4 376 395v238.3c0 20.6 10.7 39.1 28.5 49.4 17.9 10.3 39.2 10.3 57 0l206.3-119.1c17.9-10.3 28.5-28.8 28.5-49.4s-10.7-39.1-28.5-49.4L461.5 345.6c-8.9-5.1-18.7-7.7-28.5-7.7z m224.1 176.3c0 3.1-0.9 10.8-8.9 15.4L441.9 648.7c-8 4.6-15.1 1.5-17.8 0-2.7-1.5-8.9-6.1-8.9-15.4V395c0-9.3 6.2-13.9 8.9-15.4 2.7-1.6 9.8-4.6 17.8 0l206.3 119.1c8 4.7 8.9 12.4 8.9 15.5z" fill="#1E1B1B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M900.9 343.5c-8.2 3.6-17.6-0.1-21.5-8.2-5.3-11-11.2-21.8-17.4-32.2-41-68.3-102.3-124.4-173.7-159.1-8-3.9-11.7-13.2-8.1-21.4 3.7-8.5 13.8-12.4 22.1-8.4 78.2 37.8 142.9 97 187.9 172 6.9 11.5 13.3 23.3 19.1 35.4 4 8.2 0 18.2-8.4 21.9zM936.8 498.1c-9.1 0-16.5 7.4-16.5 16.5 0 227.1-184.7 411.8-411.8 411.8S96.7 741.6 96.7 514.5s184.7-411.8 411.8-411.8c9.1 0 16.5-7.4 16.5-16.5s-7.4-16.5-16.5-16.5c-245.2 0-444.8 199.5-444.8 444.8s199.5 444.8 444.8 444.8 444.8-199.5 444.8-444.8c0-9.1-7.4-16.4-16.5-16.4z" fill="#161616" ></path>' +
    '' +
    '<path d="M607.3 102.7m-16.5 0a16.5 16.5 0 1 0 33 0 16.5 16.5 0 1 0-33 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M920.3 415.7m-16.5 0a16.5 16.5 0 1 0 33 0 16.5 16.5 0 1 0-33 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M363.1 631.6c8.3-3.6 18.1-1.3 23.7 5.1 20.4 23.5 61.6 45.1 126.1 45.1s105.7-21.6 126.1-45.1c5.6-6.4 15.4-8.7 23.7-5.1 10.4 4.5 13.9 16.2 7 24.3-20.4 23.7-65.9 58.8-156.8 58.8s-136.4-35.1-156.8-58.8c-7-8.1-3.4-19.8 7-24.3zM452.8 449.4c-4.9 3.6-10.7 1.3-14-5.1-12-23.5-36.3-45.1-74.3-45.1s-62.3 21.6-74.3 45.1c-3.3 6.4-9.1 8.7-14 5.1-6.1-4.5-8.2-16.2-4.1-24.3 12-23.7 38.8-58.8 92.3-58.8s80.3 35.1 92.3 58.8c4.4 8.1 2.3 19.7-3.9 24.3zM765.8 449.4c-4.9 3.6-10.7 1.3-14-5.1-12-23.5-36.3-45.1-74.3-45.1s-62.3 21.6-74.3 45.1c-3.3 6.4-9.1 8.7-14 5.1-6.1-4.5-8.2-16.2-4.1-24.3 12-23.7 38.8-58.8 92.3-58.8s80.3 35.1 92.3 58.8c4.3 8.1 2.3 19.7-3.9 24.3z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M898.3 342.8c-8.2 3.6-17.5-0.1-21.4-8.1-5.3-10.9-11.1-21.6-17.3-32-40.7-67.8-101.5-123.5-172.5-158.1-8-3.9-11.6-13.2-8.1-21.3 3.7-8.4 13.7-12.3 22-8.3 77.7 37.6 141.9 96.4 186.6 170.9 6.8 11.4 13.2 23.1 19 35.1 4 8.2 0.1 18.1-8.3 21.8zM934 496.3c-9 0-16.4 7.3-16.4 16.4 0 225.6-183.5 409.1-409.1 409.1S99.4 738.3 99.4 512.7s183.5-409.1 409.1-409.1c9 0 16.4-7.3 16.4-16.4s-7.3-16.4-16.4-16.4C264.9 70.8 66.7 269 66.7 512.6s198.2 441.8 441.8 441.8 441.8-198.2 441.8-441.8c0-8.9-7.3-16.3-16.3-16.3z" fill="#161616" ></path>' +
    '' +
    '<path d="M606.7 103.6m-16.4 0a16.4 16.4 0 1 0 32.8 0 16.4 16.4 0 1 0-32.8 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M917.6 414.5m-16.4 0a16.4 16.4 0 1 0 32.8 0 16.4 16.4 0 1 0-32.8 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M574 308.1c-49.5 0-90.6 36.8-97.2 84.5-0.6 1.7-1 3.5-1 5.5v237.7l-91.4-90.5c-6.4-6.4-16.8-6.3-23.1 0.1-6.4 6.4-6.3 16.8 0.1 23.1l119.8 118.6c6.4 6.3 16.7 6.3 23.1 0L623 568.6c6.4-6.4 6.4-16.7 0-23.1-6.4-6.4-16.7-6.4-23.1 0l-91.4 91.2V406.3c0-36.1 29.4-65.5 65.5-65.5s65.5 29.4 65.5 65.5c0 9 7.3 16.4 16.4 16.4 9 0 16.4-7.3 16.4-16.4-0.2-54.1-44.2-98.2-98.3-98.2z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M907.1 339.7c-8.3 3.6-17.7-0.1-21.6-8.2-5.4-11.1-11.2-21.9-17.5-32.4C826.8 230.4 765.1 174 693.3 139c-8.1-3.9-11.8-13.3-8.2-21.6 3.7-8.5 13.9-12.5 22.3-8.4 78.7 38.1 143.8 97.6 189 173.1 6.9 11.5 13.3 23.4 19.2 35.6 4 8.2 0.1 18.3-8.5 22zM943.3 495.2c-9.2 0-16.6 7.4-16.6 16.6 0 228.5-185.9 414.4-414.4 414.4S97.9 740.3 97.9 511.8 283.8 97.4 512.3 97.4c9.2 0 16.6-7.4 16.6-16.6s-7.4-16.6-16.6-16.6C265.5 64.2 64.7 265 64.7 511.8s200.8 447.6 447.6 447.6 447.6-200.8 447.6-447.6c0-9.2-7.5-16.6-16.6-16.6z" fill="#161616" ></path>' +
    '' +
    '<path d="M611.7 97.4m-16.6 0a16.6 16.6 0 1 0 33.2 0 16.6 16.6 0 1 0-33.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M926.7 412.3m-16.6 0a16.6 16.6 0 1 0 33.2 0 16.6 16.6 0 1 0-33.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M512.3 555.8c39.4 0 71.5-25.6 71.5-57.2V370c0-31.5-32.1-57.2-71.5-57.2s-71.5 25.6-71.5 57.2v128.6c0 31.6 32.1 57.2 71.5 57.2zM469.4 370c0-15.5 19.6-28.6 42.9-28.6s42.9 13.1 42.9 28.6v128.6c0 15.5-19.6 28.6-42.9 28.6s-42.9-13.1-42.9-28.6V370z" fill="#161616" ></path>' +
    '' +
    '<path d="M668.7 471.5c0.8-8.4-5.8-15.8-14.3-15.8-7.2 0-13.4 5.4-14.1 12.6-6.3 65-61.3 116-128 116s-121.7-51-128-116c-0.7-7.2-6.9-12.6-14.1-12.6-8.5 0-15.1 7.3-14.3 15.8 7.5 74.6 67.3 134 142.1 140.8v86.4H398c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3h228.6c7.9 0 14.3-6.4 14.3-14.3s-6.4-14.3-14.3-14.3h-100v-86.4c74.8-6.8 134.6-66.2 142.1-140.8z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.2 493.9c-9 0-16.3 7.3-16.3 16.3 0 225.1-183.1 408.2-408.2 408.2S99.5 735.3 99.5 510.2 282.6 102 507.7 102c9 0 16.3-7.3 16.3-16.3s-7.3-16.3-16.3-16.3c-243.1 0-440.9 197.8-440.9 440.9s197.8 440.9 440.9 440.9 440.9-197.8 440.9-440.9c0-9.1-7.3-16.4-16.4-16.4z" fill="#161616" ></path>' +
    '' +
    '<path d="M605.7 102m-16.3 0a16.3 16.3 0 1 0 32.6 0 16.3 16.3 0 1 0-32.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M915.9 412.3m-16.3 0a16.3 16.3 0 1 0 32.6 0 16.3 16.3 0 1 0-32.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M905 318.9c-5.8-11.9-12.1-23.7-18.9-35-44.6-74.3-108.7-133-186.2-170.5-1.8-0.9-3.6-1.3-5.4-1.5-2.2-1-4.6-1.6-7.1-1.6-9 0-16.3 7.3-16.3 16.3V424c-24-27.2-59-44.3-98-44.3-72 0-130.6 58.6-130.6 130.6S501 640.9 573 640.9s130.6-58.6 130.6-130.6c0-2-0.1-4.1-0.1-6.1 0.1-0.7 0.1-1.4 0.1-2.1v-350c63.2 34.8 117.2 86.5 154.4 148.5 6.2 10.4 12 21.1 17.3 32 3.9 8 13.2 11.7 21.3 8.1 8.4-3.7 12.4-13.6 8.4-21.8zM573 608.2c-54 0-98-43.9-98-98s43.9-98 98-98c54 0 98 43.9 98 98s-44 98-98 98zM491.4 722.5c-81 0-147-65.9-147-147 0-9-7.3-16.3-16.3-16.3s-16.3 7.3-16.3 16.3c0 99 80.6 179.6 179.6 179.6 9 0 16.3-7.3 16.3-16.3s-7.3-16.3-16.3-16.3z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban5" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M903.2 342.4c-8.2 3.6-17.6-0.1-21.5-8.2-5.3-11-11.1-21.8-17.4-32.2-40.9-68.2-102.1-124.2-173.4-158.9-8-3.9-11.7-13.2-8.1-21.4 3.7-8.5 13.8-12.4 22.1-8.4 78.1 37.8 142.7 96.9 187.6 171.8 6.9 11.4 13.2 23.3 19.1 35.3 4 8.3 0.1 18.3-8.4 22zM939.1 496.8c-9.1 0-16.5 7.4-16.5 16.5 0 226.8-184.5 411.3-411.3 411.3S100 740 100 513.2s184.5-411.3 411.3-411.3c9.1 0 16.5-7.4 16.5-16.5s-7.4-16.5-16.5-16.5C266.4 69 67.1 268.3 67.1 513.2s199.3 444.2 444.2 444.2 444.2-199.3 444.2-444.2c0-9.1-7.3-16.4-16.4-16.4z" fill="#161616" ></path>' +
    '' +
    '<path d="M610 101.9m-16.5 0a16.5 16.5 0 1 0 33 0 16.5 16.5 0 1 0-33 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M922.6 414.5m-16.5 0a16.5 16.5 0 1 0 33 0 16.5 16.5 0 1 0-33 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M501.3 708.2h-1.2c-15.1-0.5-28.9-9.7-42-28.3L333.9 528c-19.6-24-28.7-56.2-24.1-86.1 3.4-22.6 17.7-46 28.9-59 35.7-34.4 84.9-35.5 120.7-3.9l40.2 35.5 33.4-32.3c35.3-34.7 85.7-36.2 122.7-3.7 16.6 14.7 28.2 35.9 32.5 59.8 5.4 30-2.8 62.7-22 87.5l-119 153.6c-10 12.5-25.5 28.8-45.9 28.8zM401 389.1c-13.6 0-27.1 5.5-38.4 16.4-7.6 9-18.1 26.7-20.3 41.4-3.1 20.8 3.2 43.4 17.1 60.3l125.2 153.3c9.5 13.6 15 14.8 16.5 14.9 1.4 0.2 7.9-0.9 20.3-16.3l118.8-153.3c13.4-17.3 19.4-40.8 15.6-61.4-3-16.7-10.8-31.3-21.9-41-23.8-21-55.1-20-77.8 2.4l-32.8 32.3c-12.9 12.7-32 13.2-45.5 1.3l-40.2-35.5c-11-9.9-23.9-14.8-36.6-14.8z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban6" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M900.3 342.9c-8.1 3.5-17.4-0.1-21.2-8.1-5.3-10.8-11-21.5-17.2-31.8-40.5-67.4-100.9-122.7-171.5-157-7.9-3.9-11.5-13.1-8-21.1 3.7-8.4 13.6-12.3 21.9-8.3 77.2 37.3 141.1 95.8 185.5 169.8 6.8 11.3 13.1 23 18.8 34.9 3.9 8.1 0 18-8.3 21.6zM935.7 495.5c-9 0-16.3 7.3-16.3 16.3 0 224.2-182.4 406.5-406.5 406.5S106.4 736 106.4 511.8s182.4-406.5 406.5-406.5c9 0 16.3-7.3 16.3-16.3s-7.3-16.3-16.3-16.3c-242.1 0-439.1 197-439.1 439.1s197 439.1 439.1 439.1S952 753.9 952 511.8c0-9-7.3-16.3-16.3-16.3z" fill="#161616" ></path>' +
    '' +
    '<path d="M610.5 105.3m-16.3 0a16.3 16.3 0 1 0 32.6 0 16.3 16.3 0 1 0-32.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M919.5 414.2m-16.3 0a16.3 16.3 0 1 0 32.6 0 16.3 16.3 0 1 0-32.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M431.6 365.4c-9 0-16.3 7.3-16.3 16.3v260.2c0 9 7.3 16.3 16.3 16.3s16.3-7.3 16.3-16.3V381.7c0-9-7.3-16.3-16.3-16.3zM594.2 365.4c-9 0-16.3 7.3-16.3 16.3v260.2c0 9 7.3 16.3 16.3 16.3s16.3-7.3 16.3-16.3V381.7c0-9-7.3-16.3-16.3-16.3z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban7" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M903.6 341.7c-8.2 3.6-17.5-0.1-21.4-8.1-5.3-10.9-11.1-21.7-17.3-32.1-40.7-67.9-101.7-123.6-172.7-158.2-8-3.9-11.6-13.2-8.1-21.3 3.7-8.4 13.7-12.4 22-8.3 77.8 37.6 142.1 96.5 186.8 171.1 6.8 11.4 13.2 23.2 19 35.2 4 8.1 0.1 18-8.3 21.7zM939.3 495.4c-9 0-16.4 7.3-16.4 16.4 0 225.8-183.7 409.6-409.6 409.6S103.7 737.6 103.7 511.8s183.7-409.6 409.6-409.6c9 0 16.4-7.3 16.4-16.4s-7.3-16.4-16.4-16.4C269.4 69.4 71 267.9 71 511.8s198.4 442.4 442.4 442.4 442.4-198.4 442.4-442.4c-0.1-9.1-7.5-16.4-16.5-16.4z" fill="#161616" ></path>' +
    '' +
    '<path d="M611.6 102.2m-16.4 0a16.4 16.4 0 1 0 32.8 0 16.4 16.4 0 1 0-32.8 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M922.9 413.5m-16.4 0a16.4 16.4 0 1 0 32.8 0 16.4 16.4 0 1 0-32.8 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M710.2 460.4l-101.6-77.3c-15-11.4-34.7-13.3-51.6-4.9-16.8 8.4-27.3 25.2-27.3 44V453l-106.1-83.2c-14.9-11.7-34.8-13.8-51.8-5.5s-27.6 25.2-27.6 44.2v182c0 19 10.6 35.9 27.6 44.2 6.9 3.4 14.3 5 21.6 5 10.7 0 21.4-3.6 30.3-10.5l106-83.2v30.8c0 18.8 10.5 35.7 27.3 44 7 3.5 14.5 5.2 21.9 5.2 10.5 0 20.9-3.4 29.7-10.1l101.6-77.3c12.3-9.4 19.4-23.6 19.4-39.1s-7-29.7-19.4-39.1z m-190.8 52l-116.1 91c-5.1 4-11.6 4.6-17.3 1.8-5.8-2.8-9.2-8.3-9.2-14.7v-182c0-6.4 3.4-11.9 9.2-14.7 2.4-1.2 4.8-1.7 7.3-1.7 3.6 0 7 1.2 10 3.5l116.1 91c4 3.1 6.3 7.8 6.3 12.9s-2.3 9.8-6.3 12.9z m171 0.1l-101.6 77.3c-5.1 3.9-11.5 4.5-17.2 1.6-5.7-2.8-9.1-8.3-9.1-14.7V422.2c0-6.4 3.4-11.8 9.1-14.7 2.4-1.2 4.9-1.8 7.3-1.8 3.5 0 6.9 1.1 9.9 3.4l101.6 77.3c4.1 3.1 6.5 7.9 6.5 13-0.1 5.3-2.4 10-6.5 13.1z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban8" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M903.6 341.7c-8.2 3.6-17.5-0.1-21.4-8.1-5.3-10.9-11.1-21.7-17.3-32.1-40.7-67.9-101.7-123.6-172.7-158.2-8-3.9-11.6-13.2-8.1-21.3 3.7-8.4 13.7-12.4 22-8.3 77.8 37.6 142.1 96.5 186.8 171.1 6.8 11.4 13.2 23.2 19 35.2 4 8.1 0.1 18-8.3 21.7zM939.3 495.4c-9 0-16.4 7.3-16.4 16.4 0 225.8-183.7 409.6-409.6 409.6S103.7 737.6 103.7 511.8s183.7-409.6 409.6-409.6c9 0 16.4-7.3 16.4-16.4s-7.3-16.4-16.4-16.4C269.4 69.4 71 267.9 71 511.8s198.4 442.4 442.4 442.4 442.4-198.4 442.4-442.4c-0.1-9.1-7.5-16.4-16.5-16.4z" fill="#161616" ></path>' +
    '' +
    '<path d="M611.6 102.2m-16.4 0a16.4 16.4 0 1 0 32.8 0 16.4 16.4 0 1 0-32.8 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M922.9 413.5m-16.4 0a16.4 16.4 0 1 0 32.8 0 16.4 16.4 0 1 0-32.8 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M325.6 538.9l101.6 77.3c15 11.4 34.7 13.3 51.6 4.9 16.8-8.4 27.3-25.2 27.3-44v-30.8l106.1 83.2c14.9 11.7 34.8 13.8 51.8 5.5s27.6-25.2 27.6-44.2v-182c0-19-10.6-35.9-27.6-44.2-6.9-3.4-14.3-5-21.6-5-10.7 0-21.4 3.6-30.3 10.5L506 453.3v-30.8c0-18.8-10.5-35.7-27.3-44-7-3.5-14.5-5.2-21.9-5.2-10.5 0-20.9 3.4-29.7 10.1l-101.6 77.3c-12.3 9.4-19.4 23.6-19.4 39.1 0.1 15.4 7.1 29.7 19.5 39.1z m190.8-52.1l116.1-91c5.1-4 11.6-4.6 17.3-1.8 5.8 2.8 9.2 8.3 9.2 14.7v182c0 6.4-3.4 11.9-9.2 14.7-2.4 1.2-4.8 1.7-7.3 1.7-3.6 0-7-1.2-10-3.5l-116.1-91c-4-3.1-6.3-7.8-6.3-12.9s2.3-9.7 6.3-12.9z m-171-0.1L447 409.4c5.1-3.9 11.5-4.5 17.2-1.6 5.7 2.8 9.1 8.3 9.1 14.7V577c0 6.4-3.4 11.8-9.1 14.7-2.4 1.2-4.9 1.8-7.3 1.8-3.5 0-6.9-1.1-9.9-3.4l-101.6-77.3c-4.1-3.1-6.5-7.9-6.5-13 0.1-5.2 2.4-10 6.5-13.1z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban9" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M906.8 341.7c-8.2 3.6-17.7-0.1-21.6-8.2-5.3-11-11.2-21.8-17.5-32.3-41.1-68.5-102.5-124.7-174.1-159.6-8-3.9-11.7-13.3-8.1-21.5 3.7-8.5 13.8-12.5 22.2-8.4C786.1 149.6 851 209 896.1 284.2c6.9 11.5 13.3 23.4 19.1 35.5 4.1 8.3 0.1 18.3-8.4 22zM942.8 496.7c-9.1 0-16.5 7.4-16.5 16.5 0 227.7-185.3 413-413 413s-413-185.3-413-413 185.3-413 413-413c9.1 0 16.5-7.4 16.5-16.5s-7.4-16.5-16.5-16.5c-245.9 0-446 200.1-446 446s200.1 446 446 446 446-200.1 446-446c0-9.1-7.4-16.5-16.5-16.5z" fill="#161616" ></path>' +
    '' +
    '<path d="M612.4 100.2m-16.5 0a16.5 16.5 0 1 0 33 0 16.5 16.5 0 1 0-33 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M926.3 414.1m-16.5 0a16.5 16.5 0 1 0 33 0 16.5 16.5 0 1 0-33 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M671.1 639.3l-46.5-80.5V429h-0.4c-3.5-63.5-55.9-114-119.7-114-64.4 0-117.1 51.5-119.7 115.7v0.5c-0.1 1.5-0.1 3.1-0.1 4.6h0.1v122.4c0 0.3-0.1 0.7-0.3 1l-46.2 80.1c-7.2 12.4-6.4 27.5 2.2 39.3 7.1 9.8 19.3 14.7 31.4 14.7h139.5c0.2 0 0.3 0 0.5-0.1 0.5 0 1 0.1 1.4 0.1 9.1 0 16.5-7.4 16.5-16.5s-7.4-16.5-16.5-16.5c-0.5 0-1 0-1.4 0.1-0.2 0-0.3-0.1-0.5-0.1H369.5c-1.1 0-2-0.5-2.6-1.5-0.6-1-0.6-2 0-2.9l50.7-87.8c0.2-0.3 0.3-0.6 0.3-1V431.8c2.1-46.5 40.2-83.7 86.7-83.7 47.9 0 86.8 39.4 86.8 87.8h0.2v131.8l50.9 88.2c0.6 1 0.6 2 0 2.9-0.6 1-1.4 1.5-2.6 1.5h-33.2v0.2c-0.8-0.1-1.7-0.2-2.6-0.2-9.1 0-16.5 7.4-16.5 16.5s7.4 16.5 16.5 16.5c0.9 0 1.7-0.1 2.6-0.2v0.2h33.2c13 0 24.7-6.7 31.2-18s6.5-24.7 0-36z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban10" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.2 345.3c-8 3.5-17.1-0.1-20.9-8-5.2-10.7-10.9-21.2-17-31.4-39.9-66.5-99.5-121-169.1-154.9-7.8-3.8-11.4-12.9-7.9-20.9 3.6-8.3 13.4-12.1 21.6-8.2C767 158.8 830 216.4 873.8 289.4c6.7 11.2 12.9 22.7 18.6 34.4 3.9 8.1 0.1 17.9-8.2 21.5zM919.2 495.8c-8.9 0-16 7.2-16 16 0 221.1-179.9 400.9-400.9 400.9s-401-179.8-401-400.9 179.9-400.9 400.9-400.9c8.9 0 16-7.2 16-16 0-8.9-7.2-16-16-16-238.8 0-433 194.3-433 433s194.3 433 433 433 433-194.3 433-433c0-9-7.2-16.1-16-16.1z" fill="#161616" ></path>' +
    '' +
    '<path d="M598.4 110.9m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M903.1 415.6m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M694.7 495.8H534.3V335.4c0-8.9-7.2-16-16-16-8.9 0-16 7.2-16 16v160.4H341.8c-8.9 0-16 7.2-16 16 0 8.9 7.2 16 16 16h160.4v160.4c0 8.9 7.2 16 16 16 8.9 0 16-7.2 16-16V527.8h160.4c8.9 0 16-7.2 16-16 0.1-8.9-7.1-16-15.9-16z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M895.6 345c-8 3.5-17.2-0.1-21.1-8-5.2-10.8-10.9-21.3-17.1-31.6-40.1-66.9-100.1-121.7-170-155.8-7.9-3.8-11.5-13-7.9-21 3.6-8.3 13.5-12.2 21.7-8.2 76.6 37 139.9 95 184 168.4 6.7 11.2 13 22.8 18.7 34.6 3.8 8.2 0 18-8.3 21.6zM930.7 496.4c-8.9 0-16.1 7.2-16.1 16.1 0 222.4-180.9 403.3-403.3 403.3S108.1 734.9 108.1 512.5 289 109.2 511.3 109.2c8.9 0 16.1-7.2 16.1-16.1S520.2 77 511.3 77C271.2 77 75.8 272.4 75.8 512.5S271.2 948 511.3 948s435.5-195.4 435.5-435.5c0.1-8.9-7.2-16.1-16.1-16.1z" fill="#161616" ></path>' +
    '' +
    '<path d="M608.1 109.2m-16.1 0a16.1 16.1 0 1 0 32.2 0 16.1 16.1 0 1 0-32.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M914.6 415.7m-16.1 0a16.1 16.1 0 1 0 32.2 0 16.1 16.1 0 1 0-32.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M690.8 495.7H335.9c-8.9 0-16.1 7.2-16.1 16.1 0 8.9 7.2 16.1 16.1 16.1h354.9c8.9 0 16.1-7.2 16.1-16.1 0-8.9-7.2-16.1-16.1-16.1z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban12" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M720.5 303.9v-0.3l-49.4-7.6c-6.9-1.1-12.8-5.5-15.8-11.8L630.8 232h-0.1c-2.8-6-8.8-10.2-15.8-10.2-9.7 0-17.6 7.9-17.6 17.6 0 2.7 0.7 5.1 1.8 7.4l-0.1 0.1 24.5 52.2c8 17 23.8 28.8 42.4 31.6l49.4 7.6 0.1-0.3c0.9 0.1 1.7 0.5 2.6 0.5 9.7 0 17.6-7.9 17.6-17.6-0.1-8.7-6.7-15.7-15.1-17z" fill="#161616" ></path>' +
    '' +
    '<path d="M912 422.7c14.8-15.1 19.8-37 13-57.1-6.7-20.1-23.9-34.5-44.8-37.7l-55-8.4v0.3c-1-0.2-1.9-0.6-2.9-0.6-9.7 0-17.6 7.9-17.6 17.6 0 8.9 6.7 16 15.3 17.1l-0.1 0.3 55 8.4c7.9 1.2 14.2 6.5 16.7 14.1 2.6 7.6 0.7 15.6-4.9 21.3L733.1 555.7c-12.4 12.7-18.1 30.8-15.2 48.3l36 220.4c1.3 8.1-1.9 15.8-8.6 20.5-6.7 4.7-15.1 5.2-22.3 1.2L539.5 744.8c-17-9.4-37.3-9.4-54.3 0L301.7 846.2c-7.2 4-15.5 3.5-22.3-1.2-6.7-4.7-10-12.4-8.6-20.5l36-220.4c2.9-17.5-2.8-35.6-15.2-48.3L137.7 398.2c-5.6-5.7-7.4-13.7-4.9-21.3 2.5-7.6 8.8-12.9 16.7-14.1l209.2-32c18.5-2.8 34.4-14.7 42.4-31.7l92.2-196.4c3.5-7.6 10.7-12.1 19-12.1 8.4 0 15.5 4.5 19 12.1l21.9 46.6c0.1 0.3 0.2 0.5 0.4 0.8l0.3 0.7 0.1-0.1c2.9 5.7 8.7 9.6 15.5 9.6 9.7 0 17.6-7.9 17.6-17.6 0-2.5-0.5-4.8-1.4-6.9h0.1l-22.6-48.1c-9.3-19.9-28.8-32.3-50.8-32.3s-41.5 12.4-50.8 32.3l-92.2 196.4c-3 6.4-8.9 10.8-15.8 11.8l-209.2 32c-20.9 3.2-38.1 17.6-44.8 37.7-6.7 20.1-1.7 41.9 13.1 57l153.7 157.6c4.6 4.7 6.8 11.5 5.7 18l-36 220.4c-3.5 21.4 5.3 42.5 23.1 55 17.7 12.5 40.5 13.8 59.5 3.2l183.5-101.4c6.4-3.5 14-3.5 20.3 0L705.9 877c8.6 4.7 17.9 7.1 27.2 7.1 11.3 0 22.6-3.5 32.3-10.3 17.7-12.5 26.6-33.6 23.1-55l-36-220.4c-1.1-6.6 1-13.3 5.7-18L912 422.7z" fill="#161616" ></path>' +
    '' +
    '<path d="M771.8 330.2m-17.6 0a17.6 17.6 0 1 0 35.2 0 17.6 17.6 0 1 0-35.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M588.1 195.2m-17.6 0a17.6 17.6 0 1 0 35.2 0 17.6 17.6 0 1 0-35.2 0Z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban13" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M353.1 398.6H236.7c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2H353c25.5 0 46.2 20.7 46.2 46.2v114c0.1 25.5-20.7 46.2-46.1 46.2zM236.7 218.2c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1H353c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H236.7zM569.5 398.6H453.2c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2h116.3c25.5 0 46.2 20.7 46.2 46.2v114c0 25.5-20.7 46.2-46.2 46.2zM453.2 218.2c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1h116.3c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H453.2zM353.1 615H236.7c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2H353c25.5 0 46.2 20.7 46.2 46.2v114c0.1 25.5-20.7 46.2-46.1 46.2zM236.7 434.7c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1H353c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H236.7zM569.5 615H453.2c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2h116.3c25.5 0 46.2 20.7 46.2 46.2v114c0 25.5-20.7 46.2-46.2 46.2zM453.2 434.7c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1h116.3c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H453.2zM785.9 615H669.6c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2h116.3c25.5 0 46.2 20.7 46.2 46.2v114c0.1 25.5-20.7 46.2-46.2 46.2zM669.6 434.7c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1h116.3c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H669.6zM353.1 831.5H236.7c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2H353c25.5 0 46.2 20.7 46.2 46.2v114c0.1 25.4-20.7 46.2-46.1 46.2zM236.7 651.1c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1H353c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H236.7zM569.5 831.5H453.2c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2h116.3c25.5 0 46.2 20.7 46.2 46.2v114c0 25.4-20.7 46.2-46.2 46.2zM453.2 651.1c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1h116.3c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H453.2zM785.9 831.5H669.6c-25.5 0-46.2-20.7-46.2-46.2v-114c0-25.5 20.7-46.2 46.2-46.2h116.3c25.5 0 46.2 20.7 46.2 46.2v114c0.1 25.4-20.7 46.2-46.2 46.2zM669.6 651.1c-11.1 0-20.1 9-20.1 20.1v114c0 11.1 9 20.1 20.1 20.1h116.3c11.1 0 20.1-9 20.1-20.1v-114c0-11.1-9-20.1-20.1-20.1H669.6z" fill="#161616" ></path>' +
    '' +
    '<path d="M720.5 205.2m-13 0a13 13 0 1 0 26 0 13 13 0 1 0-26 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M785.9 192.1h-25v0.3c-6.4 0.8-11.4 6.1-11.4 12.7s5 11.9 11.4 12.7v0.3h25c11.1 0 20.1 9 20.1 20.1v25c0 7.2 5.8 13 13 13s13-5.8 13-13v-25c0.2-25.3-20.6-46.1-46.1-46.1zM832 334.5c0-0.3 0.1-0.5 0.1-0.7 0-7.2-5.8-13-13-13s-13 5.8-13 13c0 0.3 0.1 0.5 0.1 0.7h-0.1v17.9c0 11.1-9 20.1-20.1 20.1H669.6c-11.1 0-20.1-9-20.1-20.1v-114c0-11.1 9-20.1 20.1-20.1h14.2v-0.3c6.4-0.8 11.4-6.1 11.4-12.7s-5-11.9-11.4-12.7v-0.3h-14.2c-25.5 0-46.2 20.7-46.2 46.2v114c0 25.5 20.7 46.2 46.2 46.2h116.3c25.5 0 46.2-20.7 46.2-46.2v-17.9h-0.1z" fill="#161616" ></path>' +
    '' +
    '<path d="M819.1 297.9m-13 0a13 13 0 1 0 26 0 13 13 0 1 0-26 0Z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban14" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M593.1 442.4c62.8-27.7 108.4-87.3 115.8-159.7h-0.1c0.1-0.7 0.2-1.4 0.2-2.2 0-7.2-5.9-13.1-13.1-13.1-7.1 0-12.9 5.7-13.1 12.7-9.3 90.6-87.7 158-180.1 152.4-82.9-5.1-151.6-72-158.8-154.7-8.1-92.9 58.8-173.5 149.3-184.2h0.5c7.2 0 13.1-5.9 13.1-13.1 0-7.2-5.9-13.1-13.1-13.1-1 0-1.9 0.1-2.8 0.3v-0.3c-105.4 12-183.3 106.1-173.1 214.3 6.7 71 52.5 131.5 115 160-160.7 34.9-282.7 174.7-290.5 343.8-0.4 9.4 7.4 17.3 16.9 17.3 9.1 0 16.3-7.3 16.7-16.4 8.6-177.6 155.8-319.5 335.5-319.5s326.9 141.9 335.5 319.5c0.4 9.1 7.6 16.4 16.7 16.4 9.5 0 17.3-7.8 16.9-17.3-7.9-168-128.3-307.1-287.4-343.1z" fill="#161616" ></path>' +
    '' +
    '<path d="M539.6 77.1m-13.1 0a13.1 13.1 0 1 0 26.2 0 13.1 13.1 0 1 0-26.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M697.2 234.6m-13.1 0a13.1 13.1 0 1 0 26.2 0 13.1 13.1 0 1 0-26.2 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M577.6 91.7c43.1 17.5 77.3 52.2 94.3 95.5 2.5 6.2 9.6 9.3 16 7.3 7.3-2.3 11.1-10.4 8.2-17.6-19.6-49.4-58.7-89-107.9-109.3-7.1-2.9-15.3 0.7-17.7 8-2.1 6.5 0.8 13.6 7.1 16.1z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban15" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 478.7c0-1.9 0.1-3.7 0.1-5.6v-20.4c0-9.7-7.8-17.5-17.5-17.5s-17.5 7.8-17.5 17.5v20.4c0 104.4-84.9 189.2-189.2 189.2H527c-46.2 0-85.4 36.1-89.2 82.1l-4.2 50.5L350 701c-19.2-21.5-45.1-36-75.1-41.8-82.2-15.8-111.9-88-111.9-171.6v-90.3C163 292.9 218 208 322.4 208h160.2c9.7 0 17.5-7.8 17.5-17.5s-7.8-17.5-17.5-17.5H322.4C198.7 173.1 128 273.7 128 397.3v90.3c0 100.3 41.7 186.9 140.3 205.9 22.4 4.3 41.6 14.9 55.6 30.7l88.2 99.2c6.2 7 14.9 10.7 23.9 10.7 3.4 0 6.8-0.5 10.1-1.6 12.1-4.1 20.7-14.9 21.7-27.7l4.8-57.4c2.3-28.1 26.2-50.1 54.4-50.1h80.8c109.3 0 200.6-78.7 220.3-182.4 33.5 15.5 56.3 49.8 56.3 87.5v49.7c0 42.2-30.1 78.7-71.6 86.7-18.2 3.5-34 12.3-45.7 25.5l-33.8 38-0.8-9.5c-2.4-29.4-27.5-52.4-56.9-52.4h-44.4c-27 0-52.8-11.5-71.1-31.6-3.1-4.7-8.5-7.9-14.6-7.9-9.7 0-17.5 7.8-17.5 17.5 0 5 2.1 9.5 5.5 12.7l-0.2 0.2c25 28.1 60.7 44.1 98 44.1h44.4c11.4 0 21.1 8.9 22.1 20.3l2.6 31.6c0.9 10.2 7.7 18.8 17.3 22 2.6 0.9 5.4 1.3 8.1 1.3 7.1 0 14.1-3 19-8.5l48.5-54.6c6.5-7.4 15.6-12.3 26.2-14.4 57.9-11.2 99.9-62 99.9-121v-49.7c0-56.3-35.3-105.3-87.4-123.7zM604.9 208c1 0 2-0.1 3-0.3v0.3c81.8 0 156 54.7 180.6 132.9l0.2-0.1c1.6 7.9 8.7 13.9 17.1 13.9 9.7 0 17.5-7.8 17.5-17.5 0-2.6-0.6-5.1-1.7-7.4-29.3-92.4-117.1-156.9-213.8-156.9v0.3c-1-0.2-1.9-0.3-3-0.3-9.7 0-17.5 7.8-17.5 17.5 0.1 9.8 7.9 17.6 17.6 17.6z" fill="#161616" ></path>' +
    '' +
    '<path d="M543.7 190.6m-17.5 0a17.5 17.5 0 1 0 35 0 17.5 17.5 0 1 0-35 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M814.6 391.5m-17.5 0a17.5 17.5 0 1 0 35 0 17.5 17.5 0 1 0-35 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M471.4 535.9c-53.3 0-97.3-40-103.7-91.6-0.9-7.4-7.2-12.9-14.7-12.9-9 0-16 7.9-14.9 16.8 8.3 66.2 64.9 117.6 133.3 117.6s125.1-51.4 133.3-117.6c1.1-8.9-6-16.8-14.9-16.8-7.5 0-13.8 5.5-14.7 12.9-6.3 51.6-50.4 91.6-103.7 91.6z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban16" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.1 166.7H246.7c-44.1 0-80 35.9-80 80V399c0 44.1 35.9 80 80 80H399c44.1 0 80-35.9 80-80V246.7c0-44.1-35.8-80-79.9-80zM452.4 399c0 29.4-23.9 53.3-53.3 53.3H246.7c-29.4 0-53.3-23.9-53.3-53.3V246.7c0-29.4 23.9-53.3 53.3-53.3H399c29.4 0 53.3 23.9 53.3 53.3V399zM399.1 547.5H246.7c-44.1 0-80 35.9-80 80v152.3c0 44.1 35.9 80 80 80H399c44.1 0 80-35.9 80-80V627.5c0-44.1-35.8-80-79.9-80z m53.3 232.3c0 29.4-23.9 53.3-53.3 53.3H246.7c-29.4 0-53.3-23.9-53.3-53.3V627.5c0-29.4 23.9-53.3 53.3-53.3H399c29.4 0 53.3 23.9 53.3 53.3v152.3zM779.9 547.5H627.6c-44.1 0-80 35.9-80 80v152.3c0 44.1 35.9 80 80 80h152.3c44.1 0 80-35.9 80-80V627.5c0-44.1-35.9-80-80-80z m53.3 232.3c0 29.4-23.9 53.3-53.3 53.3H627.6c-29.4 0-53.3-23.9-53.3-53.3V627.5c0-29.4 23.9-53.3 53.3-53.3h152.3c29.4 0 53.3 23.9 53.3 53.3v152.3zM779.9 193.3c29.4 0 53.3 23.9 53.3 53.3 0 7.4 6 13.3 13.3 13.3s13.3-6 13.3-13.3c0-44.1-35.9-80-80-80-7.4 0-13.3 6-13.3 13.3s6 13.4 13.4 13.4zM846.5 313.3c-7.4 0-13.3 6-13.3 13.3V399c0 29.4-23.9 53.3-53.3 53.3H627.6c-29.4 0-53.3-23.9-53.3-53.3V246.7c0-29.4 23.9-53.3 53.3-53.3h76.2v-0.6c5.5-1.6 9.5-6.7 9.5-12.8s-4-11.1-9.5-12.8v-0.6h-76.2c-44.1 0-80 35.9-80 80V399c0 44.1 35.9 80 80 80h152.3c44.1 0 80-35.9 80-80v-72.4c0-7.3-6-13.3-13.4-13.3z" fill="#161616" ></path>' +
    '' +
    '<path d="M846.5 286.6m-13.3 0a13.3 13.3 0 1 0 26.6 0 13.3 13.3 0 1 0-26.6 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M739.9 180m-13.3 0a13.3 13.3 0 1 0 26.6 0 13.3 13.3 0 1 0-26.6 0Z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiaozhizuomoban17" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M378.2 307.5m-14.2 0a14.2 14.2 0 1 0 28.4 0 14.2 14.2 0 1 0-28.4 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M676.1 293.3H477.5c-7.8 0-14.2 6.4-14.2 14.2s6.4 14.2 14.2 14.2h198.6c7.8 0 14.2-6.4 14.2-14.2s-6.4-14.2-14.2-14.2zM676.1 406.8H364c-7.8 0-14.2 6.4-14.2 14.2s6.4 14.2 14.2 14.2h312.1c7.8 0 14.2-6.4 14.2-14.2s-6.4-14.2-14.2-14.2z" fill="#161616" ></path>' +
    '' +
    '<path d="M676.1 151.4c70.4 0 127.7 57.3 127.7 127.7 0 7.8 6.4 14.2 14.2 14.2 7.8 0 14.2-6.4 14.2-14.2 0-86.1-70-156.1-156.1-156.1-7.8 0-14.2 6.4-14.2 14.2 0 7.9 6.4 14.2 14.2 14.2z" fill="#161616" ></path>' +
    '' +
    '<path d="M626.4 137.2m-14.2 0a14.2 14.2 0 1 0 28.4 0 14.2 14.2 0 1 0-28.4 0Z" fill="#161616" ></path>' +
    '' +
    '<path d="M818 364.3c-7.8 0-14.2 6.4-14.2 14.2 0 0.8 0.1 1.6 0.2 2.4h-0.2v366.5c0 70.4-57.3 127.7-127.7 127.7H349.8c-70.4 0-127.7-57.3-127.7-127.7V279.1c0-70.4 57.3-127.7 127.7-127.7H575v-0.1c0.6 0.1 1.2 0.1 1.8 0.1 7.8 0 14.2-6.4 14.2-14.2 0-7.8-6.4-14.2-14.2-14.2-0.6 0-1.2 0-1.8 0.1v-0.1H349.8c-86.1 0-156.1 70-156.1 156.1v468.2c0 86.1 70 156.1 156.1 156.1h326.3c86.1 0 156.1-70 156.1-156.1V380.8h-0.2c0.1-0.8 0.2-1.6 0.2-2.4 0-7.8-6.4-14.1-14.2-14.1z" fill="#161616" ></path>' +
    '' +
    '<path d="M818 328.8m-14.2 0a14.2 14.2 0 1 0 28.4 0 14.2 14.2 0 1 0-28.4 0Z" fill="#161616" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M863.2 760.7h-717V394.9h29.3v336.6h687.7zM877.8 629.1h-29.3V292.5H160.8v-29.2h717z"  ></path>' +
    '' +
    '<path d="M873.5 639.4h-20.7L750.4 537l20.7-20.7 92.1 92.1 92-92.1 20.7 20.7zM252.9 507.7l-92.1-92.1-92 92.1L48.1 487l102.4-102.4h20.7L273.6 487z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M280.7 751.2H63.8v-28.1H269l450.3-450.3h230.9v28.1H730.9zM950.2 751.2H719.3L574.5 606.4l19.9-19.9 136.5 136.6h219.3zM405.6 437.5L269 300.9H63.8v-28.1h216.9l144.8 144.8z"  ></path>' +
    '' +
    '<path d="M861.7 395.3l-19.9-19.9 88.5-88.5-88.5-88.6 19.9-19.9 98.5 98.5v19.9zM861.7 845.6l-19.9-19.9 88.5-88.6-88.5-88.5 19.9-19.9 98.5 98.5v19.9z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M555.3 958L288.2 690.9H115V333.1h173.2L555.3 66v892zM142.5 663.3h157l228.2 228.2v-759L299.6 360.7h-157v302.6zM641.897 397.89l19.445-19.445L908.97 626.072l-19.446 19.445z"  ></path>' +
    '' +
    '<path d="M641.826 626.072l247.627-247.627 19.445 19.445L661.27 645.517z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M603.699 961.5l-269.2-269.2h-174.5v-360.6h174.5l269.2-269.2v899zM187.699 664.5h158.3l230 230v-765l-230 230h-158.3v305zM700.799 664.5v-27.7c68.8 0 124.8-56 124.8-124.8s-56-124.8-124.8-124.8v-27.7c84.1 0 152.5 68.4 152.5 152.5s-68.4 152.5-152.5 152.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M539.7 961.5L270.5 692.3H96V331.7h174.5L539.7 62.5v899z m-416-297H282l230 230v-765l-230 230H123.7v305zM636.8 664.5v-27.7c68.8 0 124.8-56 124.8-124.8s-56-124.8-124.8-124.8v-27.7c84.1 0 152.5 68.4 152.5 152.5s-68.4 152.5-152.5 152.5z"  ></path>' +
    '' +
    '<path d="M636.8 803.2v-27.7c145.3 0 263.5-118.2 263.5-263.5S782.1 248.5 636.8 248.5v-27.7C797.4 220.8 928 351.4 928 512S797.4 803.2 636.8 803.2z"  ></path>' +
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