/**
 * Created by YOU on 2017/5/7.
 */
let data = [
  {
    name: '飙升榜',
    platforms: [
      {
        name: '网易音乐',
        url: 'http://222.24.63.118/v1/api/wangyiyun/biaoshengbang',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '百度音乐',
        url: 'http://222.24.63.118/v1/api/baidu/baidu_netsong',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '酷狗音乐',
        url: 'http://222.24.63.118/v1/api/kugou/kugou_biaoshengbang',
        data: [],
        menu: {
          song: true,
          loading: true
        }
      }
    ]
  },
  {
    name: '新歌榜',
    platforms: [
      {
        name: '网易音乐',
        url: 'http://222.24.63.118/v1/api/wangyiyun/xingebang',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '百度音乐',
        url: 'http://222.24.63.118/v1/api/baidu/baidu_newsong',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '酷狗音乐',
        url: 'http://222.24.63.118/v1/api/kugou/kugou_new_song',
        data: [],
        menu: {
          song: true,
          loading: true
        }
      }
    ]
  },
  {
    name: '原创榜',
    platforms: [
      {
        name: '网易音乐',
        url: 'http://222.24.63.118/v1/api/wangyiyun/yuanchuangbang',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '百度音乐',
        url: 'http://222.24.63.118/v1/api/baidu/baidu_originsong',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '酷狗音乐',
        url: 'http://222.24.63.118/v1/api/kugou/kugou_originsong',
        data: [],
        menu: {
          song: true,
          loading: true
        }
      }
    ]
  },
  {
    name: '热歌榜',
    platforms: [
      {
        name: '网易音乐',
        url: 'http://222.24.63.118/v1/api/wangyiyun/hot_song',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '百度音乐',
        url: 'http://222.24.63.118/v1/api/baidu/baidu_hotsong',
        data: [],
        menu: {
          song: true,
          artist: true,
          loading: true
        }
      },
      {
        name: '酷狗音乐',
        url: 'http://222.24.63.118/v1/api/kugou/kugou_top500',
        data: [],
        menu: {
          song: true,
          loading: true
        }
      }
    ]
  }
]

export default data
