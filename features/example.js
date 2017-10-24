/*
 *   COPY THIS FILE TO CREATE YOUR OWN FEATURE
 *   DON'T PUT YOUR FEATURE WITHIN THIS FILE
 */

const init = function(config, client) {

}

let count = 0
//client is used to send stuff
//channel is needed to send stuff using client, but is also the channel's name where the line came from
//line is the full message the user sent
//from is the nick of the user who sent the line
// eslint-disable-next-line no-unused-vars
const hello = function(client, channel, from, line) {
    //console.log(line); //debug
    count++
    const ret = 'Feature has been ran ' + count + ' times.'
    client.say(channel, ret)
}

module.exports = {
    name: 'test', //not required atm iirc
    commands: {
        '!test': hello,
    },
    init: init
}