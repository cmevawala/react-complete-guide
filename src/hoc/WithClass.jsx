import React from "react";

// HOC : First Method
// const withClass = (props) => {
//     return (
//         <div className={props.classes}>
//             {props.children}
//         </div>
//     );
// }

// HOC : Second Method
const withClass = (WrappedComponent, className) => {
  return () => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
