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
        stage('Building Node') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
            steps {
                echo 'Try env variable'
                echo 'DATABSE_URI = $DATABSE_URI >> .env'
            }
        }
    }
}