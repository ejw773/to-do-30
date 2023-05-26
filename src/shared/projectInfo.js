const projectInfo = [
    {
        day: 1,
        title: 'Finished Before Breakfast',
        comment: "I just did day 1 during the few minutes before breakfast. Yes, it's bad, but it's DONE!"
    },
    {
        day: 2,
        title: 'React-Bootstrap',
        comment: "For today's app, I used React-Bootstrap to polish up the appearance. It looks a whole lot better than Day 1's pathetic deployed-before-breakfast app, but functionality isn't any better. I'll work on that for tomorrow's app."
    },
    {
        day: 3,
        title: 'Complete / Delete Tasks',
        comment: "Today I continued with React-Bootstrap, and added the ability to check off items and even delete them. This was the first day I wasn't completely humiliated by the results. I'm actually getting somewhere!"
    },
    {
        day: 4,
        title: 'Style It Up!',
        comment: 'Today I planned on just sitting on my laurels by re-creating what I did yesterday. However, once that was done, I found myself adding other styling improvements. I even integrated saving state to local storage. With hooks, it’s so easy!'
    },
    {
        day: 5,
        title: 'Sitting on My Laurels',
        comment: "Today I did indeed just sit on my laurels - seeking to merely repeat yesterday's success. I did make some small improvements - adding FontAwesome, for example. Eventually I need to get around to making a way to modify existing tasks."
    },
    {
        day: 6,
        title: 'Modify Existing Tasks',
        comment: "A major flaw in previous versions was: No way to change a task that already exists. As I addressed that problem, I found myself edging toward prop drilling, so I was also going to add Redux. Unfortunately, time would not allow."
    },
    {
        day: 7,
        title: 'Material-UI',
        comment: "Today I learned the basics of Material-UI. After working so much with Bootstrap, it wasn't much of a jump. The biggest challenge, not surprisingly, was layout - Box, Conatiner, Grid. I have a lot to learn about those. I'm also not clear about how the custom styling works - but that's for another day."
    },
    {
        day: 8,
        title: 'Material-UI: Take 2',
        comment: "Today I did a second try at Material-UI. It's even slimmer than yesterday's, but I'm tired today."
    },
    {
        day: 9,
        title: 'Material-UI is Here to Stay',
        comment: "After polling some developers, I came to the conclusion that I should switch from Bootstrap to Material-UI for the rest of the project. For today's entry, I focused on duplicating a blog post's styling of a similar app."
    },
    {
        day: 10,
        title: 'Material-UI: Getting Comfortable',
        comment: "I'm starting to get comfortable with Material-UI - but how to organize the page is still a little mysterious to me. I'd like to add categories to the to-do list, but it may be some time before I'm able to handle all the pieces needed."
    },
    {
        day: 11,
        title: 'Redux at Last!',
        comment: "Today I finally got Redux into the To-Do app. With hooks and toolkit, it's far easier than in the past. However, I did not get around to localStorage. Maybe tomorrow.",
        bullets: [
            'Was thrilled to discover no need for connect, mapStateToProps, or mapDispatchToProps',
            'Looked into persisting to local storage, and it was not as simple as I had hoped'
        ]
    },
    {
        day: 12,
        title: 'Back in the Saddle',
        comment: "After weeks away, I'm back. And I forgot a lot. Sadly, today really is my first real 'copy' of the previous iteration. But I am happy to report that no copy/paste was used.",
        bullets: [
            'Continued using Material-UI',
            'No background image today'
        ]
    },
    {
        day: 13,
        title: 'One Step Back, Two Steps Forward',
        comment: "Yesterday I started a project, and didn't finish before midnight. I took on too much with trying to learn Redux-Toolkit and Material-UI at the same time. So today I reverted to Bootstrap, and focused on Redux-Toolkit - especially saving to local storage.",
        bullets: [
            "Used local storage to persist Redux, using redux-persist",
            "Experimented with more ways to place and center a static background image (including lots of ways that didn't work!)",
            "Struggled with - and overcame - issues with updating an object within an array, selected by id, inside of createSlice()",
            "Sorted tasks based on whether or not complete"
        ]
    },
    {
        day: 14,
        title: 'Redux Remixed',
        comment: "What a thrilling day! I stayed primarily focused on Redux, and am now getting quite comfortable with Redux Toolkit.",
        bullets: [
            "Used bootstrap-icons instead of FontAwesome",
            "Easily re-implemented yesterday's Redux setup (without referring to yesterday's project)",
            "Tinkered with react-bootstrap-drawer, but did not use it",
            "For the landing page, tried react-back-to-top-button, but ended up not using it; id='top' in conjunction with href='#top' works just fine (no need to get fancy)",
            "Added accordion to landing page for bullet points",
            "Discovered that react-bootstrap does not have built-in sidebar functionality"
        ]
    },
    {
        day: 15,
        title: 'Ugly Retro',
        comment: "What a hideous version this turned out to be. I decided to forego a CSS library entirely, and this is what I ended up with.",
        bullets: [
            "No CSS library, which is why it looks so bad",
            "Array methods (filter, find, map) are becoming second nature",
            "Using hooks has become easy",
            "After hearing about it for a long time, I finally used Coolors.co for selecting a color scheme",
            "For help with the responsive header, I revisited a site I hadn't been to in a long time: W3Schools",
            "Wow this thing looks awful"
        ]
    },
    {
        day: 16,
        title: 'I Forgot Everything',
        comment: "Due to working with a different tech stack, I haven't touched React in nearly a year. It seems I've forgotten everything. Today was just a matter of looking through previous code, remembering how React works, and getting something, no matter how awful, to work.",
        bullets: [
            "Re-read code from last year to remember how React even works",
            "Re-created Day 1's awful app just to get something working and deployed",
            "Did manage to get Bootstrap installed for the nav bar",
            "As on Day 1, I got it done before breakfast! So that's sometehing I guess."
        ]
    }
];

export default projectInfo;
