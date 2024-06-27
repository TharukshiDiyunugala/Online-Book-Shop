pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'your-docker-registry'
        DOCKER_IMAGE = 'online-book-shop'
        DOCKER_CREDENTIALS_ID = 'docker-credentials-id'
        GIT_REPO = 'https://github.com/TharukshiDiyunugala/Online-Book-Shop.git'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: env.GIT_REPO, branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'your-docker-registry'
        DOCKER_IMAGE_BACKEND = 'online-book-shop-backend'
        DOCKER_IMAGE_FRONTEND = 'online-book-shop-frontend'
        DOCKER_CREDENTIALS_ID = 'docker-credentials-id'
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
                    docker.build("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_BACKEND}", 'mern-servers')
                    docker.build("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_FRONTEND}", 'mern-client')
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry("https://${env.DOCKER_REGISTRY}", env.DOCKER_CREDENTIALS_ID) {
                        docker.image("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_BACKEND}").push()
                        docker.image("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE_FRONTEND}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Ensure Docker Compose is installed on the server
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
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
                script {
                    docker.build("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${env.DOCKER_REGISTRY}", env.DOCKER_CREDENTIALS_ID) {
                        docker.image("${env.DOCKER_REGISTRY}/${env.DOCKER_IMAGE}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Add deployment steps here
                    // Example: docker-compose up -d
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