import $root from '../proto/proto'
let conn

export default function Connection() {
    console.log("Try to connect")
    conn = new WebSocket(`ws://im.jinzh.me/websocket?sessionId=${localStorage.getItem("token")}`)
    conn.onopen = function() {
        console.log("Connection succeeded")
        const Body = $root.lookupType("protu.Body")
        const Msg = $root.lookup("protu.Msg")
        let data = {}
        data.end = 2,
            data.msg = "liuruohui",
            data.time = new Date().getTime()
        let buffer1 = Body.encode(Msg.create(data)).finish()
        let message1 = Msg.decode(buffer1)
        conn.send(buffer1)

    }
    conn.onmessage = function(evt) {
        console.log('这里被触发了')
        console.log(evt)
    }
    conn.onerror = function(evt) {
        console.log("error:", evt)
    }
    return conn
}