import Tracker from '@openreplay/tracker/cjs';
import { useEffect } from "react";

const tracker = new Tracker({
  projectKey: "TbgN5cOfqS8Z3gVg9hc1",  
});

function HomePage() {
  
  useEffect(() => { // use componentDidMount in case of React Class Component
    tracker.start();
  }, []);
  
  tracker.setUserID('Ini Suharyadi');

  return <div>
            <center>Welcome to Next.js!<br /><hr />
              <label htmlFor="cars">Apakah Open Replay Cucok ? : </label><br /><br />

              <textarea id="w3review" name="w3review" rows="4" cols="50">
              
              </textarea>
            </center>
          </div>
}

export default HomePage