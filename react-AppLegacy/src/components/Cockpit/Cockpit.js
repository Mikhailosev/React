import React, {useEffect,useRef, useContext} from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context'

const Cockpit =( props )=> {
const toggleBtnRef=useRef(null);
const authContext=useContext(AuthContext)
console.log(authContext.authenticated)
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect')
    toggleBtnRef.current.click()
    return()=>{
      console.log('[Cockpit.js] cleanUpEffect')
    }
  }, [])
  useEffect(()=>{
    console.log('[Cockpit.js] 2nd useEffect')
 return()=>{
      console.log('[Cockpit.js] 2nd cleanUpEffect')
    }
  })
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>And i am woking</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
     {<button onClick={authContext.login}>LogIn</button>}
    </div>
  );
};
export default React.memo(Cockpit);
