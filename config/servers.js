// Server ports bind configuration
// Each server is named server on specified address and port

module.exports = {
  www: {
    protocol:      'http',
    address:       '127.0.01',
    port:          80,
    nagle:         false,        // Nagle algorithm, default true, set to false for latency optimization
    slowTime:      '1s'
  },
};