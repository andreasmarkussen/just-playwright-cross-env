// // playwright.config.ts
// import { PlaywrightTestConfig } from '@playwright/test';

//     // // Default 'list' reporter for the terminal
//     // ? 'list'
//     // // Two reporters for CI:
//     // // - concise "dot"
//     // // - comprehensive json report
//     // : [ ['dot'], [ 'json', {  outputFile: 'test-results.json' }] ],



// const config: PlaywrightTestConfig = {
//     reporter: [ 
//         ['dot'], 
//         ['json',{  outputFile: 'test-results.json' }],
//         ['junit',{  outputFile: 'test-results.xml' }]
//     ],
// };


// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [ ['json', { outputFile: 'results.json' }] ],
};
export default config;