// const doubled = numbers.map(number => number * 2);
// console.log(doubled)

function DoubleNumberList(props) {
  const numbers = props.numbers;
  const list_of_numbers_multiplied_by_2 = numbers.map(
    number => {
      (
        <li key={number.toString()}>
          {number * 2}
        </li>
      );
    }
  );
  return (
    <ul>{list_of_numbers_multiplied_by_2}</ul>
  )
}

const numbers = [1,2,3,4,5];
const target = document.getElementById('root');
ReactDOM.render(
  <DoubleNumberList numbers={numbers} />,
  target
)
