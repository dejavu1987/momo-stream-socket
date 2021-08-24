let currentData = {
  topic: 'JavaScript Tutorial',
  chapter: 'Array Methods',
  section: 'map()'
};

module.exports = (io, socket) => {
  const setData = (data) => {
    currentData = data;
    io.emit('newData', currentData);
  };
  const getData = () => {
    socket.emit('currentData', currentData);
  };

  socket.on('set', setData);
  socket.on('get', getData);
};
