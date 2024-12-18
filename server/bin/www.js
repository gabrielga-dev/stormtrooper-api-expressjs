#!/usr/bin/env node
import app from '../app.js'
import debug from 'debug'
import cluster from 'cluster'
import os from 'os'
import dnscache from 'dnscache'

dnscache({
    "enabled": true,
    "ttl": 300,
    "cachesize": 1000
})

const cpus = os.cpus()
const log = debug('livro_nodejs:www')
const onWorkerError = (code, signal) => log(code, signal)
//run: ps aux | grep node
//to check which processes are running then run kill <process_id>
//to trigger the rising process of the new workers
if (cluster.isMaster) {
    cpus.forEach(_ => {
        const worker = cluster.fork()
        worker.on('error', onWorkerError)
    })
    cluster.on('exit', (err) => {
        const newWorker = cluster.fork()
        newWorker.on('error', onWorkerError)
        log('New Worker rises', newWorker.process.pid)
    })
} else {
    const server = app.listen(3000, () => log('Server started'))
    server.on('error', err => log(err))
}