# react-w-vite-openai-app
This is a React project that was created with Vite and that is using the OpenAI API. 
With this application we are able to ask some questions that are given to us as examples for output. 
There are various things that we can do with OpenAI but I'm just starting to play around with what is possible.

There is a bit of a couple of caveat when using OpenAI with a React Application.
- [ ] [Vite environment variables information](https://vitejs.dev/guide/env-and-mode.html#:~:text=ADS%20VIA%20CARBON-,Env%20Variables%20and%20Modes,%23,-Env%20Variables)
___
## Project Requirements
- Node JS [Node JS Documentation](https://nodejs.org/en)
- I'd stick with what most users are installing unless you are more experienced and are feeling frisky then go for it

## Setting up the Vite Project (From scratch)
- [ ] [Vite JS Documentation](https://vitejs.dev/guide/#:~:text=svelte%2Dts-,Scaffolding%20Your%20First%20Vite%20Project,%23,-Compatibility%20Note)
- [ ] Reference to Vite and how to use environment variables
- [ ] So we will need to install a few dependencies by entering in the command line `npm i --save-dev dotenv openai`
- [ ] Run the Project after following the installation along with the two needed dependencies `npm run dev`
- [ ] Follow one of the examples and play around and see what happens

## Pulling the changes from this repository
- [ ] Go ahead and clone this repository or download the zipped file
- [ ] Then go ahead and place the project in a directory that makes sense
- [ ] Once the repository has been cloned or unzipped into a directory
- [ ] Change into that directory and run `npm install` or `yarn add` this will get all the needed dependencies in the project
- [ ] If you would like to see the versions what is needed for the project to run look inside of the `package.json` file
```
{
  "name": "react-chatgpt-with-vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "openai": "^3.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^3.1.0",
    "dotenv": "^16.0.3",
    "vite": "^4.2.0"
  }
}
```
___
## Landing Page
Once the project has started running and is loaded into a new browser tab.
We should see the follow contents in the browser. 
![landing-page-openai](https://user-images.githubusercontent.com/60634649/226222917-8bcc78dd-4b9a-42ca-8381-e5da341e27f4.png)

## Questions Page
We can click on one of the choices that are on the landing page.
The next page is where we can ask questions. If we click on the `Let's see what happens` button the first indexed answer will return from the OpenAI API.
If we ask a question the returned answer will then be calculatted and returned. I am using a free account so the threshold is set to $5. 
Initially the starting value was like $16-$18 dollars but I wasn't experimenting with OpenAI at that time. 
When a question is asked we will see output as text to the UI that resembles what is shown below.
![ask-question-openai](https://user-images.githubusercontent.com/60634649/226223192-14af52f1-c4d4-4f7e-a73d-063d7ba47e19.png)
___
## Accessiblity Checks
I have gone ahead an run accessibility checks on the project and there are no failing issues. Aside from the fact that this isn't the most visually apealing project. I'll work on other projects to make them look all pretty but for the initial run at it this will work. 
The toolset that I am using is from AxeDeque chrome extension that you can add if you'd like. 
- [ ] Note: A website that looks visually appealing that is not accessible is of no use to someone who uses assisitive technologies
- [ ] [AxeDeque - Chrome Extension also available for Firefox](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US&utm_term=axe%20browser%20extension&utm_campaign=Search%20-%20axe%20DevTools%20-%20Checker&utm_source=adwords&utm_medium=ppc&hsa_src=g&hsa_ad=626089536234&hsa_tgt=kwd-942809056982&hsa_mt=e&hsa_ver=3&hsa_acc=7854167720&hsa_kw=axe%20browser%20extension&hsa_grp=142979637091&hsa_cam=17378411167&hsa_net=adwords&gclid=CjwKCAjw5dqgBhBNEiwA7PryaJc-9ra0Yo1JpJHGSlJCOcckQadrtL_Y-8Gouyy6NI4bCqq5QVWMgBoCjgoQAvD_BwE)





