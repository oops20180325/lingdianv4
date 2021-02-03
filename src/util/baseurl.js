let baseapi = '';
let basemqtt = '';

process.env.NODE_ENV==='development'?baseapi = ''  :baseapi = '';
process.env.NODE_ENV==='development'?basemqtt = ''  :basemqtt = '';

export {
    baseapi,
    basemqtt
}