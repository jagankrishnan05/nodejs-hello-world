pipeline {
    agent any 
    environment {
        //once you sign up for Docker hub, use that user_id here
        registry = "jagankrishnan05/projects1"
        //- update your credentials ID after creating credentials for connecting to Docker Hub
        registryCredential = 'jagandockerhub'
        dockerImage = ''
    }
    
    stages {    
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    
     // Uploading Docker images into Docker Hub
    stage('Upload Image') {
     steps{    
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
            }
        }
      }
    }
    
     // Stopping Docker containers for cleaner Docker run
     stage('docker stop container') {
         steps {
            sh 'docker ps -f name=Nodejsproject -q | xargs --no-run-if-empty docker container stop'
            sh 'docker container ls -a -fname=Nodejsproject -q | xargs -r docker container rm'
         }
       }
    
    
    // Running Docker container, make sure port 8082 is opened in 
    stage('Docker Run') {
     steps{
         script {
            dockerImage.run("-p 8082:8082 --rm --name Nodejsproject")
         }
      }
    }
  }
  }
