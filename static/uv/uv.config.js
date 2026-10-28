self.__uv$config = {
    prefix: '/uv/',
    bare: [
        'https://tomp.app',
        'https://radon.games',
        'https://p7.de'
    ],
    encodeUrl: Ultrawave.codec.xor.encode,
    decodeUrl: Ultrawave.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js'
};
