'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  initializing: function () {
    this.argument('featureName', {
      desc: 'The name of the redux feature. This will be the folder name.',
      type: String,
      required: true,
      default: 'feature'
    });
  },

  prompting: function () {
    var featureName = this.options.featureName;

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the rad ' + chalk.red('generator-redux-feature') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'shouldCreate',
      message: 'Create ' + featureName + ' folder in ' + this.destinationRoot() + ' ?',
      default: true
    }];

    return this.prompt(prompts)
    .then(function (props) {
      if (!props.shouldCreate) {
        console.log('Generator cancelled.');
        process.exit(1);
      }
      // To access props later use this.props.`property`;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var featureName = this.options.featureName;

    this.fs.copyTpl(
      this.templatePath('feature'),
      this.destinationPath(featureName),
      { featureName: featureName }
    );
  }
});
