module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo|@expo|@unimodules|sentry-expo|native-base|react-clone-referenced-element|react-redux)"
  ]
};