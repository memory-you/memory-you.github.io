const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: 'love is blind',
      artist: '椎名林檎',
      url: 'http://music.163.com/song/media/outer/url?id=642439.mp3',
      cover:
        'http://p1.music.126.net/elir3LFHdIxocQ6wHICptw==/109951163320745445.jpg'
    },
    {
      name: '钟无艳',
      artist: '谢安琪',
      url: 'http://music.163.com/song/media/outer/url?id=308353.mp3',
      cover:
        'http://p1.music.126.net/jKdhcbQIjNTVRVVpc6INQA==/109951163610130313.jpg'
    },
    {
      name: '宙船(そらふね)',
      artist: 'TOKIO',
      url: 'http://music.163.com/song/media/outer/url?id=838903.mp3',
      cover:
        'http://p1.music.126.net/tBDOMEhMHTlWwB9bt73xiw==/2512384069492582.jpg'
    },
    {
      name: '一番綺麗な私を',
      artist: '中島美嘉',
      url: 'http://music.163.com/song/media/outer/url?id=624099.mp3',
      cover:
        'http://p1.music.126.net/Dv-wk9uRpwiHZL1ZOdbtWw==/109951163825340682.jpg'
    }
  ]
})
