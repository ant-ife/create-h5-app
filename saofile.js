module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: "What's the name of your new project",
        default: this.outFolder,
        filter: val => val.toLowerCase(),
      },
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**',
      transformInclude: ['package*.json', 'README.md'],
      filters: {
        // only for test case, npm will ignore .gitignore
        '.gitignore': false,
      },
    },
    {
      type: 'move',
      patterns: {
        // We keep `.gitignore` as `gitignore` in the project
        // Because when it's published to npm
        // `.gitignore` file will be ignored!
        gitignore: '.gitignore',
      },
    },
  ],
  async completed() {
    await this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
