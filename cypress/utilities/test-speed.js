// ********************************************
// These values allow you easily toggle the
// speed of tests, within your application
// based on wait times, defaultSetTimeouts etc
//
// Fast Speed: As it says in the title, goes
// through the tests as quickly as possible
//
// Standard Speed: Emulates how quickly a average
// would interact with the application
//
// ********************************************

export const globalSpeed = {
  config: {
      fast: {
        'defaultCommandTimeout': 3000,
        'execTimeout': 20000,
        'pageLoadTimeout': 10000,
        'requestTimeout': 5000,
        'responseTimeout': 10000
      },
      standardPace: {
        'defaultCommandTimeout': 7000,
        'execTimeout': 40000,
        'pageLoadTimeout': 20000,
        'requestTimeout':5000,
        'responseTimeout': 10000
      },
      default: {
        'defaultCommandTimeout': 4000,
        'execTimeout': 60000,
        'pageLoadTimeout': 60000,
        'requestTimeout': 5000,
        'responseTimeout': 30000
      }
  },
  waiting: {
    fast: 5000,
    standardPace: 7000,
    default: 5000
  }
}
