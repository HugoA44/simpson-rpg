class Log {
  constructor() {
    this.log = [];
  }
  addLog(log) {
    this.log.push(log);

    const logBloc = document.getElementById("log-bloc");
    const logLine = document.createElement("p");
    logLine.innerHTML = log;
    logBloc.appendChild(logLine);
  }
  getLog() {
    return this.log;
  }
  clearLog() {
    this.log = [];
  }
}

export default Log;
