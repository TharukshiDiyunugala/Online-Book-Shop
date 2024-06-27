pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = 'tharukshidiyunugala/online-book-shop-backend'
        DOCKER_IMAGE_FRONTEND = 'tharukshidiyunugala/online-book-shop-frontend'
        DOCKER_CREDENTIALS_ID = '12345'
        GIT_REPO = 'https://github.com/TharukshiDiyunugala/Online-Book-Shop.git'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: env.GIT_REPO, branch: 'main'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE_BACKEND}", 'mern-servers')
                    docker.build("${env.DOCKER_IMAGE_FRONTEND}", 'mern-client')
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('', env.DOCKER_CREDENTIALS_ID) {
                        docker.image("${env.DOCKER_IMAGE_BACKEND}").push()
                        docker.image("${env.DOCKER_IMAGE_FRONTEND}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'docker-compose down'
                        sh 'docker-compose up -d'
                    } else {
                        bat 'docker-compose down'
                        bat 'docker-compose up -d'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}