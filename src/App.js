import "./App.css";
import React from "react";

function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);
   const handleClick  = () => {
    setIsGoingOut((prevState) => !prevState);
   }
  /**cx
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  // const isGoingOut = false

  // Use ternary here
  // if(isGoingOut === true) {
  //     answer = "Yes"
  // } else {
  //     answer = "No"
  // }

  /**
   * Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  // this replaces the if else statement above

  // const answer = isGoingOut ? "Yes" : "No"

  // In this code, we use the useState hook to initialize the isGoingOut state as a boolean with an initial value of false. When the div.state--value is clicked, the handleClick function is called, which updates the isGoingOut state by flipping its boolean value using the !prevState syntax.

  // The displayed text inside the div.state--value will update dynamically based on the isGoingOut state. If isGoingOut is true, it will show "Yes"; otherwise, it will show "No".
  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      
      {/* // this wokrs nelow but scrimba did it different see below  */}
      {/* function changeMind() {
        setIsGoingOut
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>Yes</h1>
            </div> */}

            {/* exclmatation mark means RETURNIGN THE OPPOSITE OF WHAT WAS DISPLAYED  */}
      
      <div className="state--value" onClick={handleClick}>
        {/* // put the ternary operator inside the brackets, does the samthing instead of call answer in h1 */}
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  );
}

export default App;
