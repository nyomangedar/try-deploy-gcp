pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    environment{
        DATABASE_URI = credentials('DATABASE_URI')
    }

    stages {
        stage('Environment configuration'){
            steps {
                echo 'Try env variable'
                echo 'DATABSE_URI = $DATABSE_URI >> .env'
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