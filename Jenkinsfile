pipeline {
    agent any

    options {
        timestamps()
        ansiColor('xterm')
    }

    triggers {
        // Requires GitHub plugin; otherwise configure webhook in Jenkins
        githubPush()
    }

    environment {
        NODE_ENV = 'production'
        RENDER_DEPLOY_HOOK_URL = credentials('render_deploy_hook_url')
        NOTIFY_EMAIL = credentials('notify_email')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                sh 'node --version || true'
                sh 'npm --version || true'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm ci || npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
            post {
                unsuccessful {
                    script {
                        if (env.NOTIFY_EMAIL) {
                            mail to: env.NOTIFY_EMAIL, subject: "Tests Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}", body: "The test stage failed for ${env.JOB_NAME} #${env.BUILD_NUMBER}. Check Jenkins for details."
                        } else {
                            echo 'NOTIFY_EMAIL not configured; skipping email notification.'
                        }
                    }
                }
            }
        }

        stage('Deploy to Render') {
            when {
                expression { currentBuild.currentResult == 'SUCCESS' }
            }
            steps {
                echo 'Triggering Render deploy...'
                sh 'curl -fsS "$RENDER_DEPLOY_HOOK_URL"'
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
