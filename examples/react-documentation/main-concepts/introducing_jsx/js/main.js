function formatName(user){
    return user.firstName + ' ' + user.lastName;
}


const user = {
    firstName: 'Aalamin',
    lastName: 'Mahamud'
};


const result = (
  <h1>
    Hello {formatName(user)}!
  </h1>
);
const element = document.getElementById('root');


ReactDOM.render(
  result,
  element
);
