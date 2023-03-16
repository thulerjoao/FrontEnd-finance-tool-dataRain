import { toast } from 'react-hot-toast';
import io from 'socket.io-client';
import { useAuth } from './contexts/auth';
import { NewNotificationPayload } from './types/interface';

const token = localStorage.getItem('token');
  const socket = io('https://back-btc-finance-tool-production.up.railway.app/', {
    auth: {
      token,
    },
  });

socket.on('connect', () => {
    // console.log('Conectado ao servidor Socket.io');
    socket.on('connection', (data: any) => {
        // console.log(data);
    });
  
      socket.on('new-notification', (data: NewNotificationPayload) => {
        const { getNotifications } = useAuth();
        getNotifications()
      });


    
  });

export default socket;