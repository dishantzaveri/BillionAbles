import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#28FF64',
  headerFontColor: '#0F092D',
  headerFontSize: '15px',
  botBubbleColor: '#28FF64',
  botFontColor: '#0F092D',
  userBubbleColor: '#28FF64',
  userFontColor: '#0F092D',
};

function SimpleForm() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello, I am a Chat Bot. What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
}

export default SimpleForm;