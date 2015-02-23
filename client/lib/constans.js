// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'MeteorPlate',
  DESCRIPTION: 'A boilerplate for meteorjs projects, made on top of Metteodem ideas http://matteodem.github.io/meteor-boilerplate/'
};
