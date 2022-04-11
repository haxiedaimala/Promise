let http = require('http')
let url = require('url')
let fs = require('fs')


// 创建一个服务器，并且监听3000端口
http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true)
    let city = ['北京', '上海', '深圳', '南京', '杭州', '广州', '香港', '台湾', '澳门', '新疆', '天津', '河北', '重庆', '四川', '呼鲁木齐']
    let weather = ['晴', '阴', '多云', '雷阵雨', '大雪', '小雪', '雾', '大雨', '下雨']

    switch (urlObj.pathname) {
        case '/getWeather':
            res.end(JSON.stringify({
                // 即便传参数为空也能随机传入城市
                city: (urlObj.query.city === 'undefined' || urlObj.query.city.length === 0) ? city[parseInt(Math.random() * city.length)] : urlObj.query.city,
                weather: weather[parseInt(Math.random() * weather.length)]
            }))
            break
        default:
            try {
                let pathname = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname
                res.end(fs.readFileSync(__dirname + pathname))
            } catch {
                res.writeHead(404, '404 Not Found')
                res.end('<h1>404 Not Found~~~</h1>')
            }
    }

}).listen(3000)
console.log('open http://localhost:3000')