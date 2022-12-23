import React from "react";


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {
//             this.props.list.map((item, index) => 
//               <li key={item.id} 
//                 className={this.props.liIndex === index ? 'active' : ''}
//                 onClick={() => {this.tabClick(index)}}>{item.text}</li>
//             )
//           }
//         </ul>
//       </div>
//     )
//   }
//   tabClick(index){
//     this.props.myevent(index);
//   }
// }

const App = (props) => {
  return (
    <div>
      <ul>
        {
          props.list.map((item, index) => 
            <li key={item.id} 
              className={props.liIndex === index ? 'active' : ''}
              onClick={() => props.myevent(index)}>{item.text}</li>
          )
        }
      </ul>
    </div>
  )
  
}

export default App