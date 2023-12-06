# Is this Cat Breed for You?

This is a project I put together, because I love cats, and wanted an application that would show me all the different breeds of cats, all in one area, as well as have something to send to a friend, so they can experience the joy of cats as well. (With more features on my list to be added to turn this into something to help people actually find a new best friend)

**Link to project:** https://isthisbreedforyou-catapp.netlify.app/

![alt tag](/imgs/screencapture-127-0-0-1-5500-index-html-2023-09-09-12_47_24.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Bootstrap

The main part of this project is vanilla JavaScript with a little bit of HTML for structure, Bootstrap to make it look decent, and a sprinkle of CSS. The [Cat Api](https://thecatapi.com/) was used to fetch data about different cat breeds, and plug them into the appropriate elements.

## Optimizations

- It could definitely look better, in the future I'd like to clean up the design of the page to make it more appealing.[^1]
- I would love to add more characteristics for each breed.[^2]
- Implimentation of an Overall "Is this cat right for you" based on an average of it's numbers.[^3]
- Comparing user input vs cat characteristics, to see if this cat is good in their household based on what they have (dogs, children, doesn't like shedding, etc)[^4]

## Lessons Learned:

This project helped me dig deeper into the dismantling of APIs and how to pull information from them. I was stuck for a bit with the idea of how to grab both images, and text at the same time, which resulted in multiple fetch requests instead of using one fetch, and just pulling different pieces of data from the response. I believe now after working on this project I have a much better grasp on how to handle fetch requests from Web APIs.

I also got to experiment with Bootstrap to organize the application, and make it look like something you would see commercially.

[^1]: I would enjoy adding Bootstrap or Tailwind CSS to this project to give it a more "professional" vibe.
[^2]: (How much they shed, activity level, etc)
[^3]: The way the information has been fetched from the catapi, each statistic is on a scale of 1-5, so I'd love to get all of the statistics and then average them to get an "overall score" for each cat.
[^4]: I would like to include a form in the future that takes in exactly what type of characteristics an owner is looking for, and then finding those breeds of cats based on those statistics.
