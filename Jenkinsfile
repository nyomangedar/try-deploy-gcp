pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Stop server'){
            steps{
                echo 'Stopping server'
                sh 'pm2 stop 0'
            }
        }
        stage('Environment configuration'){
            steps {
                echo 'Try env variable'
                echo "DATABASE_URI = ${env.DATABASE_URI}"
                sh "rm -f .env"
                sh "touch .env"
                sh """
                echo "DATABASE_URI = ${env.DATABASE_URI}\nSTATUS=PRODUCTION" >> .env
                """
            }
        }
        stage('Building Node') {
            steps {
                echo 'Mkdir node_modules'
                sh 'mdkir node_modules'
                echo 'Building...'
                sh 'npm ci '
            }
        }
        stage('Starting server'){
            steps {
                echo 'Starting Server'
                sh 'pm2 start server.js'
                sh 'pm2 save'
            }
        }
    }
}