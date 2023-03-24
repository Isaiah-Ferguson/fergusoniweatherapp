let isLive = true;

const prod = 
{
    apiKey: 'c1383ee0cc29ba1dbd0bc30979382dd6',
    isLive: isLive
}

const dev = {
    apiKey: 'c1383ee0cc29ba1dbd0bc30979382dd6',
    isLive: !isLive
}

export {prod, dev};