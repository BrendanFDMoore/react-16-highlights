import React from 'react';
import ReactDOM from 'react-dom';

const NotificationPortal = ({messages, clearMessages}) => 
  ReactDOM.createPortal(
    (<React.Fragment>
      {messages.map(msg => <div key={msg}>{msg}</div>)}
      {messages.length > 0 && <div>
        <button onClick={clearMessages} type='button'>
          Clear messages
        </button>
      </div>}
    </React.Fragment>),
    document.getElementById('notification-area'),
  );

class PortalDemo extends React.Component {
  constructor(props) {
    super(props);
    // Setup DOM target
    const notificationArea = document.createElement('div')
    notificationArea.setAttribute("id", "notification-area");
    notificationArea.setAttribute(
      "style", "position:fixed;top: 0;z-index: 1000;"
    );
    const appRoot = document.getElementById('root');
    appRoot.appendChild(notificationArea);

    this.state = { notifications: [], count: 1, enable: false };
    this.addNotification = this.addNotification.bind(this);
    this.clearNotifications = this.clearNotifications.bind(this);
    this.toggleEnable = this.toggleEnable.bind(this);
  }
  toggleEnable() {
    this.setState({ enable: !this.state.enable })
  }
  addNotification = () =>
    this.setState({
      notifications: [
        ...(this.state.notifications),
        `Message ${this.state.count}`,
      ],
      count: this.state.count + 1,
    });
  clearNotifications = () =>
    this.setState({
      notifications: [],
    }); 
  
  render() {
    const { notifications, enable } = this.state;
    return (
      <div>
        <div>This is the demo parent beginning.</div>
        <button onClick={this.toggleEnable} type='button'>
          {enable ? 'Disable Portal' : 'Enable Portal'}
        </button>
        <button onClick={this.addNotification} type='button'>
          Add a message
        </button>
        {enable && <NotificationPortal
          messages={notifications}
          clearMessages={this.clearNotifications}
        />}
        <div>This is the demo parent end.</div>
      </div>
    )
  }
}

export default PortalDemo;
