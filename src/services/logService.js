import winston from 'winston'

function init() {
    process.on('uncaughtException', (ex) => {
        console.log('WE GOT AN UNCAUGHT EXCEPTION!');
        winston.error(ex.message, ex)
        process.exit(1);
    })

    process.on('unhandledRejection', (ex) => {
        console.log('WE GOT AN UNHANDLED REJECTION!');
        winston.error(ex.message, ex)
        process.exit(1);
    })


    winston.add(new winston.transports.File({
        filename: 'logFile.log'
    }))
    winston.add(new winston.transports.Console({
        colorize: true,
        prettyPrint: true
    }))
}

function log(error) {
    winston.error(error)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    init,
    log
};