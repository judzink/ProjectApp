# ProjectApp

## Breakdown

- Add Redux(thunk), add react router(v6)
- 2 pages will be needed (project page, project details(tasks))
- Project page

  - create form(only name field required by user)
  - list of projects (with basic info - name, create, tasks(number of tasks))
  - delete action btn(it wasnt said anything about cascade deleting so its not restricted to delete if tasks are in the project)

- Project details

  - create form(name,details,estimage)
  - list of tasks (with basic info, name,description,estimate)
  - delete action btn

- Added live server for basic API Calls

## Additional info

- Since it was a time factor a few things weren't added so ill just explain what additonal work i would have added
  - import axios and create a config file for it (much easier to control than regular fetch, less code ...)
  - more code separation/reusability (around the redux store, the current "slice" was the easiest atm)
  - i usually work with styled components and not css classes or at least useStyles. Since the task was pretty simple i only added the few classes to the global css. Also would have prefered scss. Used the predefined classes and no libs for css (would have probably added some)
  - add env files (since i spent a bit of time setting up the node server i lost maybe some more than time expected for the small things in react)
  - i used redux for both pages, i dont think it should be used for "non global" but i used it everywhere because of the requirements of the task
  - added only basic render tests (would have added more) + code quality on test has to be improved

## How to run

    - The server needs to be live for the app to work properly
    1. navigate to API and run - npm install (only the first time)
    2. run - npm start

    3. navigate to WEB and run - npm install
    4. run - npm start
