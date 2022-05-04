exports.handler = async ({ ip }) =>  {
    console.log(`Running check on ${ip} at ${new Date()}`)
    return {
        ip,
        status: 'GOOD'
    };
}