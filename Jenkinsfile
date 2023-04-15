pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Environment configuration'){
            steps {
                echo 'Try env variable'
                echo "DATABASE_URI = ${env.DATABASE_URI}"
                sh 'DATABASE_URI = $DATABASE_URI >> .env'
            }
        }
        stage('Building Node') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
    }
}