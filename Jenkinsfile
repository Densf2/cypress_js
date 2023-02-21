pipeline {
  agent {
    // this image provides everything needed to run Cypress + browsers
    docker {
      image 'cypress/browsers:node-16.18.1-chrome-110.0.5481.96-1-ff-109.0-edge-110.0.1587.41-1'
    }
  }

  stages {
    // first stage installs node dependencies and Cypress binary
    // npm ci - install dependecies for Jenkins
    stage('build') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
    }

    // this stage runs end-to-end tests, and each agent uses the workspace
    // from the previous stage
    stage('cypress tests') {

      // simple command for triggering tests
      // NO_COLOR environment variable to 1 to strip an ANSI color code from the output, and then runs Cypress
      // if need you can provide all params that you need
      steps{
        dir('e2e') {
            git branch: 'main',
            url: 'git@github.com:Densf2/cypress_js.git',
            credentialsId: 'YOUR_CREDS_ID'
        }
        sh '''
            NO_COLOR=1 
            cd e2e && npm run cypress run
            '''
      }
    }
  }
}