

function Garage() {
    return (
    <>
        <h1> who lives in my garage? </h1>
        <Car color="red"/>
    </>
    
    
    );
}

function Car(props) {
    return <h3>Hi im {props.color} car</h3>;
}

export default Garage;



const myArray = ["a", "b", "c"];

const x = 11;
const y = 5;

let text = "goodbye";

if(x<10){
    text = "helloeoeleo";
}


const myElement = (<>
                   <input type="text" />
                   <h1 className="myclass"> React is {text} lolo </h1>
                   <h2>{(x) < 10 ? "jony" : "tony"} alalalalalal</h2>
                   </>);

const myElementWithoutJSX = React.createElement('h1', {}, 'I do not use JSX!');

const myList = myArray.map((item) => <p>{item}</p>)
                            

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Garage />);





import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();
