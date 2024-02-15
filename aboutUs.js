function get(id){
  return document.getElementById(id);
}

//https://soundingsbhs.wixsite.com/bayside-high-school/4


function init(){
  $.ajaxSetup({async: false});
  link = " https://mag-website-cards-demo.albertynelim.repl.co/refrence%20sheet";
  data = $.getJSON(link).responseJSON;
  get("output").innerHTML = cards(data); 
  // the output id is loaded with cards of all cards 
  get("results").innerHTML = data.length + " result(s) found";

  get("Role").innerHTML = fillDropDown("Role");
  get("SchoolYear").innerHTML = fillDropDown("SchoolYear");
  get("Name").innerHTML = fillDropDown("Name");

}

function fillDropDown(key){
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let field of list){
      build += `<option>${field}</option>`;
  }
  return build;
}


 function filter(schools, key, value){
    let list = []; 
    for (let i = 0; i < schools.length; i++){
      let school = schools[i]; 
      if (school[key]== value){
         list.push(school) 
      }
   }
     return list;
  }


function card( school ){
  let build = "";
  build += `<div class="card">`;
  build += `     <h3>${school.Name}</h3>`;
  build += `     <p class="subheadings"> ${school.Role} </p>`; 
  build += `<p style="font-style: italic; color: gray">${school.Quote} </p>`;
  build += `     <p> School Year: ${school.SchoolYear}</p> <br>`;
  build += `</div>`;
  return build;
}




 function cards (school){
    let build = ""; 
    for (let i = 0; i< school.length; i++){
      build += card(school[i]);
    }
   return build ; 
 }


function filterByRoleAndYear(){
  let Role = get("Role").value; 
  let SchoolYear = get("SchoolYear").value; 
  subdata = filter(data, "Role",Role );
  subdata = filter(subdata, "SchoolYear",SchoolYear);
  get("results").innerHTML = subdata.length + " results found.";
  get("output").innerHTML = cards( subdata );
}



function filterByName(){ 
  let Name = get("Name").value;

  let subdata = filter(data, "Name", Name );
  get("results").innerHTML = subdata.length + " results found.";
  get("output").innerHTML = cards( subdata );
}






