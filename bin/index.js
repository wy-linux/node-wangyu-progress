class Progress {
    constructor(name, options) {
        if(!Object.prototype.toString.call(options).includes('Object')) {
            throw new Error('options has to be an object')
        } else if(typeof options.total !== 'number') {
            throw new Error('total has to be a number') 
        }
        this.name = name ?? 'progress'
        const availableSpace = process.stderr.columns - this.name.length - 7
        const width = options.width ?? 20
        this.width =  Math.min(width, availableSpace)
        this.total = options.total
        this.charComplete = options.charComplete ?? '='
        this.charIncomplete = options.charIncomplete ?? '-'
        this.current = 0
        this.complete = false
    }
    run(length) {
        if(this.complete) {
            this._stop()
            return 
        }
        length = length || 1
        this.current += length
        const ratio = Math.min(this.current / this.total, 1)
        const percent = Math.floor(ratio * 100);
        const completeLength = Math.floor(this.width * ratio);
        const complete = Array(completeLength + 1).join(this.charComplete) 
        const incomplete = Array(this.width - completeLength + 1).join(this.charIncomplete) 
        if(percent >= 100) {
            this.complete = true
        }
        let str = ''
        str += `${this.name}:[${complete}${incomplete}]${percent}%`
        process.stderr.cursorTo(0);
        process.stderr.clearLine(1);
        process.stderr.write(str);
    }
    _stop() {
        process.stderr.write('\n');
    }
}

module.exports = Progress
