pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the Git repository
                git 'https://github.com/TharukshiDiyunugala/Online-Book-Shop'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images for backend and frontend services
                    docker.build('mern-backend', './mern-servers')
                    docker.build('mern-frontend', './mern-client')
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    // Use docker-compose to bring up the containers
                    dockerCompose.up()
                }
            }
        }
    }

    post {
        always {
            script {
                // Use docker-compose to bring down the containers
                dockerCompose.down()
            }
        }
    }
}
