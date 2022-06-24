var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/dalleman1/svelte-app.git', // Update to point to your repository  
        user: {
            name: 'dalleman1', // update to use your name
            email: 'monglade.dalsgaard@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)