// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topInfo = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
        Topics(item)
    });
})
.catch(error => {
    console.log("Data did not return", error);
});


function Topics(top){
    const topicTab = document.createElement('div');
    topicTab.classList.add('tab');
    topicTab.textContent = top;

    topInfo.append(topicTab)

return topicTab
}


