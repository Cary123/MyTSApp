import logo from './logo.svg';
import './App.css';
import AA from './functionTest'
import { ComHoc, com } from './HocTest';
import ClassCom, { ClassComA } from "./ClassTest";

const HocTestA = ComHoc(com);
const HocTestB = ComHoc(ClassCom);
const HocTestC = ComHoc(ClassComA);
type ComponentAPropsType = Parameters<typeof com>[0];
const HocTestD = ComHoc<ComponentAPropsType>(com);

// class A extends Component<any, any> {
//   render() {
//     console.log(this.props)
//     return <div>-----Component Hello-----</div>
//   }
// }

const Me = (props: any) => {
  console.log(props)
  return <div>-----Function Hello-----</div>
}

function App() {
  const test = (a: number) => {
    return a * 2
  }

  // function test2(a: number): number {
  //   return a * 2
  // }

  const a0 = "AA01";
  const a1 = "AA02";
  const b0 = "BB01";
  const b1 = "BB02";
  const c0 = "CC01";
  const c1 = "CC02";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{test(8)}</div>
        <AA a0={a0} a1={a1} b0={b0} b1={b1} c0={c0} c1={c1} BBCom={Me}></AA>
        <HocTestA title={"My god"}></HocTestA>
        <HocTestB title={"My Godness"}></HocTestB>
        <HocTestC title={"My dog"} age={123}></HocTestC>
        <HocTestD title={"My cat"}></HocTestD>
      </header>
    </div>
  );
}

export default App;
