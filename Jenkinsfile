pipeline {
  agent any
  stages {
  stage('Clone') {
  steps {
    // One or more stages need to be included within the stages block.
    git changelog: false, credentialsId: 'jagangithub', url: 'https://github.com/jagankrishnan05/nodejs-hello-world.git'
  }
}
  }
}
