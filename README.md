# hackerNewsBoard

<strong>
Backend: 
-> Grabs list of News ID & News content from HackerNews API
-> Loads the data into MongoDB
-> Django REST API that exposes endpoints 

Notable Functions:

-> Backend - loadData():
Run Time complexity of O(N) for fetching data from APIs and loading them into DB
Enters only new data into table

-> Front end - RefereshList()
function is called each time an API request is completed. 
It updates the NEWS list to display the most recent list of added items.


Frontend: 
-> Performs get request using Axios on exposed endpoint
-> Sets the state and maps result into a tabe

Unit Tests:
-> Backend - Test suit for models and views
-> Frontend - Test sit for axios get request
</strong>
