module.exports = {
  name: 'tossup',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tossup',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
