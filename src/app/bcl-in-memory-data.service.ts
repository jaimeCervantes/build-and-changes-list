import { InMemoryDbService } from 'angular-in-memory-web-api';
export class BclInMemoryDataService implements InMemoryDbService {
	createDb() {
		let bcl = [
      {
        state: 'asccepted', //rejected,running, failed, 
        type: 'change',//or change
        owner: 'Jaime',
        timeStarted: '', //some datetime representation
        metrics: {
          test: 64,
          maintainability: 53,
          security: 64,
          workmanship: 72,
          state: 'rejected/failed' //complete/succeed, running, accepted, pending
        },
        build: {
          dateTime: '',
          build: true,
          release: true,
          state: 'accepted' //complete/succeed, running, accepted, pending
        },
        unitTest: {
          passed: 142,
          failed: 10,
          covered: 76,
          state: 'accepted' //complete/succeed, running, accepted, pending
        },
        functionalTest: {
          passed: 4321,
          failed: 2145,
          covered: 23,
          state: 'rejected/failed' //complete/succeed, running, accepted, pending
        },
        result: {
          stateText: 'Change Accepted',
          actionText: 'Auto-merge',
          actions: [
            {
              type: 'button',
              text: 'deploy',
              icon: 'magnifier'
            },
            {
              type: 'select',
              options: [],
              label: 'to:'
            }
          ]
        }
      }
    ];

    return {bcl};
	}
}