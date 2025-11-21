import Card from "./day2/Card";
import './App.css';

const App = ()=>{
    return(
        // 화면에 보여지는 영역 : JSX
        <div className="card-wrap">
        <Card file='img01' title='Day1' text='1번'/>
        <Card file='img02' title='Day2' text='2번'/>
        <Card file='img03' title='Day3' text='3번'/>
        </div>
    );
}
export default App;