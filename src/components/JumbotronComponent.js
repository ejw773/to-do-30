import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">To-Do 30 Challenge</h1>
            <hr className="my-4" />
            <h1 className="display-6">Elijah Wilcott</h1>
            <hr className='my-4' />
            <p>The "To Do App" is the classic exercise in learning web development. This challenge is to create and deploy 30 separate To Do apps, with only one day to create each one.</p>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe title='intro-video' className="embed-responsive-item" src="https://www.youtube.com/embed/rQr4AVyOf5o" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Jumbotron;
