self.__cv$config = {
    prefix: '/network/',
    bare: '/api5/',
    encodeUrl:  ClassicUV.codec.xor.encode,
    decodeUrl: ClassicUV.codec.xor.decode,
    handler: '/dist/handler.js?v=4',
    bundle: '/dist/bundle.js?v=4',
    config: '/dist/config.js?v=4',
    sw: '/dist/sw.js?v=4',
};