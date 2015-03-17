## The Task
Your task is to create an application to view a list of documents.

An API has been defined that will return a list of folders and documents. Its expected that only the top level documents are shown initially. When you click on a folder, it should query the API for more data and update the view accordingly.

The purpose of this task is two fold:

  - We want to gauge what your code level is
  - But more importantly we want to see how you think and communicate.

To that end, you should consider how you would implement these features, and write a quick paragraph (or just implement it if you want) on each of them.

  - Have a search input that will filter results to those that have its name or number match the search field
  - Have a button that will expand all the children, and another that will collapse all the children
  - Have a context menu pop up that shows the file size of the document when clicked

Feel free to use any framework/libraries to do this task.
Also feel free to change the mock server located in /server however you see fit.

To get started, install NodeJS and then run (in the project folder):

```
npm install
node server/index.js
```
This will generate some dummy data to populate the api, as well as spin up a server at http://localhost:5000. Any files you put into the `client` folder will accessible.

API Definition:
```
/documents GET
  
  Gets the a collection of documents.

  Params:
    parentId - Gets the children of a particular parent. By default, it returns the top level documents.

  Returns:
    [
      {
        id : 4,
        parentId : 1,
        isFolder : false | true,
        name : "Name of the document",
        number : "Number of the document",
        fileSize : 1234556,
        children : [
          //List of this folder's children, if requested
        ]
      },
    ]
```

##Coding Details
- I used `Modernizr`, `Bootstrap`, and `jQuery` 
- I concentrated more on the `Javascript` than the `CSS`, as I wanted to get the harder stuff out of the way. `CSS` is my strength.  I didn't utilise the full design, but segregated where I could, so it was clear what is what on the page.
- **Design Mockups** show different types of files/documents, but `JSON` had random names, so in a real-world scenario, I'd add specific classnames for the actual filetypes as opposed to the generic **filetype**, and assign the relevant icon.
- `Tooltips` are from the `Bootstrap` framework, so you have to click on the link again to close it.  It puts the layout out if you click on all of them, and they all overlap each other.  This can always be refined, would have changed the trigger to *hover*.
- Originally, I coded the app to store the entire `JSON` file into the browser's memory, using the browser's `LocalStorage`, of course, there is a limit, but for small tasks, it's useful.  I figured, that I would try to reduce the calls based on every link, but then found it difficult (and time consuming) to traverse the entire tree, to display as `HTML`, as opposed to calling the API with the param, so I restarted the task.  Figured, I should follow the actual requirements of calling the API for every click, duh!

##Extra features
- **The search filter**, I would incorporate a jQuery plugin, such as Isotope, but that requires all the elements to be present on the page, which was my original problem, BUT if I wasn't using a plugin, I'd use some sort of regex to filter the json via the API URL and, probably, add more parameters, such as, the childrenIds, as it, currently, has the parentId parameter.
- **A button to collapse or show all the sub-directories and files**.  Truthfully, I wouldn't know how to implement this on top of the current code.  I would need some guidance on the best way to implement this.  I would assume you would need to traverse through the json, and spit out some HTML, and then use the show/hide function in jQuery.
- **context-menu pop up** implemented, onclick.

##Feedback on the test:
- It seemed like a simple challenge, but was more than I expected. As a coding test you feel that you must execute all the tasks to even be in the running for the role.  Even though, it claims that you can explain yourself in a few paragraphs, I do feel that it's a good test to get a preview of how people code.
- Due to time constraints, I'm just really busy at the moment, I would have added some 'nice to haves', such as:
  1. a limit on the length of the folder/document name
  2. used a repository, so you could see my check-ins.
  3. used a css preprocessor
  4. minified the html, js and css files (but, then again, that defeats the purpose of you guys reviewing the code)
  5. It has made me aware I should use Yeoman or something similar, to create a base web app with the technology/libraries I would normally use to start with.
