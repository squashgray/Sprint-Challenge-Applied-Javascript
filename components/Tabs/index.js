// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




const tabLocation = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        response.data.topics.forEach(item=> {
            tabLocation.append(createTab(item))
        })
    })

function createTab(topic){
    const div1 = document.createElement('div');
    div1.classList.add('tab');
    div1.textContent = topic;

    return div1;
} 

