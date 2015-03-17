##Coding Details
- I used `Modernizr`, `Bootstrap`, and `jQuery` 
- I concentrated more on the `Javascript` than the `CSS`, as I wanted to get the harder stuff out of the way. `CSS` is my strength.  I didn't utilise the full design, but segregated where I could, so it was clear what is what on the page.
- **Design Mockups** show different types of files/documents, but `JSON` had random names, so in a real-world scenario, I'd add specific classnames for the actual filetypes as opposed to the generic **filetype**, and assign the relevant icon.
- `Tooltips` are from the `Bootstrap` framework, so you have to click on the link again to close it.  It puts the layout out if you click on all of them, and they all overlap each other.  This can always be refined, would have changed the trigger to *hover*.
- Originally, I coded the app to store the entire `JSON` file into the browser's memory, using the browser's `LocalStorage`, of course, there is a limit, but for small tasks, it's useful.  I figured, that I would try to reduce the calls based on every link, but then found it difficult (and time consuming) to traverse the entire tree, to display as `HTML`, as opposed to calling the API with the param, so I restarted the task.  Figured, I should follow the actual requirements of calling the API for every click, duh!

##Feedback on the test:
- It seemed like a simple challenge, but was more than I expected. As a coding test you feel that you must execute all the tasks to even be in the running for the role.  Even though, it claims that you can explain yourself in a few paragraphs, I do feel that it's a good test to get a preview of how people code.
- Due to time constraints, I'm just really busy at the moment, I would have added some 'nice to haves', such as:
  1. a limit on the length of the folder/document name
  2. used a repository, so you could see my check-ins.
  3. used a css preprocessor
  4. minified the html, js and css files (but, then again, that defeats the purpose of you guys reviewing the code)
  5. It has made me aware I should use Yeoman or something similar, to create a base web app with the technology/libraries I would normally use to start with.
