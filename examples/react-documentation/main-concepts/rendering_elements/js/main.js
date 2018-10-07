function tick(){
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocalTimeString()}.</h2>
    </div>
  );
  const pointer = document.getElementById('root');
  ReactDOM.render(
    element,
    pointer
  )
}

setInterval(tick, 1000);
