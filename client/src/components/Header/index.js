import React, { useState } from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Header = ({onLogout}) => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);

  let isAppInstalled = false;

  if (window.matchMedia('(display-mode: standalone)').matches || appAccepted) {
    isAppInstalled = true;
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    setPromptEvent(e);
  });

  const installApp = () => {
    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        setAppAccepted(true);
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  };

  return (
    <Menu stackable inverted style={{ backgroundColor: 'rgb(80, 45, 30)' }}>
      <Menu.Item header>
        <h1>E-Testing</h1>
      </Menu.Item>
      
      <Menu.Item position="right">
        <Button
          secondary
          size="big"
          icon="log out"
          labelPosition="left"
          content="Logout"
          onClick={onLogout}
          style={{ backgroundColor: 'rgb(200, 45, 30)' }}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
