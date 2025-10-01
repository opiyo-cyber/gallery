pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Jenkins will automatically clone your GitHub repo
                echo 'Checking out code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Test (skipped)') {
            steps {
                echo 'No tests defined. Skipping this step.'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Triggering Render deploy...'
                sh '''
                    curl -X POST https://api.render.com/deploy/srv-xxxxxxxxxxxxxxxxxxxx?key=YOUR_DEPLOY_HOOK_KEY
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment succeeded!'
        }
        failure {
            echo '❌ Build or deployment failed!'
        }
    }
}
