// save as generateReport.js
const fs = require('fs')

const report = JSON.parse(fs.readFileSync('report.json', 'utf-8'))

let html = `
<html>
<head><title>Artillery Report</title></head>
<body>
<h1>Artillery Test Report</h1>
<p>Start: ${report.config?.startTime}</p>
<p>Duration: ${report.aggregate?.durationMs}ms</p>
<h2>Requests Summary</h2>
<table border="1" cellpadding="5" cellspacing="0">
<tr><th>Metric</th><th>Value</th></tr>
<tr><td>Total Requests</td><td>${report.aggregate?.requestsCompleted}</td></tr>
<tr><td>Failures</td><td>${report.aggregate?.errors}</td></tr>
<tr><td>Latency Avg (ms)</td><td>${report.aggregate?.latency?.mean}</td></tr>
</table>
</body>
</html>
`

fs.writeFileSync('report.html', html)
console.log('report.html generated!')
