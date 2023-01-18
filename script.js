window.onload=function onloadFunction() {
    console.log('loading.......');
    fetchHogwartStudents();
    fetchHogwartStaffs();
    fetchGryffindorHouse();
    fetchHufflepuffHouse();
    fetchRavenclawHouse();
    fetchSlytherinHouse();
    fetchSpells();
}


/*
====================================== HogwartStudents =========================================================
*/


let HogwartStudents=[];
/*
    Below function fetches Hogwart Students details
*/
const fetchHogwartStudents=async () => {
    const studentsUrl='https://hp-api.onrender.com/api/characters/students';
    const response=await fetch(studentsUrl);
    const result=await response.json();
    HogwartStudents=[...result];
    renderHogwartStudents(HogwartStudents);
}
/*
    Below function renders the Hogwart students details on the web page
*/
const renderHogwartStudents=(data) => {
    let hogwartStudentDiv=document.getElementById('hogwartStudentDiv');
    hogwartStudentDiv.innerHTML='';
    data.map((element) => {
        let conditionCheck1=(element.actor!=="")&&(element.name!=="")&&(element.gender!=="")&&(element.image!=="");
        if(conditionCheck1) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <div class="card-header text-center">${element.name}</div>
                            <img src=${element.image} class="card-img-top rounded my-1" alt=${element.name}>
                            <div class="card-body">
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Actor</th>
                                                <td>${element.actor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>${element?.gender==='male'? '<i class="fa-solid fa-mars-stroke"></i>':'<i class="fa-solid fa-venus"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>${element.dateOfBirth!==""? element.dateOfBirth:'19-09-1979'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Alive</th>
                                                <td>${element?.alive===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">wizard</th>
                                                <td>${element?.wizard===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">House</th>
                                                ${(element.house==="Gryffindor"&&'<td class="houseGryffindor">Gryffindor</td>')||(element.house==="Slytherin"&&'<td class="houseSlytherin">Slytherin</td>')||(element.house==="Hufflepuff"&&'<td class="houseHufflepuff">Hufflepuff</td>')||(element.house==="Ravenclaw"&&'<td class="houseRavenclaw">Ravenclaw</td>')||(element.house===""&&'<td class="houseRavenclaw">Ravenclaw</td>')}                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">Ancestry</th>
                                                <td>${element.ancestry!==""? element.ancestry:'muggle born'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Wand</th>
                                                <td>
                                                    <span><b>${element.wand.wood!==""? element.wand.wood:'vine'}</b></span><br>
                                                    <span><b>${element.wand.core!==""? element.wand.core:'dragon heartstring'}</b></span><br>
                                                    <span><b>${element.wand.length!==null? element.wand.length:'10'}</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStudent</th>
                                                <td>${element?.hogwartsStudent===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
            hogwartStudentDiv.append(colDiv);
        }
    })
}


/*
====================================== Hogwart Staffs =========================================================
*/


let HogwartStaffs=[];
/*
    Below function fetches Hogwart Staffs details
*/
const fetchHogwartStaffs=async () => {
    const staffsUrl='https://hp-api.onrender.com/api/characters/staff';
    const response=await fetch(staffsUrl);
    const result=await response.json();
    HogwartStaffs=[...result];
}
let pillsCharactersTab2=document.getElementById('pills-characters-tab-2');
pillsCharactersTab2.addEventListener('click', function() {
    renderHogwartStaffs(HogwartStaffs);
})
/*
    Below function renders the Hogwart staffs details on the web page
*/
const renderHogwartStaffs=(data) => {
    let hogwartStaffDiv=document.getElementById('hogwartStaffDiv');
    hogwartStaffDiv.innerHTML='';
     data.map((element) => {
         let conditionCheck1=(element.actor!=="")&&(element.name!=="")&&(element.gender!=="")&&(element.image!=="");
        if(conditionCheck1) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <div class="card-header text-center">${element.name}</div>
                            <img src=${element.image} class="card-img-top rounded my-1" alt=${element.name}>
                            <div class="card-body">
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Actor</th>
                                                <td>${element.actor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>${element?.gender==='male'? '<i class="fa-solid fa-mars-stroke"></i>':'<i class="fa-solid fa-venus"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>${element.dateOfBirth!==""? element.dateOfBirth:'19-09-1979'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Alive</th>
                                                <td>${element?.alive===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">wizard</th>
                                                <td>${element?.wizard===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">House</th>
                                                ${(element.house==="Gryffindor"&&'<td class="houseGryffindor">Gryffindor</td>')||(element.house==="Slytherin"&&'<td class="houseSlytherin">Slytherin</td>')||(element.house==="Hufflepuff"&&'<td class="houseHufflepuff">Hufflepuff</td>')||(element.house==="Ravenclaw"&&'<td class="houseRavenclaw">Ravenclaw</td>')||(element.house===""&&'<td class="houseRavenclaw">Ravenclaw</td>')}                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">Ancestry</th>
                                                <td>${element.ancestry!==""? element.ancestry:'muggle born'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Wand</th>
                                                <td>
                                                    <span><b>${element.wand.wood!==""? element.wand.wood:'vine'}</b></span><br>
                                                    <span><b>${element.wand.core!==""? element.wand.core:'dragon heartstring'}</b></span><br>
                                                    <span><b>${element.wand.length!==null? element.wand.length:'10'}</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStaff</th>
                                                <td>${element?.hogwartsStaff===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
            hogwartStaffDiv.append(colDiv);
        }
    })
}


/*
====================================== Gryffindor House =========================================================
*/


let GryffindorHouseArray=[];
/*
    Below function fetches Gryffindor House details
*/
const fetchGryffindorHouse=async () => {
    const GryffindorHouseUrl='https://hp-api.onrender.com/api/characters/house/gryffindor';
    const response=await fetch(GryffindorHouseUrl);
    const result=await response.json();
    GryffindorHouseArray=[...result];
}

let pillsHousesTab1=document.getElementById('pills-houses-tab-1');
pillsHousesTab1.addEventListener('click', function() {
    renderGryffindorHouse(GryffindorHouseArray);
})
/*
    Below function renders the Gryffindor House details on the web page
*/
const renderGryffindorHouse=(data) => {
    let GryffindorDiv=document.getElementById('GryffindorDiv');
    GryffindorDiv.innerHTML='';
    data.map((element) => {
        let conditionCheck1=(element.actor!=="")&&(element.name!=="")&&(element.gender!=="")&&(element.image!=="");
        if(conditionCheck1) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <div class="card-header text-center">${element.name}</div>
                            <img src=${element.image} class="card-img-top rounded my-1" alt=${element.name}>
                            <div class="card-body">
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Actor</th>
                                                <td>${element.actor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>${element?.gender==='male'? '<i class="fa-solid fa-mars-stroke"></i>':'<i class="fa-solid fa-venus"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>${element.dateOfBirth!==""? element.dateOfBirth:'19-09-1979'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Alive</th>
                                                <td>${element?.alive===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">wizard</th>
                                                <td>${element?.wizard===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">House</th>
                                                ${element.house==="Gryffindor"&&'<td class="houseGryffindor">Gryffindor</td>'}                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">Ancestry</th>
                                                <td>${element.ancestry!==""? element.ancestry:'muggle born'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Wand</th>
                                                <td>
                                                    <span><b>${element.wand.wood!==""? element.wand.wood:'vine'}</b></span><br>
                                                    <span><b>${element.wand.core!==""? element.wand.core:'dragon heartstring'}</b></span><br>
                                                    <span><b>${element.wand.length!==null? element.wand.length:'10'}</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStudent</th>
                                                <td>${element?.hogwartsStudent===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStaff</th>
                                                <td>${element?.hogwartsStaff===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
            GryffindorDiv.append(colDiv);
        }
    })
}



/*
====================================== Hufflepuff House =========================================================
*/


let HufflepuffHouseArray=[];
/*
    Below function fetches Hufflepuff House details
*/
const fetchHufflepuffHouse=async () => {
    const HufflepuffHouseUrl='https://hp-api.onrender.com/api/characters/house/hufflepuff';
    const response=await fetch(HufflepuffHouseUrl);
    const result=await response.json();
    HufflepuffHouseArray=[...result];
}
let pillsHousesTab2=document.getElementById('pills-houses-tab-2');
pillsHousesTab2.addEventListener('click', function() {
    renderHufflepuffHouse(HufflepuffHouseArray);
})
/*
    Below function renders the Hufflepuff House details on the web page
*/
const renderHufflepuffHouse=(data) => {
    let HufflepuffDiv=document.getElementById('HufflepuffDiv');
    HufflepuffDiv.innerHTML='';
    data.map((element) => {
        let conditionCheck1=(element.actor!=="")&&(element.name!=="")&&(element.gender!=="")&&(element.image!=="");
        if(conditionCheck1) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <div class="card-header text-center">${element.name}</div>
                            <img src=${element.image} class="card-img-top rounded my-1" alt=${element.name}>
                            <div class="card-body">
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Actor</th>
                                                <td>${element.actor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>${element?.gender==='male'? '<i class="fa-solid fa-mars-stroke"></i>':'<i class="fa-solid fa-venus"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>${element.dateOfBirth!==""? element.dateOfBirth:'19-09-1979'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Alive</th>
                                                <td>${element?.alive===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">wizard</th>
                                                <td>${element?.wizard===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">House</th>
                                                ${element.house==="Hufflepuff"&&'<td class="houseHufflepuff">Hufflepuff</td>'}                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">Ancestry</th>
                                                <td>${element.ancestry!==""? element.ancestry:'muggle born'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Wand</th>
                                                <td>
                                                    <span><b>${element.wand.wood!==""? element.wand.wood:'vine'}</b></span><br>
                                                    <span><b>${element.wand.core!==""? element.wand.core:'dragon heartstring'}</b></span><br>
                                                    <span><b>${element.wand.length!==null? element.wand.length:'10'}</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStudent</th>
                                                <td>${element?.hogwartsStudent===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStaff</th>
                                                <td>${element?.hogwartsStaff===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
            HufflepuffDiv.append(colDiv);
        }
    })
}



/*
====================================== Ravenclaw House =========================================================
*/


let RavenclawHouseArray=[];
/*
    Below function fetches Ravenclaw House details
*/
const fetchRavenclawHouse=async () => {
    const RavenclawHouseUrl='https://hp-api.onrender.com/api/characters/house/ravenclaw';
    const response=await fetch(RavenclawHouseUrl);
    const result=await response.json();
    RavenclawHouseArray=[...result];
}
let pillsHousesTab3=document.getElementById('pills-houses-tab-3');
pillsHousesTab3.addEventListener('click', function() {
    renderRavenclawHouseHouse(RavenclawHouseArray);
})
/*
    Below function renders the RavenclawHouse House details on the web page
*/
const renderRavenclawHouseHouse=(data) => {
    let RavenclawDiv=document.getElementById('RavenclawDiv');
    RavenclawDiv.innerHTML='';
    data.map((element) => {
        let conditionCheck1=(element.actor!=="")&&(element.name!=="")&&(element.gender!=="")&&(element.image!=="");
        if(conditionCheck1) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <div class="card-header text-center">${element.name}</div>
                            <img src=${element.image} class="card-img-top rounded my-1" alt=${element.name}>
                            <div class="card-body">
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Actor</th>
                                                <td>${element.actor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>${element?.gender==='male'? '<i class="fa-solid fa-mars-stroke"></i>':'<i class="fa-solid fa-venus"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>${element.dateOfBirth!==""? element.dateOfBirth:'19-09-1979'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Alive</th>
                                                <td>${element?.alive===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">wizard</th>
                                                <td>${element?.wizard===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">House</th>
                                                ${element.house==="Ravenclaw"&&'<td class="houseRavenclaw">Ravenclaw</td>'}                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">Ancestry</th>
                                                <td>${element.ancestry!==""? element.ancestry:'muggle born'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Wand</th>
                                                <td>
                                                    <span><b>${element.wand.wood!==""? element.wand.wood:'vine'}</b></span><br>
                                                    <span><b>${element.wand.core!==""? element.wand.core:'dragon heartstring'}</b></span><br>
                                                    <span><b>${element.wand.length!==null? element.wand.length:'10'}</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStudent</th>
                                                <td>${element?.hogwartsStudent===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStaff</th>
                                                <td>${element?.hogwartsStaff===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
            RavenclawDiv.append(colDiv);
        }
    })
}


/*
====================================== Slytherin House =========================================================
*/



let SlytherinHouseArray=[];
/*
    Below function fetches Slytherin House details
*/
const fetchSlytherinHouse=async () => {
    const SlytherinHouseUrl='https://hp-api.onrender.com/api/characters/house/slytherin';
    const response=await fetch(SlytherinHouseUrl);
    const result=await response.json();
    SlytherinHouseArray=[...result];
}
let pillsHousesTab4=document.getElementById('pills-houses-tab-4');
pillsHousesTab4.addEventListener('click', function() {
    renderSlytherinHouseHouse(SlytherinHouseArray);
})
/*
    Below function renders the SlytherinHouse House details on the web page
*/
const renderSlytherinHouseHouse=(data) => {
    let SlytherinDiv=document.getElementById('SlytherinDiv');
    SlytherinDiv.innerHTML='';
    data.map((element) => {
        let conditionCheck1=(element.actor!=="")&&(element.name!=="")&&(element.gender!=="")&&(element.image!=="");
        if(conditionCheck1) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <div class="card-header text-center">${element.name}</div>
                            <img src=${element.image} class="card-img-top rounded my-1" alt=${element.name}>
                            <div class="card-body">
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Actor</th>
                                                <td>${element.actor}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>${element?.gender==='male'? '<i class="fa-solid fa-mars-stroke"></i>':'<i class="fa-solid fa-venus"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>${element.dateOfBirth!==""? element.dateOfBirth:'19-09-1979'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Alive</th>
                                                <td>${element?.alive===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">wizard</th>
                                                <td>${element?.wizard===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">House</th>
                                                ${element.house==="Slytherin"&&'<td class="houseSlytherin">Slytherin</td>'}                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">Ancestry</th>
                                                <td>${element.ancestry!==""? element.ancestry:'muggle born'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Wand</th>
                                                <td>
                                                    <span><b>${element.wand.wood!==""? element.wand.wood:'vine'}</b></span><br>
                                                    <span><b>${element.wand.core!==""? element.wand.core:'dragon heartstring'}</b></span><br>
                                                    <span><b>${element.wand.length!==null? element.wand.length:'10'}</b></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStudent</th>
                                                <td>${element?.hogwartsStudent===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">HogwartStaff</th>
                                                <td>${element?.hogwartsStaff===true? '<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-xmark"></i>'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
            SlytherinDiv.append(colDiv);
        }
    })
}



/*
====================================== Spells =========================================================
*/



let SpellsArray=[];
/*
    Below function fetches Hogwart Spells details
*/
const fetchSpells=async () => {
    const SpellsUrl='https://hp-api.onrender.com/api/spells';
    const response=await fetch(SpellsUrl);
    const result=await response.json();
    SpellsArray=[...result];
}
let pillsSpellsTab=document.getElementById('pills-spells-tab');
pillsSpellsTab.addEventListener('click', function() {
    renderSpells(SpellsArray);
})
/*
    Below function renders the Hogwart spells details on the web page
*/
const renderSpells=(data) => {
    let SpellsDiv=document.getElementById('SpellsDiv');
    SpellsDiv.innerHTML='';
    data.map((element) => {
        let tableRow=document.createElement("tr");
        tableRow.innerHTML=`<th scope="row">${element.name}</th>
                                <td>${element.description}</td>`;
        SpellsDiv.append(tableRow);
    })
}


