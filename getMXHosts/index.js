exports.handler = async ({ domain }) =>  {
    return {
        domain,
        hosts: [
            {
                host: 'host 1',
                ips: ['123', '456', '789']
            },
            {
                host: 'host 2',
                ips: ['abc', 'def', 'ghi']
            }
        ]
    };
}