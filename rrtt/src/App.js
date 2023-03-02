/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
  // const style = {
  //   backgroundColor : 'blue' ,
  //   with:'100vw' ,
  //   height:'100px' ,
  //   fontSize : '50px',
  //   color : '#fff',
  //   fontWeight : '700',

  // }

  let user = "nanananan";
  // react에서 변수처럼 자료를 보관할 수 있는 state문법
  let [count, setCCCount] = useState(0);
  let [ccocc, setCcount] = useState(0);
  //변수에 들어있는 데이터 html에 넣기
  //jsx 중괄호 문법 사용
  // let list = 'DW 아카데미 503호'
  //한곳에다가 여러가지 자료를 저장하고 싶을때 Array[] 

  let [list , settitle] = useState(['DW아카데미 503호' , 'DW아카데미 202호' , 'DW아카데미 309호']);
  
  // function reseting(){

  // }

  
  return (
    <div className="App">
      <h1>Hello , yejin!</h1>
      <h1>Hello , {user}</h1>
      <p>This is a React App</p>

      <div>
        <p>클릭시 + {count}</p>
        <button
          onClick={() => {
            setCCCount(count + 1);
          }}
         style={{backgroundColor : 'yellow' , width : '200px' , height : '30px'}}>
          Click Me
        </button>

        <button onClick={()=>{
           setCCCount(count -1)
        }} style={{background : 'red' , width : '200px' , height : '30px'}}>
          Click Down
        </button>
      </div>

      <div className="list">
        <h4>{list[0]}</h4>
        <span>🤑{ccocc}</span>
        <button
          onClick={() => {
            setCcount(ccocc + 1);
          }}
         style={{backgroundColor : 'skyblue' , width : '200px' , height : '30px'}}>
          Click Click
        </button>

        <button onClick={()=>{
           setCcount(ccocc - 1);
        }} style={{backgroundColor : 'yellowgreen' , width : '200px' , height : '30px'}}>
          Click Down
        </button>
        <p>안녕하세요 . 저는 이예진 입니다.</p>
        
      </div>

      {/*  */}

      <div className="list">
        <h4>{list[1]}</h4>
        <span>🤑{ccocc}</span>
        <button
          onClick={() => {
            setCcount(ccocc + 1);
          }}
         style={{backgroundColor : 'skyblue' , width : '200px' , height : '30px'}}>
          Click Click
        </button>

        <button onClick={()=>{
           setCcount(ccocc - 1);
        }} style={{backgroundColor : 'yellowgreen' , width : '200px' , height : '30px'}}>
          Click Down
        </button>
        <p>안녕하세요 . 저는 이예진 입니다.</p>
        
      </div>

      {/*  */}

      <div className="list">
        <h4>{list[2]}</h4>
        <span>🤑{ccocc}</span>
        <button
          onClick={() => {
            setCcount(ccocc + 1);
          }}
         style={{backgroundColor : 'skyblue' , width : '200px' , height : '30px'}}>
          Click Click
        </button>

        <button onClick={()=>{
           setCcount(ccocc - 1);
        }} style={{backgroundColor : 'yellowgreen' , width : '200px' , height : '30px'}}>
          Click Down
        </button>
        <p>안녕하세요 . 저는 이예진 입니다.</p>
        
      </div>


      <div style={{ width:'200px' , height: '200px' , backgroundColor:'yellow'}}>
       <button onClick={()=>{
         let copy = [...list];
         copy[0] = '리액트 너무 재밌어요'
         console.log(list == copy)
         settitle(copy)
         console.log(list)
       }}>글제목변경하기</button>

        <button onClick={()=>{
          let copy = [...list];
         copy[1] = '동동구리 동동'
         console.log(list == copy)
         settitle(copy)
         console.log(list)
        }}
        >두번째</button>

        <button onClick={()=>{
          let cocopy = [...list]
          cocopy[0] = '503'
          cocopy[1] = '502'
          cocopy[2] = '501'
          settitle(cocopy)
        }}
        >글정렬</button>
      </div>
      
      
      
    </div>
  );
}

export default App;

// <div className='box' style={style}>
//         데이터 바인딩 형식

//           React 강의
//       </div>
//       <div>
//         <input type="text"  />
//         <div style={{color : 'red' , backgroundColor : 'yellow' , width : '100px' , height : '100px'}}>안녕하세요</div>
//       </div>

//
