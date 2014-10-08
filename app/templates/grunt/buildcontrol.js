// Manage and push built code
// grunt-build-control: <https://github.com/robwierzbowski/grunt-build-control>

'use strict';

module.exports = {

    // Base options
    options: {
        dir: '<%%= path.dist %>',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },

    // Push targets
    dist: {
        options: {
            // remote: 'git@github.com:example_user/example_webapp.git',
            // branch: 'gh-pages'
        }
    }

};
