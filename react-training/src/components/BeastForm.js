// class BeastForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.beastToRelease = {
//       value: this,
//     };
//     this.Submit = this.Submit.bind(this);
//   }
//   Submit(e) {
//     e.preventDefault();
//     unshackle(this.beastToRelease.value);
//   }
//   render() {
//     return (
//       <form onSubmit={this.Submit} id="beastForm">
//         <input type="text" id="beastToRelease" />
//         <button type="submit" id="submit"></button>
//       </form>
//     );
//   }
// }

// class BeastForm extends React.Component {
//   render() {
//     return (
//       <form
//         id="beastForm"
//         onSubmit={(e) => {
//           unshackle(this.beastToRelease.value);
//           e.preventDefault();
//         }}
//       >
//         <input
//           id="beastToRelease"
//           ref={(beastToRelease) => (this.beastToRelease = beastToRelease)}
//         />
//         <button id="submit" />
//       </form>
//     );
//   }
// }
