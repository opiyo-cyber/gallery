pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                // Render will automatically deploy a Node.js app
                // The Jenkins pipeline just ensures the environment is ready.
                echo 'Deployment will be handled by Render.com'
            }
        }
    }
}
