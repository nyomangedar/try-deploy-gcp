pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Environment configuration'){
            environment{
            DATABASE_URI = credentials('DATABASE_URI')
        }
            steps {
                echo 'Try env variable'
                echo 'DATABASE_URI = $DATABASE_URI'
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