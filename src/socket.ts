import io from 'socket.io-client';

const token = localStorage.getItem('token');
  const socket = io('https://back-btc-finance-tool-production.up.railway.app/', {
    auth: {
      token,
    },
  });

socket.on('connect', () => {
    console.log('Conectado ao servidor Socket.io');
    socket.on('connection', (data: any) => {
        console.log(data);
    });
    
  });

export default socket;