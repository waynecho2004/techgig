# TechGig React Application
An online React application to search, view and save the job search postings based on search fields description and location. Please click [here](https://techgig.herokuapp.com/#/) to access.

## Project Links
- [Githhub](https://github.com/waynecho2004/techgig)
- [TechGig App](https://techgig.herokuapp.com/#/)


## Wireframes and Design
[WireFrames (Total 4 Pages)](https://www.figma.com/file/UTfiQrkwIIiCXiwQDpbbyk/Github-Job-Search-Wideframe?node-id=0%3A1)
 
 ### Design Concepts:
 Started with the Wireframes design, followed by Components hierarchy and specifying state for the components, and then added React Routers to handle multiple routes.

#### Components: 
- App
    - Nav
    - Search
        - Positions
            - PositionRow (functional Component)
                - Position
    - Favorites 

#### Component State
- positions:[]
- favorites: []

### Technologies
- React 
    - Routes
    - Links
- Axios
    - Third Party API
- Local Storage
- Node.js
- React Bootstrap
- CSS

### Development and Deployment Environment:
- Visual Studio Code
- Chrome
- Heroku

### Version Control:
- GIT Repo
- GitHub (Main and Branches)

### MVP
Build a project using ReactJS App and third party API. 

## User Stories and Features
- User should be able to see the Home page when user accesses the TechGig application. 
- User should be able to navigate using the navigation bar (Search, Favorites and About Us).
- User should be able to navigate to the search page.
- User should be able to perform the search based on the keyword and location.
- User should be able to see the matching jobs once the search button is clicked.
- User can click on the 'Like' button to add the job posting to the favorites list.
- User should be able to see the job details when clicking on the job title.
- User should be able to navigate to the favorites list page.
- User should be able to see the favorite job listing on the favorites page.
- User should be able to remove any job from the favorites list.

## Future Development / Enhancement
- Search based on the job type (full time vs part-time)
- Job filtered by most recent.
- Page loading features.

### Acknoledgements/References
- GitHub Job API.
- Google Search/ Stack overflow.
