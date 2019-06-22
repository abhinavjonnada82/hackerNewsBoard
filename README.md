# hackerNewsBoard

<strong>
Backend: Python Django 
-> Grabs list of News ID & News content from HackerNews API
-> Loads the data into MongoDB
-> Django REST API that exposes endpoints 

Frontend: React JS
-> Performs get request using Axios on exposed endpoint
-> Sets the state and maps result into a table

Notable Functions:

-> Backend - loadData():
Run Time complexity of O(N) for fetching data from APIs and loading them into DB
Enters only new data into table

-> Front end - RefereshList()
function is called each time an API request is completed. 
It updates the NEWS list to display the most recent list of added items.

Unit Tests:
-> Backend - Test suit for models and views
-> Frontend - Test sit for axios get request
</strong>

Backend:
![Screen Shot 2019-06-22 at 6 00 32 PM](https://user-images.githubusercontent.com/30497847/59969273-b1209600-9517-11e9-8e92-fda9c5fc535e.png)
Frontend:
![Screen Shot 2019-06-22 at 6 00 21 PM](https://user-images.githubusercontent.com/30497847/59969274-b251c300-9517-11e9-8b12-7b0de040b02f.png)

Unit Test:
Front end
![Screen Shot 2019-06-22 at 4 34 56 PM](https://user-images.githubusercontent.com/30497847/59969291-03fa4d80-9518-11e9-9e12-658c7bd92b72.png)

Issues:
-> Need to fix pagination
-> Need to take care of mongodb authentication in Unit Tests

