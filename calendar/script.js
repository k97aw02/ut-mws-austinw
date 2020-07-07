
              function setTime(){
                //get the current time
                  let hour = Number(moment().format("H")); //convert string to number
                  console.log(hour);
                  //loop through all the table rows
                  let rows = document.querySelectorAll("tr");
                  for (let row of rows){
                      let idTime = Number(row.id.slice(1)); //remove underscore character from id, then convert to a number
                    //	if the row id is before the current time, set its class to "past"
                      if (idTime < hour) row.className = "past";
                    //	if the row id is during the current time, set its class to "present"
                      else if (idTime === hour) row.className = "present";
                    //	if the row id is after the current time, set its class to "past"
                    else row.className = "future";
                    console.log(idTime)} } 
