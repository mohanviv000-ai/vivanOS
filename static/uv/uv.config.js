self.__uv$config = {
    prefix: '/static/uv/service/',
    bare: '/static/uv/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
    /**
     * Public Wisp fallback router for Vercel deployments.
     * Note: Change this trail link if a school firewall blocks the endpoint.
     */
    wisp: "wss://wisp.mercurynetwork.org/",
};
