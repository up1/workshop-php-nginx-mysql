pipeline {
    agent {
        label 'docker01'
    }
    stages {
        stage('Initialize') {
            steps {
                checkout scm
            }
        }
        stage('Build image') {
            steps {
                sh 'docker compose build'
            }
        }
        stage('Start containers') {
            steps {
                sh 'docker compose up -d nginx'
            }
        }
        stage('UI testing') {
            steps {
                sh 'docker compose up testing --abort-on-container-exit --build'
            }
        }
    }
}