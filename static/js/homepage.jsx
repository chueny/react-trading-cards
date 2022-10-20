'use strict';

function Homepage() {
  return (
  <div>
    <div>Welcome, user! </div>
    <a href="/cards"> Link to the cards</a>
    <img src="/static/img/balloonicorn.jpg"/>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
